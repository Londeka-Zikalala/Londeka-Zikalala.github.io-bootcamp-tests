describe('totalPhoneBill', function(){
    it('should return the total cost of cell services',
    function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45' );
        assert.equal(totalPhoneBill('call'), 'R2.75');
        assert.equal(totalPhoneBill(''),'R0.00');

    })
})