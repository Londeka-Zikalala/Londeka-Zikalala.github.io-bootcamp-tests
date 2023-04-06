describe('countRegNumber', function(){
    it('should return the length of an array that is the number of registration numbers',
    function(){

        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
        assert.equal(countRegNumber(''),1);
    }

    )

    it('should not be case sensitive and return a number value for any string type',
    function(){
        assert.equal(countRegNumber('ca 182736,Cy 523519,cj 812328'), 3)
        assert.equal(countRegNumber('182736'), 1)
        

    }
    )

}
)