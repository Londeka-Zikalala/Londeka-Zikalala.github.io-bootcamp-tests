describe('yearsAgo', function(){
    it('should return the difference of current year and any previous year',
    function(){
    assert.equal(yearsAgo(1999), 24);
    assert.equal(yearsAgo(0), 2023);
    assert.equal(yearsAgo(2024), -1, 'This is a future year'); 
    }
    )
    it(
        'should return the same calculated results for Number strings',
        function(){
        assert.equal(yearsAgo('1999'),24);
        assert.equal(yearsAgo('2024'), -1, 'This is a future year'); 
    }
    )
}
)
