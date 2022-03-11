const auth = require("../middlewares/auth");
const Pet = require("../models/Pet");
const User = require("../models/User");
const router = require("express").Router();
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

// @desc create pet
// @private route
// @ /api/pets/createPet

router.post("/createPet",auth, upload.single("image"), async (req, res) => {
  try {
    const { name, type, breed, age, weight, height, condition , image} =req.body

    const user = await User.findOne({ id: req.user._id });
    const result = await cloudinary.uploader.upload(req.file.path);
    const pet = await Pet.create({
      name,
      type,
      breed,
      age,
      weight,
      height,
      condition,
      owner: user._id,
      image: result.secure_url,
      cloudinary_id: result.public_id,
    });
    return res.status(200).json({
      status: true,
      msg: "created successfully",
      data: pet,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});


//@ get pet :
// @ /api/pets/pet/:id
router.get("/pet/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const pet = await Pet.findById(id);
    return res.status(200).json({
      status: true,
      // msg: "created successfully",
      data: pet,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});



//@ get all pets "list": 
// @ /api/pets/petslist
router.get("/petslist", async (req, res) => {
  try {
    const petsList = await Pet.find({});
    res.status(200).json({ status: true, msg: "contacts", data: petsList });
  } catch (err) {
    res.status(500).status({ status: false, msg: err });
  }
});



// @update pets:
// @ /api/pets/updatePet/:id
router.put("/updatePet/:id", auth,upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findById(id);
    if (!pet) {
      res.status(404).json({ status: true, msg: "Pet not found !!" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    const updatedPet = await Pet.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, msg: "Updated successfully", data: updatedPet });
  } catch (err) {
    res.status(500).status({ status: false, msg: err });
  }
});

// @pet delete pet:
// @ /api/pets/deletePet/:id
router.delete("/deletePet/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (!pet) {
      res.status(404).json({ status: true, msg: "Pet not found !!" });
    }


    // await cloudinary.uploader.destroy(pet.cloudinary_id);


    const deletedPet = await Pet.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ status: true, msg: "Deleted Successfully", data: deletedPet });
  } catch (err) {
    res.status(500).status({ status: false, msg: err });
  }
});



module.exports = router
