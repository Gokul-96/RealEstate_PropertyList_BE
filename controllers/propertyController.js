const Property = require('../models/Property');

//get all property

exports.getAllProperty = async (req, res)=>{
    try{
        const properties =  await Property.find();
        res.json(properties)
    }catch(error){
        res.status(500).json({message: 'server error'})
    }
}

// get single property

exports.getSingleProperty = async(req,res)=>{
    try{
 const property = await Property.findById(req.params.id);
 if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }
 res.json(property)
    }catch(error){
        res.status(500).json({ message: 'Server error' });

    }
}
