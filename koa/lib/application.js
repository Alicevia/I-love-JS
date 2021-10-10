import EventEmitter from "events";
import http from "http";
import Context from "./context.js";
import Request from "./request.js";
import Response from "./response.js";

class Application extends EventEmitter {
  context;
  response;
  request;
  callback;
  constructor() {
    super();
    this.request = new Request();
    this.response = new Response();
    this.context = new Context(this.request, this.response);
  }
  use(callback) {
    this.callback = callback;
  }
  createContext(req, res) {
    let response = new Response(res);
    let request = new Request(req);
    let context = new Context(request, response);
    return context;
  }
  handleRequest = (req, res) => {
    let context = this.createContext(req, res);
    res.statusCode = 404;
    this.callback(context);
    console.log(context.body);
    if (context.body) {
      res.end(context.body);
    } else {
      res.end("Not Found");
    }
  };
  listen(...args) {
    let server = http.createServer(this.handleRequest);
    server.listen(...args);
  }
}
export default Application;
