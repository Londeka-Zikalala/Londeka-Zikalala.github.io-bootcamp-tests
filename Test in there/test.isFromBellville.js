describe("isFromBellville", function(){
    it("should return registration numbers that start with CY",
    function(){ 
        assert.equal("CY 123".startsWith("CY"), true);
        assert.equal("CJ 123".startsWith("CY"), false);
    }
    )
}


)