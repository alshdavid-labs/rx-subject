function Subject() {
  var _this = this;

  this.subscribers = [];

  this.subscribe = function (callback) {
    var sub = _this.createSubscriber(callback);
    _this.subscribers.push(sub);
    return sub;
  };

  this.createSubscriber = function (callback) {
    return {
      callback: callback,
      unsubscribe: function unsubscribe() {
        return _this.subscribers = _this.subscribers.filter(function (s) {
          return s.callback != callback;
        });
      }
    };
  };

  this.next = function (val) {
    return _this.subscribers.forEach(function (s) {
      return s.callback ? s.callback(val) : null;
    });
  };
}
