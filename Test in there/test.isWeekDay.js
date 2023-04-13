describe('isWeekday', function () {
    it('should return true for weekdays and other words that do not start with "S" ',
        function () {

            assert.equal(isWeekday('Monday'), true);
            assert.equal(isWeekday('March'), true, 'This word does not start with S');
            assert.equal(isWeekday('Saturday'), false, "This is a Weekend");
})

it(
    'should be case sensitive and return false for empty strings',
    function () {
        assert.equal(isWeekday('march'), false);
        assert.equal(isWeekday('tuesDay'), false);
        assert.equal(isWeekday(''), false);
    }
)
    
}
    )