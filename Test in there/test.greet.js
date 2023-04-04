describe('the greet function' , function(){
    it('should greet neighbour with "Hello, neighbourName"' , function(){
        assert.equal("Hello, Janine", greet('Janine'));
        assert.equal("Hello, janine", greet('janine'));
        assert.equal("Hello, ", greet(''))


    });

});