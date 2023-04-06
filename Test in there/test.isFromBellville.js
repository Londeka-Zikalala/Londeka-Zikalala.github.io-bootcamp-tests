describe("isFromBellville", function(){
    it("should return 'true' registration numbers that start with CY",
    function(){ 
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
        assert.equal(isFromBellville('CY'), true, 'value still starts with CY');

    }
)
it(
    'should be case sensitve and return "false" for empty strings',
    function(){
        assert.equal(isFromBellville('cy 123'), false);
        assert.equal(isFromBellville('cY 123'), false);
        assert.equal(isFromBellville(''), false , 'value is Null');
    }
)
    }
    )


