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
  this.prefix = 'bighippo_product.';
}
util.inherits(BigHippo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
   Allows you to retrieve the list of Simple Products.
   */
  listSimpleProducts: {
      mandatory: 'productId',
      optional: 'arguments,includeMedia',// arguments = [{filters:[0,1,2,30,4]}, {page:5}]
    },// inludeMedia = true

  /**
   Allows you to retrieve the list of Grouped Products.
   */
  listGroupedProducts: {
    mandatory: '',
    optional: 'argumentsGroupedProducts,argumentsSimpleProducts,includeMedia'
  },

  /**
   Allows you to retrieve the list of Images.
   */
  listImages: {
    mandatory: 'productId',
    optional: '',
  },

  /**
   Allows you to retrieve the list of Grouped Products by category.
   */
  listGroupedProductsByCategories: {
    mandatory: '',
    optional: 'argumentsGroupedProducts,argumentsSimpleProducts,includeMedia,categoryIds',
  }

};

// creating prototypes using curry func
for (var key in protos) {
  BigHippo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = BigHippo;
