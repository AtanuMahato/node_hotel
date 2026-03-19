const express = require("express");
const router = express.Router();

const menu = require("./../models/menu");

router.get("/", async (req, res) => {
  try {
    const data = await menu.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menu(data);
    const response = await newMenu.save();
    console.log("Data fatched", response);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const type = req.params.tasteType;
    if (type == "sweet" || type == "spicy" || type == "sour") {
      const data = await menu.find({ taste: type });
      console.log("Data fetch successfull");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Invalid input type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
    const data = req.body;
    const response =await menu.findByIdAndUpdate(menuId,data);
    if(!response){
        return res.status(404).json('Data not found');
    }
    console.log('Data updated');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json('Internal server Error');
    }
    
});


router.delete('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
        const response = menu.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json('Data not found');
        }
        console.log('data deleted');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});


module.exports = router;
