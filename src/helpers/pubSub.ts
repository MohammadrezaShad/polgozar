interface CallbackFunc {
  (data: any): any;
}

export default class PubSub {
  events: { [key: string]: CallbackFunc[] } = {};

  constructor() {
    this.events = {};
  }

  subscribe(key: string, cb: CallbackFunc) {
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key].push(cb);
  }

  unsubscribe(key: string, cb: CallbackFunc) {
    if (this.events[key]) {
      const index = this.events[key].indexOf(cb);
      if (index >= 0) {
        this.events[key].splice(index, 1);
      }
    }
  }

  emit(key: string, value: any) {
    if (this.events[key]) {
      this.events[key].forEach((fn: CallbackFunc) => {
        fn(value);
      });
    }
  }
}
