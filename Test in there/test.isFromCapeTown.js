describe("isFromCapeTown", function(){
    it("should return registration numbers that start with CA",
    function(){ 
        assert.equal("CA 123 908J".startsWith("CA"), true);
        assert.equal("CJ 123 908J".startsWith("CA"), false);
    }
    )
}


)