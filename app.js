    //require the Mongoose package (after running >npm i mongoose in Hyper to install it)
    const mongoose = require('mongoose');
     
    //connect to MongoDB by specifying port to access MongoDB server
    main().catch(err => console.log(err));
     
    async function main() {
      await mongoose.connect('mongodb://localhost:27017/FruitsDB');
      }
     
    //create a SCHEMA that sets out the fields each document will have and their datatypes
    const fruitSchema = new mongoose.Schema ({
    	name: {
        type :String,
        required: [true, "Add name"],
      },
    	rating: {
        type: Number,
        min: 1,
        max: 10
      },
    	review: String
    })
     
    // //create a MODEL
    const Fruit = new mongoose.model ("Fruit", fruitSchema);
     
    //create a DOCUMENT
    const fruit = new Fruit ({
    	rating: 7,
    	review: "Incredible!"
    })
     
    // //save the document
    // fruit.save()
     
    //**CHALLENGE: Set up a people database with one document and two fields**//
    //create a SCHEMA
    const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
      favoriteFruit: fruitSchema
    });
      const pineapple = new Fruit({
        name: "Pineapple",
        score: 8,
        review: "Sick"
      })
      // pineapple.save();
    //create a MODEL
    const Person = mongoose.model('Person', personSchema);


     
    //create a DOCUMENT
    const person = new Person({
      name: "Amy",
      age: 12,
      favoriteFruit: pineapple
    });
     
    //Save it
    // person.save();

    const kiwi = new Fruit ({
    	name: "Kiwi",
    	rating: 7,
    	review: "Nice!"
    });
    const banana = new Fruit ({
    	name: "Banana",
    	rating: 4,
    	review: "Wow!"
    });
    const orange = new Fruit ({
    	name: "Orange",
    	rating: 6,
    	review: "Amazing!"
    });

// Fruit.insertMany([kiwi, banana, orange], (err) => {
//   if (err) {console.log(err)}
//   else{console.log("successs")}
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach((fruit) => console.log(fruit.name))
  }
});

Fruit.updateOne({_id:"633ce04fdee7fdf79c6920d0"}, {name: "Peach"}, function(err){
  if (err){
    console.log(err)
  }else{
    console.log("Updated successfully")
  }
});

Fruit.deleteOne({_id: "633ce04fdee7fdf79c6920d0"}, function (err){
  if (err){
    console.log(err)
  }else{
    console.log("Deleted successfully")
  }
});

Person.deleteMany({name: "John"},function (err){
  if (err){
        console.log(err)
      } else{
        console.log("Deleted successfully")
      };
});
Person.updateOne({name:"John"}, {favoriteFruit: kiwi}, function(err){
  if (err){
    console.log(err)
  }else{
    console.log("Updated John successfully")
  }
});
