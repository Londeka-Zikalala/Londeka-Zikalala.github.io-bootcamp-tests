describe('countAllFromTown', function(){
    it('should return the number of registrations from any town',
    function(){

        var Paarl = countAllFromTown('CJ 123 546 , CY 345 532M , CJ 234 109', 'CJ');
        assert.equal(Paarl, 2);
        assert.equal(paarl, 'undefined');

        var Bellville = countAllFromTown('', 'CY');
        assert.equal(Bellville, 0);
    }
    
    
    )





})