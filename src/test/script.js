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
        if(err) return done(err);
        done();
      });
    }
    else {
      done();
    }
  });
});


describe('new api products', function () {
  this.timeout(100000);
  describe('script' , function(){
    this.timeout(100000);
    it('posible new cronjob', function(done){
      this.timeout(100000);
      let ppScheduleEntityId = []
      magento.bighippoPaymentplanScheduleInformation.list({}, function(err,paymentplanScheduleInformation){
        magento.bighippoPaymentplanSchedule.list({}, function(err,paymentplanSchedule){
          magento.bighippoPaymentplan.list({}, function(err,paymentplan){
            let today = new Date()
            let scheduleInformation = paymentplanScheduleInformation.filter(function(objFilter){
              return objFilter.name === 'nextPaymentDue' && today > new Date(objFilter.value)
            }).map(function(objMap){
              return objMap.schedule_id
            })
            console.log('scheduleInformation', scheduleInformation)
            let schedule = paymentplanSchedule.filter(function(objFilterTwo){
              return scheduleInformation.some(val => val === objFilterTwo.entity_id)
            }).map(function(objMapTwo){
              return objMapTwo.paymentplan_id
            }).filter(function(element, index, array){
              return array.lastIndexOf(element) === index;
            })
            console.log('schedule', schedule)
            let Orders = paymentplan.filter(function(objFilterThree){
              return schedule.some(val => val === objFilterThree.entity_id)
            }).map(val => val.name)
            console.log('Orders', Orders)
            let count = 0
            scheduleInformation.forEach(function(value){
              let param = {
                scheduleId:value,
                informationData:
                  [{
                    name : 'isCharged',
                    value : true,
                  }]
                }
                magento.bighippoPaymentplanScheduleInformation.update(param, function(err,data){
                  count = count + 1
                  if(count === scheduleInformation.length){
                    done();
                  }
                });
            });
          });
        });
      });
    });
  });  
});




