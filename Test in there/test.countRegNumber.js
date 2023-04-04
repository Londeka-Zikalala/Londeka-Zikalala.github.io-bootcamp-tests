describe('countRegNumber', function(){
    it('should return the length of an array',
    function(){
    var registrations = '' ;
    var regNumber = registrations.split(',');

        assert.typeOf(regNumber, 'array', 'registrations is a string');
        assert.lengthOf(regNumber, regNumber.length);
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
        assert.equal(countRegNumber('CA 182736 ,CY 523519 CJ 812328'), 2)
    }

    )

}
)