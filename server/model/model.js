

const mongoose=require('mongoose')

var schema = new mongoose.Schema({
    service : String,
    status : String,
    country : String,
    dc : String,
    project : String,
    sitetype : String,
    environment : String,
    cluster : String,
    name : {
        type : String,
        required: true,
        unique: true
    },
    hostname : String,
    os_ip : {
        type : String,
        required: true,
        unique: true
    },
    os_sm : String,
    os_gw : String,
    vlan_name : String,
    vlan_id :String,
    jump_server :String,
    Vcpu : String,
    ram : String,
    hdd : String,
    os_type : String,
    os_version : String,
    servercategory :String,
    application : String,
    application_team : String,
    vm_backup: String,
    vm_build_date: String,
    comm_ticket: String,
    vm_decommised_date: String,
    decommised_ticket: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;