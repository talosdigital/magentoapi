'use strict'

var Magento = require('../magento');

if (!process.env.MAGENTO_HOST) throw new Error('Host not present in environment variable MAGENTO_HOST');
if (!process.env.MAGENTO_USER) throw new Error('Username not present in environment variable MAGENTO_USER');
if (!process.env.MAGENTO_PASS) throw new Error('Password not present in environment variable MAGENTO_PASS');
if (!process.argv[2]) throw new Error('scheduleId it not present.');
if (!process.argv[3]) throw new Error('name it not present.');
if (!process.argv[4]) throw new Error('value it not present.');
const magento = new Magento({
  host: process.env.MAGENTO_HOST,
  port: 80,
  path: '/api/xmlrpc/',
  login: process.env.MAGENTO_USER,
  pass: process.env.MAGENTO_PASS
});

function main(){
  login(function(err, data){
    updateOrCreate()
  })
}

main()

function login(cb) {
  magento.login(function(err, sessId) {
    if(err) return cb(err);
    cb(null, sessId);
  });
};

function updateOrCreate (){
  let param = {
  scheduleId:process.argv[2],
  informationData:
    [{
      name : process.argv[3],
      value : process.argv[4],
    }]
  }
  magento.bighippoPaymentplanScheduleInformation.update(param, function(err,data){
    console.log('data', data)
  });
}



