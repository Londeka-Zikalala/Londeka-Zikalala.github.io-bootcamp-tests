describe('transportFee', function(){
    it('should return the transport fare for working shifts',
    function(){
       assert.equal(transportFee('morning'), 'R20');
       assert.equal(transportFee('afternoon'),'R10');
       assert.equal(transportFee('night'), 'free');
    })
})