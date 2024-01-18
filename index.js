const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");




// schema design 
//Create a person with this prototype:
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String], default: [] },
});
const Person = mongoose.model("Person", personSchema);



// database connection
mongoose
  .connect(process.env.DB)
  .then(() => console.log("mongoose  connected"))
  .catch((err) => console.error(err));





// allow express to use json format
app.use(express.json());





// Create and Save a Record of a Model:
app.post("/q_1", async (req, res) => {
  //req.body exemple  { "name": "Alice", "age": 30, "favoriteFoods": ["Sushi", "Salad"] }
  try {
    const person = new Person(req.body);

    await person.save();
    res.status(201).json({ message: "well done" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



//Create Many Records with model.create()
app.post("/q_2", async (req, res) => {
  try {
    // req.body exemple
    //   [
    //     { "name": "Alice", "age": 30, "favoriteFoods": ["Sushi", "Salad"] },
    //     { "name": "Bob", "age": 22, "favoriteFoods": ["Pasta", "Steak"] }
    //   ]
    const arrayOfPeople = req.body;
    const data = await Person.create(arrayOfPeople);
    res.status(201).json({ message: "well done q2", data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



//Use model.find() to Search Your Database
app.get("/q_3", async (req, res) => {
  //req.query exemple  /q_3?name=Existing name
  try {
    const found = await Person.find({ name: req.query.name });

    // await person.save();
    res.status(201).json({ message: "well done", found });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});




//Use model.findOne() to Return a Single Matching Document from Your Database
app.get("/q_4", async (req, res) => {
  //req.query exemple  /q_3?name=Existing name
  try {
    const found = await Person.findOne({ name: req.query.name });

    // await person.save();
    res.status(201).json({ message: "well done", found });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});




//  Use model.findById() to Search Your Database By _id
app.get("/q_5", async (req, res) => {
  //req.query.id exemple id=65a9433cc81da83d530bacc9
  try {
    const found = await Person.findById(req.query.id);

    // await person.save();
    res.status(201).json({ message: "well done", found });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


//Perform Classic Updates by Running Find, Edit, then Save
app.put("/q_6", async (req, res) => {
  //req.query.name  name=chaima  and req.body.newFood  {"newFood":"batata"}
  try {
    const person = await Person.findOne({ name: req.query.name });

    person.favoriteFoods.push(req.body.newFood);

    const data = await person.save({ new: true });

    res.status(201).json({ message: "well done", data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



//Perform New Updates on a Document Using model.findOneAndUpdate()
app.put("/q_7", async (req, res) => {
  //req.query.name  name=chaima  and req.body.age  {"age":30}
  try {
    const person = await Person.findOneAndUpdate(
      { name: req.query.name },
      {
        age: req.body.age,
      },
      { new: true }
    );

    res.status(201).json({ message: "well done", person });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



//Delete One Document Using model.findByIdAndRemove
app.delete("/q_8", async (req, res) => {
  //req.query.id=65a9433cc81da83d530bacc9
  try {
    const person = await Person.findByIdAndDelete(req.query.id);

    res.status(204).json({ message: "well done", person });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


//MongoDB and Mongoose - Delete Many Documents with model.remove()
app.delete("/q_9", async (req, res) => {
    //req.query.name=Mary
    try {
      const deleted = await Person.deleteMany({name:req.query.name});
  
      res.status(204).json({ message: "well done", deleted });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });

//Chain Search Query Helpers to Narrow Search Results
  app.get("/q_10", async (req, res) => {
    //req.query.fav=any existing food in the database 
    try {
        console.log(req.query)
      const data = await  Person
        .find({ favoriteFoods: req.query.fav }) // Find people who like burritos (assuming it's a direct match)
        .sort('name') // Sort by name
        .limit(2) // Limit the results to 2 documents
        .select('-age') // Hide their age
        .exec();
  
      res.status(200).json({ message: "well done", data });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });







app.listen(process.env.PORT, () => {
  console.log(`expreess listening on port : ${process.env.PORT}`);
});
