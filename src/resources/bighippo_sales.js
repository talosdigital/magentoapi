// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage orders.
*/
function BigHippo() {
  this.prefix = 'bighippo_sales.';
}
util.inherits(BigHippo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
   Allows you to retrieve the required order information.
   */
  createTransaction: {
      mandatory: 'orderId',
      optional: 'transactionId,addInfo,type,failsafe,isClosed',
    }
};

// creating prototypes using curry func
for (var key in protos) {
  BigHippo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = BigHippo;
