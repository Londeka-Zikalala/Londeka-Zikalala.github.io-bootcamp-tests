describe('isFromCapeTown', function(){
    it('should return true for registrations that start with "CA"',
    function(){
        assert.equal(isFromCapeTown('CA 123 908'), true)
        assert.equal(isFromCapeTown('ca 123 908'), true)