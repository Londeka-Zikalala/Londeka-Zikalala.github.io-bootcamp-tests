describe('isWeekDay', function(){
    it('should return weekdays',
    function(){
       
            assert.deepEqual(isWeekDay('Monday'), true);
            assert.deepEqual(isWeekDay('Saturday'), false, "This is a Weekend");
            assert.deepEqual(isWeekDay('March'), false, 'This is a month')
            
    }
    )
    
}
    )