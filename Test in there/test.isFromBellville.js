describe("isFromBellville", function(){
    it("should return registration numbers that start with CY",
    function(){ 
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
        assert.equal(isFromBellville(''), false, "value is Null");

    }
)
    }
    )


