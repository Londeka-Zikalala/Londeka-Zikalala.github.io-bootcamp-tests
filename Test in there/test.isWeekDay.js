describe('isWeekDay', function(){
    it('should return weekdays',
    function(){
       
            assert.equal(isWeekDay('Monday'), true);
            assert.equal(isWeekDay('Saturday'), false, "This is a Weekend");
          
            
    }
    )
    
}
    )