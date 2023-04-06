describe('fromWhere', function(){
    it('should return registration numbers starts with CY for Bellville, CJ return Paarl, for CA return Cape Town otherwise, return Some other place!',
   function(){
    assert.equal(fromWhere('CJ 567489'), 'Paarl'); 
    assert.equal(fromWhere('CY 567489'), 'Bellville');
    assert.equal(fromWhere('CA 567489 '), 'Cape Town');
    assert.equal(fromWhere('CK 567489'), 'Some other place!');
    

})
it(
    'should be case sensitive and return "Some other place!" for empty strings and all other string values that do not match',
    function(){
        assert.equal(fromWhere(''), 'Some other place!');
        assert.equal(fromWhere('5555'), 'Some other place!');
        assert.equal(fromWhere('ca 567489'), 'Some other place!', 'Valid registration for Cape Town starts with "CA"');
    }

)
})

