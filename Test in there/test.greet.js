describe('greet' , function(){
    it('should greet neighbour with "Hello, neighbourName"' , 
    function(){
        assert.equal("Hello, Janine", greet('Janine'));
        assert.equal("Hello, Themba", greet('Themba'));
    })
    it(
        'should not be case sensitive and print the value of any value type',
        function(){
            assert.equal(greet('janiNe'), 'Hello, janiNe');
            assert.equal(greet(855), 'Hello, 855')
            assert.equal(greet('855'), 'Hello, 855')
        }
    )

});