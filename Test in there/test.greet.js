describe('greet' , function(){
    it('should greet neighbour with "Hello, neighbourName"' , function(){
            var neighbourName = ''
        assert.typeOf(neighbourName,'string')
        assert.equal("Hello, Janine", greet('Janine'));
        assert.equal("Hello, janine", greet('janine'));
        assert.equal("Hello, ", greet(''));


    });

});