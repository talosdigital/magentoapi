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
  this.prefix = 'bighippo_paymentplan_schedule.';
}
util.inherits(BigHippo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
   Allows you to create the payment retry.
   */
  create: {
      mandatory: 'scheduleid,informationData',
      optional: '',
    },

  /**
   Allows you to update the payment retry.
   */
  update: {
    mandatory: 'paymentPlanId,informationData',
    optional: '',
  },

  /**
   Allows you to retrieve the info of payment retry.
   */
  info: {
    mandatory: 'informationId',
    optional: '',
  },

  /**
   Allows you to retrieve the list of payment retry.
   */
  list: {
    mandatory: '',
    optional: 'scheduleId,page,pageSize',
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
  deleteTwo: {//change delete for del.
    mandatory: 'informationId',
    optional: '',
  },

};

// creating prototypes using curry func
for (var key in protos) {
  BigHippo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = BigHippo;
