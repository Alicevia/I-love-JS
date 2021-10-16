import EventEmitter from "events";
import http from "http";
import Context from "./context.js";
import Request from "./request.js";
import Response from "./response.js";

class Application extends EventEmitter {
  context;
  response;
  request;
  middlewares = [];
  constructor() {
    super();
    this.request = new Request();
    this.response = new Response();
    this.context = new Context(this.request, this.response);
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  createContext(req, res) {
    let response = new Response(res);
    let request = new Request(req);
    let context = new Context(request, response);
    return context;
  }
  compose(ctx) {
    let index = -1;
    const dispatch = (i) => {
      if (index >= i) {
        return Promise.reject("next() call multiples times");
      }
      index = i;
      if (this.middlewares.length === i) return Promise.resolve();
      let middleware = this.middlewares[i];
      try {
        return Promise.resolve(middleware(ctx, () => dispatch(i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    };
    return dispatch(0);
  }
  handleRequest = (req, res) => {
    let context = this.createContext(req, res);
    res.statusCode = 404;
    this.compose(context)
      .then(() => {
        if (context.body) {
          res.end(context.body);
        } else {
          res.end("Not Found");
        }
      })
      .catch((e) => {
        this.emit("error", e);
      });
  };
  listen(...args) {
    let server = http.createServer(this.handleRequest);
    server.listen(...args);
  }
}
export default Application;
