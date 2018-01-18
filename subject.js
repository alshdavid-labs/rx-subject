class Subject {
    constructor(){
      this.subscribers = []
    }
    
    subscribe(cb) {
      let subscription = {
        callback: cb,
        unsubscribe: () => { 
          subscription.callback = null 
          this.cleanup()
        }
      }
      this.subscribers.push(subscription)
      return subscription
    }
    
    next(val) {
      this.subscribers.forEach(
        sub => sub.callback ? sub.callback(val) : null
      )
    }
    
    cleanup() {
      this.subscribers = this.subscribers
        .filter(
          sub => sub.callback ? sub.callback : null
        )
    }
}
