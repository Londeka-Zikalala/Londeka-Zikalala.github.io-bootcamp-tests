describe('findItemsOver20', function(){

it('should return a list of products that have a quantity that is over 20', 
function(){

    var anyObjects1 = [
        {name : 'apples', qty :12 },
        {name : 'oranges', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var items1 = [
        {name : 'oranges', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    var anyObjects2 = [
        {name : 'tablets', qty : 10},
        {name : 'pills', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var items2 = [];
    
    assert.deepEqual(findItemsOver20(anyObjects1), items1);
    assert.deepEqual(findItemsOver20(anyObjects2), items2, 'No products Over 20');
    assert.deepEqual(findItemsOver20([]), [], 'No products listed')
}

)

}

)


