class Context {
  #reqProxyList = ["url", "path", "query"];
  #resProxyList = ["body"];
  req;
  request;
  res;
  response;
  constructor(request = {}, response = {}) {
    this.request = request;
    this.req = request.req;
    this.response = response;
    this.res = response.res;
    this.#reqProxyList.forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return this.request[key];
        },
      });
    });
    this.#resProxyList.forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return this.response[key];
        },
        set(value) {
          this.response[key] = value;
        },
      });
    });
  }
}

export default Context;
