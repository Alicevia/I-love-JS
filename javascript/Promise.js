const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  status = PENDING;
  fulfilledFnAry = [];
  rejectedFnAry = [];
  value;
  reason;
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    this.fulfilledFnAry.forEach((item) => item());
  }
  reject(reason) {
    if (this.status !== PENDING) return;
    this.reason = reason;
    this.status = REJECTED;
    this.rejectedFnAry.forEach((item) => item(this.reason));
  }
  then(
    fulfilledFn = (value) => value,
    rejectedFn = (reason) => {
      throw reason;
    }
  ) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status == FULFILLED) {
        setTimeout(() => {
          try {
            let x = fulfilledFn(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let x = rejectedFn(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        this.fulfilledFnAry.push(() => {
          setTimeout(() => {
            try {
              let x = fulfilledFn(this.value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.rejectedFnAry.push(() => {
          setTimeout(() => {
            try {
              let x = rejectedFn(this.reason);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError("chaining circle"));
    }
    if (x instanceof MyPromise) {
      x.then(resolve, reject);
    } else {
      resolve(x);
    }
  }
  static all(ary) {
    let result = [];
    let index = 0;

    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index == ary.length) {
          resolve(result);
        }
      }
      for (let index = 0; index < ary.length; index++) {
        const item = ary[index];
        if (item instanceof MyPromise) {
          item.then(
            (value) => addData(index, value),
            (reason) => reject(reason)
          );
        } else {
          addData(index, ary[index]);
        }
      }
    });
  }
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve) => {
        resolve(value);
      });
    }
  }
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }
  catch(callback) {
    return this.then(undefined, callback);
  }
}
