describe('findItemsOver', function(){

    it('should return a list of products that have quantity higher than the threshold.', 
    function(){
        var anyObjects = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var anyObjectsOver15= [
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        



            assert.deepEqual(findItemsOver(anyObjects, 15),anyObjectsOver15 );
            assert.deepEqual(findItemsOver(anyObjects, 2), anyObjects);
            assert.deepEqual(findItemsOver(anyObjects, 0), anyObjects) ;

    })

    it('should return an empty array if there are no items higher than the threshold',
    function(){
        var anyObjects = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        assert.deepEqual(findItemsOver(anyObjects, 40),[] , 'No items over 40');
    })
})
