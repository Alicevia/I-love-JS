class Response {
  #body;
  res;
  constructor(res = {}) {
    this.res = res;
  }
  get body() {
    return this.#body;
  }
  set body(value) {
    this.res.statusCode = 200;
    this.#body = value;
  }
}

export default Response;
