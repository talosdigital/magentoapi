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


describe('new api products',function(){
this.timeout(100000);
  it('login' , function(done){
    wagner.invokeAsync(function(error, login){
      assert.isNull(error);
      done();
    });
  })


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




