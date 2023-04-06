describe('transportFee', function(){
    it('should return the transport fare for working shifts',
    function(){
       assert.equal(transportFee('morning'), 'R20');
       assert.equal(transportFee('afternoon'),'R10');
       assert.equal(transportFee('night'), 'free');
    })

    it(
        'should be case sensitive and return "free" for empty strings and all other string values',
        function(){
            assert.equal(transportFee('Morning'), 'free', "correct value is 'morning'");
            assert.equal(transportFee(''), 'free', "empty string");
            assert.equal(transportFee('afterNoon'), 'free', 'correct value is "afternoon"');
        }
    )
})