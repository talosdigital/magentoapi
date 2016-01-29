'use strict'
var Magento = require('../magento');

if (!process.env.MAGENTO_HOST) throw new Error('Host not present in environment variable MAGENTO_HOST');
if (!process.env.MAGENTO_USER) throw new Error('Username not present in environment variable MAGENTO_USER');
if (!process.env.MAGENTO_PASS) throw new Error('Password not present in environment variable MAGENTO_PASS');

if (!process.argv[2]) throw new Error('paymentPlanId?? it not present.');
const magento = new Magento({
  host: process.env.MAGENTO_HOST,
  port: 80,
  path: '/api/xmlrpc/',
  login: process.env.MAGENTO_USER,
  pass: process.env.MAGENTO_PASS
});

function main(){
  login(function(err, data){
    orderInfoFull()
  })
}

main()

function login(cb) {
  magento.login(function(err, sessId) {
    if(err) return cb(err);
    cb(null, sessId);
  });
};

function parsePaymentPlan(response){
  var schedule = {destinationId : response.destination,
    schedulePeriods : [],
    meta : {}
  };

  response.schedules.forEach(function (ele, idx, arr){
    var schedulePeriod = {};
    schedulePeriod.entityId = ele.entity_id;
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

function orderInfoFull(){
    var param = {paymentPlanId: process.argv[2]};
    console.log('param', param)
    magento.bighippoPaymentplan.infoFull(param, function(err,data){
      console.log('Schedule', parsePaymentPlan(data))
    });
}