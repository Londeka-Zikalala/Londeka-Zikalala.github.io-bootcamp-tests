describe('isWeekDay', function(){
    it('should return weekdays',
    function(){
        var dayOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
       assert.typeOf(dayOfTheWeek, 'array');
       assert.deepEqual('Monday'.startsWith('M'), true);
        assert.deepEqual('Saturday'.startsWith('M'), false)
       assert.deepEqual(isWeekDay('Monday'), true);
       assert.deepEqual(isWeekDay('Saturday'), false, "This is a Weekend");

      
    }
    )
}
    )