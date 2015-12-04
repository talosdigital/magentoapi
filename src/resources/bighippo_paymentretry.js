// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage payment retry.
*/
function BigHippo() {
  this.prefix = 'bighippo_paymentretry.';
}
util.inherits(BigHippo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
   Allows you to create the payment retry.
   */
  create: {
      mandatory: 'paymentRetryData',
      optional: '',
    },

  /**
   Allows you to update the payment retry.
   */
  update: {
    mandatory: 'paymentRetryId,paymentRetryData',
    optional: '',
  },

  /**
   Allows you to retrieve the info of payment retry.
   */
  info: {
    mandatory: 'paymentRetryId',
    optional: '',
  },

  /**
   Allows you to retrieve the list of payment retry.
   */
  list: {
    mandatory: '',
    optional: 'filters,page,pageSize',
  },

  /**
   Allows you to delete the payment retry.
   */
  del: {//change delete for del.
    mandatory: 'paymentRetryId',
    optional: '',
  },

  /**
   Allows you to create the full payment retry.
   */
  createFull: {
    mandatory: 'paymentRetry',
    optional: '',
  },

  /**
   Allows you to info full the payment retry.
   */
  infoFull: {
    mandatory: 'paymentRetryId',
    optional: '',
  },

};

// creating prototypes using curry func
for (var key in protos) {
  BigHippo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = BigHippo;
