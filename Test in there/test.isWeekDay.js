describe('isWeekDay', function(){
    it('should return true for weekdays and other words that do not start with "S" and false for weekends',
    function(){
       
            assert.equal(isWeekDay('Monday'), true);
            assert.equal(isWeekDay('Saturday'), false, "This is a Weekend");
            assert.equal(isWeekDay('March'), true, 'This word does not start with S');

    }
    )
    it(
        'should not be case sensitive and return "true" for empty strings',
        function(){
            assert.equal(isWeekDay('march'), true);
            assert.equal(isWeekDay(''), true);
        }
    )
    
}
    )