import { URL, parse } from "url";
class Request {
  req; //原生req对象
  constructor(req = {}) {
    this.req = req;
  }
  get url() {
    return this.req.url;
  }
  get path() {
    return parse(this.req.url).pathname;
  }
  get query() {
    return parse(this.req.url, true).query;
  }
}
export default Request;
