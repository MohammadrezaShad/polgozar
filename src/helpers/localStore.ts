import PubSub from './pubSub';

interface CallbackFunc {
  (data: any): any;
}

class LocalStore {
  pubSub = new PubSub();

  private storageListener = (key: string) => (e: StorageEvent) => {
    if (e.storageArea === localStorage && e.key === key) {
      const value = JSON.parse(e.newValue || '');
      this.pubSub.emit(key, value);
    }
  };

  set = (key: string, value: any) => {
    const stringifyValue = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, stringifyValue);
    this.pubSub.emit(key, value);
  };

  get = (key: string) => {
    const value = localStorage.getItem(key) || '';
    return typeof key === 'object' ? JSON.parse(value) : value;
  };

  remove = (key: string) => {
    localStorage.setItem(key, '');
    this.pubSub.emit(key, '');
  };

  subscribe = (key: string, cb: CallbackFunc) => {
    this.pubSub.subscribe(key, cb);
    window.addEventListener('storage', this.storageListener(key));
  };

  unsubscribe = (key: string, cb: CallbackFunc) => {
    this.pubSub.unsubscribe(key, cb);
    window.removeEventListener('storage', this.storageListener(key));
  };
}

const singletonLocalStore = new LocalStore();
Object.freeze(singletonLocalStore);

export default singletonLocalStore;
