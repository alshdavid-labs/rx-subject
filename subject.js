export class Subject {
    constructor() {
        this.subscribers = []
    }

    subscribe(cb) {
        this.subscribers.push({})
        let subscription = this.subscribers[this.subscribers.length - 1]
        subscription.callback = cb
        subscription.unsubscribe = () => {
            subscription.callback = null
            this.cleanup()
        }
        return subscription
    }

    next(val) {
        this.subscribers.forEach(
            sub => (sub.callback ? sub.callback(val) : null)
        )
    }

    cleanup() {
        for (let i; i < this.subscribers.length; i++) {
            if (!this.subscribers[i].callback) {
                this.subscribers[i] = null
                this.subscribers.splice(i, 1)
            }
        }
    }
}
