describe('isWeekday', function(){
    it('should return true for weekdays and other words that do not start with "S" and false for weekends',
    function(){
       
            assert.equal(isWeekday('Monday'), true);
            assert.equal(isWeekday('Saturday'), false, "This is a Weekend");
            assert.equal(isWeekday('March'), true, 'This word does not start with S');

    }
    )
    it(
        'should not be case sensitive and return "true" for empty strings',
        function(){
            assert.equal(isWeekday('march'), true);
            assert.equal(isWeekday('tuesDay'), true)
            assert.equal(isWeekday(''), true);
        }
    )
    
}
    )