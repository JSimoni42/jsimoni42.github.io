class IntersectionObserverWrapper {
  private intersectionObserver: IntersectionObserver;
  private listeners: IntersectionObserverCallback[];

  constructor() {
    this.intersectionObserver = new IntersectionObserver(this.observerCallback.bind(this));
    this.listeners = [];
  }

  public getObserver() {
    return this.intersectionObserver;
  }

  public disconnect() {
    this.intersectionObserver.disconnect();
    this.listeners = [];
  }

  public addIntersectionListener(listener: IntersectionObserverCallback) {
    this.listeners.push(listener);
  }

  public removeIntersectionListener(listenerToRemove: IntersectionObserverCallback) {
    this.listeners = this.listeners.filter((listener) => listener !== listenerToRemove);
  }

  public observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    this.listeners.forEach((listener) => {
      listener(entries, observer);
    });
  }
}

export default new IntersectionObserverWrapper();