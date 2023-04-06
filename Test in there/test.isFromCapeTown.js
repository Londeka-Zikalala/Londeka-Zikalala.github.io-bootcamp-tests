describe('isFromCapeTown', function(){
    it('should return true for registrations that start with "CA"',
    function(){
        assert.equal(isFromCapeTown('CA 123 908'), true)
        assert.equal(isFromCapeTown('CA'), true)
    })
    it('should return false for empty strings and registrations that do not start with CA ',
    
    function(){
        assert.equal(isFromCapeTown('CB 123 908'), false);
        assert.equal(isFromCapeTown(''),false);
        assert.equal(isFromCapeTown('ca 123 908'), false)
    }
    )
})