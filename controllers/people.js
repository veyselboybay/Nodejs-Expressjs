const { people } = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people});
}

const postPeople = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true,data:[...people, name,]})
}

const updatePeople = (req,res)=>{

    const id = req.params.id;
    const { name } = req.body;
    const person  = people.find((person) => person.id === Number(id));

    if(!person){
        return res.status(400).json({success:false,msg:`No person found with id: ${id}`});
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    //console.log(`id:${id}: name:${person.name}`)
    res.status(201).json({success:true,msg:newPerson})
}

const deletePeople = (req,res)=>{
    const id =req.params.id;
    const name = req.body.name;
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false,msg:"No person found!"});
    }

    const newPeople = people.filter((person)=> person.id !== Number(id));
    return res.status(200).json({success:true,msg:newPeople});
}

module.exports = { getPeople, postPeople, updatePeople, deletePeople }