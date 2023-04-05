describe('countRegNumber', function(){
    it('should return the length of an array',
    function(){


        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
        assert.equal(countRegNumber(''),1);
    }

    )

}
)