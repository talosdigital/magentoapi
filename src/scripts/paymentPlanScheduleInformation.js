'use strict'

var Magento = require('../magento');

if (!process.env.MAGENTO_HOST) throw new Error('Host not present in environment variable MAGENTO_HOST');
if (!process.env.MAGENTO_USER) throw new Error('Username not present in environment variable MAGENTO_USER');
if (!process.env.MAGENTO_PASS) throw new Error('Password not present in environment variable MAGENTO_PASS');

const magento = new Magento({
  host: process.env.MAGENTO_HOST,
  port: 80,
  path: '/api/xmlrpc/',
  login: process.env.MAGENTO_USER,
  pass: process.env.MAGENTO_PASS
});

function main(){
  login(function(err, data){
    paymentPlanScheduleInformation(cbPaymentPlanScheduleInformation)
  })
}

main()

function login(cb) {
  magento.login(function(err, sessId) {
    if(err) return cb(err);
    cb(null, sessId);
  });
};

function paymentPlanScheduleInformation (cb){
  magento.bighippoPaymentplanScheduleInformation.list({}, function(err,paymentplan){
    return cb(null, paymentplan)
  })
}

function cbPaymentPlanScheduleInformation (err, data){
  let paymentPlanScheduleInformation = data.filter(function(objpaymentPlanScheduleInformation){
    return process.argv[2] ? objpaymentPlanScheduleInformation.schedule_id === process.argv[2] : objpaymentPlanScheduleInformation
  })
  console.log('data', paymentPlanScheduleInformation)
  return paymentPlanScheduleInformation
}