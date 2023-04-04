describe('countRegNumber', function(){
    it('should return the length of an array',
    function(){
    var registrations = 'CA 182736,CY 523519,CJ 812328' ;
    var regNumber = registrations.split(',');

        assert.typeOf(registrations, 'string', 'registrations is a string');
        assert.lengthOf(regNumber, regNumber.length)
        assert.equal(countRegNumber(registrations), 3)
        assert.equal(countRegNumber(''), 0, 'Null')
    
    }

    )




})