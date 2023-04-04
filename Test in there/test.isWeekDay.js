describe('isWeekDay', function(){
    it('should return weekdays',
    function(){
        var dayOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
            assert.typeOf(dayOfTheWeek, 'array');
            assert.equal('Monday'.startsWith('M'), true);
            assert.equal('Saturday'.startsWith('M'), false)
            assert.equal(isWeekDay('Monday'), true);
            assert.equal(isWeekDay('Saturday'), false, "This is a Weekend");
            
    }
    )
    
}
    )