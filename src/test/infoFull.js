'use strict'

var assert = require('chai').assert;
var Magento = require('../magento');
var wagner = require('wagner-core');

if (!process.env.MAGENTO_HOST) throw new Error('Host not present in environment variable MAGENTO_HOST');
if (!process.env.MAGENTO_USER) throw new Error('Username not present in environment variable MAGENTO_USER');
if (!process.env.MAGENTO_PASS) throw new Error('Password not present in environment variable MAGENTO_PASS');

var magento = new Magento({
  host: process.env.MAGENTO_HOST,
  port: 80,
  path: '/api/xmlrpc/',
  login: process.env.MAGENTO_USER,
  pass: process.env.MAGENTO_PASS
});

var safe = wagner.safe();
var resulst = {};



before(function(done) {
  this.timeout(3000);
  magento.core.info(function(err, data) {
    if(err) {
      magento.login(function(err, sessId) {
        if(err) return callback(err);
        done();
      });
    }
    else {
      done();
    }
  });
});

function parsePaymentPlan(response){
  var schedule = {destinationId : response.destination,
    schedulePeriods : [],
    meta : {}
  };

  response.schedules.forEach(function (ele, idx, arr){
    var schedulePeriod = {};
    schedulePeriod.entityId = ele.entityId;
    ele.informations.forEach(function(eleInfo, idxInfo, arrInfo){
      schedulePeriod[eleInfo.name] = eleInfo.value
    });
    schedule.schedulePeriods.push(schedulePeriod);
  });

  response.metadatas.forEach(function (ele, idx, arr){
    schedule.meta[ele.name] = ele.value;
  });

  return schedule;
}

describe('new api products', function () {
  this.timeout(100000);
  it('info full payment plans', function(done){
    var param = {paymentPlanId:'580'};
    console.log('param', param)
    magento.bighippoPaymentplan.infoFull(param, function(err,data){

      //assert.isNull(err)
      //assert.isObject(data)
      console.log('err', err)
      console.log('data', parsePaymentPlan(data))
      done();
    });
  });
});