

$("#additem").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#updateitem").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
        
    })


    var request = {
        "url" : `http://localhost:3000/api/items/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})



