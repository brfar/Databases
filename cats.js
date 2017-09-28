var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

/*  Tells mongoose, the js side of things that I want to be able
    to add cats to our database and the cat should be define as this: */
var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
/*  what we did here: we took the catSchema, which is just a pattern
    that says every cat has a name, age and temperament and we compiled it into a model
    and we save it into a variable Cat
    and now we can use this variable to add, delete, edit cats in the db
*/

//adding a new cat to the DB

// var george = new Cat({
//     name: "Georgie",
//     age: 11,
//     temperament: "Grouchy"
// });

//the callback function is just to let us know if the cat was indeed saved to the db
// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });

// Cat.create({
//    name: "Snow White",
//    age: 15,
//    temperament: "Bland"
// }, function(err, cat){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});
/*  The {} is because we're not looking for a specific cats
    Isso faz com que imprima todos os gatos
*/
