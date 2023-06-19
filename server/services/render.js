const axios=require('axios');

exports.homeRoutes=(req,res)=>{

    axios.get('http://localhost:3000/api/items')
        .then(function(response){
            console.log(response.data)
            res.render('index', { items : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.add_item=(req,res)=>{
    res.render('add_item');
}
exports.update_item=(req,res)=>{
    axios.get('http://localhost:3000/api/items', { params : { id : req.query.id }})
        .then(function(inventorydata){
            res.render("update_item", { entry: inventorydata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
