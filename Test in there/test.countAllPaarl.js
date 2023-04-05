describe('countAllPaarl', function(){
    
    it('should return the number of Paarl registration numbers',
    function(){

        assert.equal(countAllPaarl('CJ 123 208, CY 123 208'), 1);
        assert.equal(countAllPaarl('CJ 123 208, CJ 206 586WC'), 2);
        assert.equal(countAllPaarl(''), 0);
       

    })


})