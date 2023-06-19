 var Userdb=require('../model/model');

 exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    const items =new Userdb({
        service : req.body.service,
        status : req.body.status,
        country : req.body.country,
        dc : req.body.dc,
        project : req.body.project,
        sitetype : req.body.sitetype,
        environment : req.body.environment,
        cluster : req.body.cluster,
        name : req.body.name,
        hostname : req.body.hostname,
        os_ip : req.body.os_ip,
        os_sm : req.body.os_sm,
        os_gw : req.body.os_gw,
        vlan_name : req.body.vlan_name,
        vlan_id : req.body.vlan_id,
        jump_server : req.body.jump_server,
        Vcpu : req.body.Vcpu,
        ram : req.body.ram,
        hdd : req.body.hdd,
        os_type : req.body.os_type,
        os_version : req.body.os_version,
        servercategory:req.body.servercategory,
        application : req.body.application,
        application_team : req.body.application_team,
        vm_backup : req.body.vm_backup,
        vm_build_date : req.body.vm_build_date,
        comm_ticket : req.body.comm_ticket,
        vm_decommised_date : req.body.vm_decommised_date,
        decommised_ticket : req.body.decommised_ticket
    })

    items
    .save(items)
    .then(data =>{
        //res.send(data)
        res.redirect('/additem');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while creating the create entry"
        });
    });


}
 
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
 exports.update=(req,res)=>{
    if(!req.body){
        return res 
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update entry with ${id}. Maybe entry not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update item information"})
        })

 }

 exports.delete=(req,res)=>{
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "Entry was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete entry with id=" + id
        });
    });
}