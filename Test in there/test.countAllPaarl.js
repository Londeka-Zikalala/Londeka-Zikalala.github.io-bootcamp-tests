describe('countAllPaarl', function(){

    var registrationN = '';
    var registrations = registrationN.split(', ');
    
    for(var i= 0; i<registrations.length;i++){it('should return the number of Paarl registration numbers',
    function(){ 
       let count = 0; 
       
    if(assert.equal('CJ 123 208'.startsWith('CJ'), true)){
        count++
    }
   assert.equal(countAllPaarl('CJ 123 208, CY 123 208'), 1)
    })
}

})