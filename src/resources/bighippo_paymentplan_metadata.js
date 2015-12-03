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
  this.prefix = 'bighippo_paymentplan_metadata.';
}
util.inherits(BigHippo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
   Allows you to create the payment retry.
   */
  create: {
      mandatory: 'paymentPlanId,metadataData',
      optional: '',
    },

  /**
   Allows you to update the payment retry.
   */
  update: {
    mandatory: 'paymentPlanId,metadataData',
    optional: '',
  },

  /**
   Allows you to retrieve the info of payment retry.
   */
  info: {
    mandatory: 'metadataId',
    optional: '',
  },

  /**
   Allows you to retrieve the list of payment retry.
   */
  list: {
    mandatory: 'paymentPlanId',
    optional: 'page,pageSize',
  },

  /**
   Allows you to delete the payment retry.
   */
  deleteOne: {//change delete for del.
    mandatory: 'data',
    optional: '',
  },

  /**
   Allows you to delete the payment retry.
   */
  delete: {//change delete for del.
    mandatory: 'metadataId',
    optional: '',
  },

};

// creating prototypes using curry func
for (var key in protos) {
  BigHippo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = BigHippo;
