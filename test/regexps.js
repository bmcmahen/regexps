var assert = require('assert');
var re = require('regexps');

describe('regexps', function(){

  describe('username', function(){
    it('should not permit crazy characters', function(){
      assert(!re.username.test('$superman'));
      assert(!re.username.test('hello world'));
      assert(re.username.test('Sim0nSa_ys'));
    });
  });

  describe('numeric', function(){
    it('should only allow numbers', function(){
      assert(!re.numeric.test('45d'));
      assert(re.numeric.test('88484849494'));
    });
  });

  describe('alpha', function(){
    it('should only allow letters', function(){
      assert(!re.alpha.test('3ff'));
      assert(re.alpha.test('bacon'));
    });
  });

  describe('password', function(){
    it('should not allow spaces or other crazy', function(){
      assert(!re.password.test(' hi world '));
      assert(!re.password.test('••••hidfasfdsa'));
    });

    it('should accept a decent password', function(){
      assert(re.password.test('thisis_aPassw3rd'));
    });
  });

  describe('credit card', function(){
    it('should reject not creditcard numbers', function(){
      assert(!re.creditcard.test('343243'));
      assert(!re.creditcard.test('asdfadsfdsf8909'));
    });
    it('should accept credit card numbers', function(){
      assert(re.creditcard.test('378282246310005'));
    });
  });


  describe('email', function(){
    it('should reject non valid emails', function(){
      assert(!re.email.test('joe@apple'));
      assert(!re.email.test('@something.com'));
      assert(!re.email.test('hi@y_u.com'));
    });

    it('should work with a valid email', function(){
      assert(re.email.test('ben.mcmahen@gmail.com'));
    });
  });

  describe('url', function(){
    it('should determine if something is a proper url', function(){
      assert(re.url.test('http://www.hello.com'));
      assert(!re.url.test('bacon.istasty'));
    })
  });

  describe('date', function(){
    it('should reject years out of our range', function(){
      assert(!re.date.test('10-08-2025'));
      assert(!re.date.test('10-07'));
      assert(re.date.test('10-07-1984'));
    });
  });

});