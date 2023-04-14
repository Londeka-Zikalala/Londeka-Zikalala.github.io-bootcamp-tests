describe('greet' , function(){
    it('should greet neighbour with "Hello, Janine"' , 
    function(){
        assert.equal("Hello, Janine", greet('Janine'));
    })
    it('should greet neighbour with "Hello, thabo"' , 
    function(){
        assert.equal("Hello, thabo", greet('thabo'));
    })
    
    it(
        'should return a "Hello, " for empty strings',
        function(){
            assert.equal(greet(''), 'Hello, ');
          
        }
    )

});