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


before(function() {
  //Task login
  wagner.task('login', function(callback) {
    setTimeout(function() {
      magento.core.info(function(err, data) {
        if(err) {
          magento.login(function(err, sessId) {
            if(err) return callback(err);
            return callback(null, sessId);
          });
        }
        else {
          return callback(null, true);
        }
      });
    }, 100);
  });
});

after(function() {
  // runs after all tests in this block
});

safe.on('error', function(error) {
  //assert.equal(error.toString(), 'Oops I messed up');
  console.log('Capture error:' , error.toString());
  done();
});


describe('new api products', function () {
  this.timeout(100000);
  it('login', function (done) {
    wagner.invokeAsync(function (error, login) {
      assert.isNull(error);
      done();
    });
  })

  //start payment plan flow
  describe('payment plan flow' , function(){
    //start payment plan test
    describe('Payment plan test' , function(){

      it('create payment plans', function(done){
        var param = {paymentPlanData:
        {name:'testName',
          destination:'destinationTest'}};

        magento.bighippoPaymentplan.create(param, function(err,data){
          resulst.paymentplanId=data;
          assert.isNull(err)
          assert.isString(data)
          done();
        });
      });

      it('update payment plans', function(done){
        var param = {paymentPlanId:resulst.paymentplanId,
          playmentPlanData: {name:'testName3',
            destination:'destinationTest3'}};

        magento.bighippoPaymentplan.update(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });

      it.skip('info payment plans', function(done){
        var param = {paymentPlanId:resulst.paymentplanId};
        magento.bighippoPaymentplan.info(param, function(err,data){
          assert.isNull(err)
          assert.isObject(data)
          assert.equal('testName3', data.name);
          done();
        });
      });

      it('list payment plans', function(done){
        magento.bighippoPaymentplan.list({}, function(err,data){
          assert.isNull(err)
          assert.isArray(data)
          done();
        });
      });

      it.skip('delete payment plans', function(done){
        var param = {paymentPlanId:resulst.paymentplanId};
        magento.bighippoPaymentplan.delete(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });


    });
    //end payment plan test

    //start Payment plan meta test
    describe('Payment plan meta test' , function(){

      it('create payment plans metadata', function(done){
        var param = {paymentPlanId : resulst.paymentplanId,
          metadataData:{
            name : 'testNAME1',
            value : 'testVALUE1',
          }
        };

        magento.bighippoPaymentplanMetadata.create(param, function(err,data){
          resulst.metadataId=data;
          assert.isNull(err)
          assert.isString(data)
          done();
        });
      });

      it('update payment plans metadata', function(done){
        var param = {paymentPlanId:resulst.paymentplanId,
          metadataData:[{
            name : 'testNAME1',
            value : 'testVALUE3'
          },{
            name : 'testNAME4',
            value : 'testVALUE4'
          }]};

        magento.bighippoPaymentplanMetadata.update(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });

      it('list payment plans meta', function(done){
        var param = {paymentPlanId : resulst.paymentplanId};

        magento.bighippoPaymentplanMetadata.list(param, function(err,data){
          assert.isNull(err)
          assert.isArray(data)
          done();
        });
      });

      it.skip('info payment plans metadata', function(done){
        var param = {metadataId:resulst.metadataId};
        magento.bighippoPaymentplanMetadata.info(param, function(err,data){
          console.log('err', err);
          console.log('data', data);
          assert.isNull(err)
          assert.isObject(data)
          assert.equal('testName3', data.name);
          done();
        });
      });

      it.skip('delete payment plans meta', function(done){
        var param = {metadataId:resulst.metadataId};
        magento.bighippoPaymentplanMetadata.delete(param, function(err,data){
          console.log('err', err);
          console.log('data', data);
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });
    });
    //end Payment plan meta test

    //start payment plan schedule test

    describe('Payment plan schedule test' , function(){

      it('create payment plans schedule', function(done){
        var param = {paymentPlanId : resulst.paymentplanId,
          scheduleData:{
            name : 'Schedule Description',
          }
        };

        magento.bighippoPaymentplanSchedule.create(param, function(err,data){
          resulst.scheduleId=data;
          assert.isNull(err)
          assert.isString(data)
          done();
        });
      });

      it('update payment plans schedule', function(done){
        var param = {scheduleId:resulst.scheduleId,
          scheduleData:{
            name : 'Schedule Description Mod'}
        }
        magento.bighippoPaymentplanSchedule.update(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });

      it('list payment plans schedule', function(done){
        var param = {scheduleId : resulst.scheduleId};
        magento.bighippoPaymentplanSchedule.list(param, function(err,data){
          assert.isNull(err)
          assert.isArray(data)
          done();
        });
      });

      it('info payment plans schedule', function(done){
        var param = {scheduleId:resulst.scheduleId};
        magento.bighippoPaymentplanSchedule.info(param, function(err,data){
          assert.isNull(err)
          assert.isObject(data)
          assert.equal('Schedule Description Mod', data.name);
          done();
        });
      });

      it.skip('delete payment plans schedule', function(done){
        var param = {paymentPlanId:resulst.paymentplanId, names : ['Schedule Description Mod']};
        magento.bighippoPaymentplanSchedule.delete(param, function(err,data){

          console.log('err', err);
          console.log('data', data);

          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });

    });

    //end payment plan schedule test

    //start payment plan schedule information test

    describe('Payment plan schedule information test' , function(){

      it('create payment plans schedule information', function(done){
        var param = {scheduleId:resulst.scheduleId,
          informationData:{
            name : 'testNameScheduleInformation',
            value : 'testValueScheduleInformation',
          }
        };

        magento.bighippoPaymentplanScheduleInformation.create(param, function(err,data){
          resulst.informationId=data;
          assert.isNull(err)
          assert.isString(data)
          done();
        });
      });

      it('update payment plans schedule information', function(done){
        var param = {scheduleId:resulst.scheduleId,
          informationData:[{
            name : 'testNameScheduleInformation',
            value : 'testValueScheduleInformationUpd',
          },{
            name : 'testNameScheduleInformationUpd2',
            value : 'testValueScheduleInformationUpd2',
          }]};

        magento.bighippoPaymentplanScheduleInformation.update(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });

      it('list payment plans schedule information', function(done){
        var param = {scheduleId : resulst.scheduleId};

        magento.bighippoPaymentplanScheduleInformation.list(param, function(err,data){
          assert.isNull(err)
          assert.isArray(data)
          assert.equal('testValueScheduleInformationUpd' , data[0].value)
          done();
        });
      });

      it('info payment plans schedule information', function(done){
        var param = {informationId:resulst.informationId};
        magento.bighippoPaymentplanScheduleInformation.info(param, function(err,data){
          assert.isNull(err)
          assert.isObject(data)
          assert.equal('testNameScheduleInformation', data.name);
          assert.equal('testValueScheduleInformationUpd', data.value);
          done();
        });
      });

      it('delete payment plans schedule information', function(done){
        var param = {informationId:resulst.informationId};
        magento.bighippoPaymentplanScheduleInformation.delete(param, function(err,data){
          assert.isNull(err)
          assert.isTrue(data)
          done();
        });
      });
    });

    //end payment plan schedule information test

  });
  //end payment plan flow

  //start coupons test
  describe('Coupons test' , function(){

    it('List coupon', function(done){
      magento.bighippoCoupon.list( function(err,data){
        resulst.ruleId = data[0].rule_id;
        assert.isArray(data);
        done();
      });
    });

    it.skip('Info coupon', function(done){
      var param = {salesRuleId:resulst.ruleId};
      magento.bighippoCoupon.info(function(param, err,data){
        assert.isObject(data);
        done();
      });
    });


  });
  //end coupons test

  //start payment retry test

  describe('payment plan retry ' , function(){

    it('create payment plan retry' , function(done){
      var param = {
        paymentRetryData : {
          name : 'name retry',
          increment_id : '100000261'
        }
      }
      magento.bighippoPaymentRetry.create(param, function(err,data){
        resulst.paymentretryId = data;
        assert.isString(data);
        done();
      });
    });

    it('update payment plan retry' , function(done){
      var param = {
        paymentRetryId : resulst.paymentretryId,
        paymentRetryData : {
          name : 'name retry upd',
          increment_id : '100000261'
        }
      }
      magento.bighippoPaymentRetry.update(param, function(err,data){
        assert.isTrue(data);
        done();
      });
    });

    it('info payment plan retry' , function(done){
      var param = {
        paymentRetryId : resulst.paymentretryId
      }
      magento.bighippoPaymentRetry.info(param, function(err,data){
        assert.isObject(data);
        assert.equal('name retry upd' , data.name);
        done();
      });
    });

    it.skip('list payment plan retry' , function(done){
      var param = {
        filters  : {
          entity_id : resulst.paymentretryId
        }
      }
      magento.bighippoPaymentRetry.list(param, function(err,data){
        console.log('err' , err);
        console.log('data' , data);
        assert.isArray(data);
        assert.isNumeric(data.length);
        done();
      });
    });

  });

  //end payment retry test













  //start product test
  describe('Products test' , function(){
    it('list Simple Products error missing value for productId', function (done) {
      magento.bighippoProducts.listSimpleProducts({}, function(err,data){
        assert.equal('missing value for "productId"', err.message)
        assert.equal('listSimpleProducts', err.method)
        done();
      });
    });

    it('list Simple Products', function (done) {
      magento.bighippoProducts.listSimpleProducts({productId:105, arguments: [], includeMedia :true}, function(err,data){
        if(err) return done(err);
        assert.isNotNull(data);
        done();
      });
    });

    it('list grouped Products', function (done) {
      magento.bighippoProducts.listGroupedProducts({argumentsGroupedProducts:{filters : {entity_id:105}}, argumentsSimpleProducts:[], includeMedia:true}, function(err,data){
        if(err) return done(err);
        assert.isNotNull(data);
        done();
      });
    });
  });
  //end product test







});




