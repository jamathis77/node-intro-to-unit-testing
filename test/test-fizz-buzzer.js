const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer')

describe('fizzBuzzer', function(){

  it('should return fizz if a number is divisible by 3, return buzz if divisible by 5 and fizz-buzz if divisible by 15', function(){

    const normalCases = [
      {num: 6, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 30, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(item){
      const answer = fizzBuzzer(item.num);
      expect(answer).to.equal(item.expected);
    })
  });

  it('should throw an error if non numbers are input', function(){
    const errorCases = [
      'A', '?', '$'
    ];
    errorCases.forEach(function(item){
      expect(function(){
        fizzBuzzer(item);
      }).to.throw(Error);
    })
  })

})
