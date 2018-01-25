function Subject(){
  this.subscribers = []
  
  this.subscribe = (callback) => {
    const sub = this.createSubscriber(callback)
    this.subscribers.push(sub)
    return sub
  }
  
  this.createSubscriber = (callback) => ({
      callback: callback,
      unsubscribe: () => this.subscribers = this.subscribers.filter(s => s.callback != callback)
  })
  
  this.next = (val) => this.subscribers.forEach(s => s.callback ? s.callback(val) : null)
}
