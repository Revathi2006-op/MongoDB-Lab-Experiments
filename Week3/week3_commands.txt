// Select database
use collegeDB

// Create collection
db.createCollection("students")

// INSERT ONE
db.students.insertOne({
  name: "Revathi",
  age: 20,
  dept: "CSE"
})

// INSERT MANY
db.students.insertMany([
  {name: "Anu", age: 21, dept: "IT"},
  {name: "Kumar", age: 22, dept: "ECE"},
  {name: "Priya", age: 20, dept: "CSE"}
])

// READ (FIND)
db.students.find()

// READ ONE
db.students.findOne({name: "Anu"})

// UPDATE ONE
db.students.updateOne(
  {name: "Anu"},
  {$set: {age: 23}}
)

// UPDATE MANY
db.students.updateMany(
  {dept: "CSE"},
  {$set: {dept: "Computer Science"}}
)

// DELETE ONE
db.students.deleteOne({name: "Kumar"})

// DELETE MANY
db.students.deleteMany({age: 20})

// FINAL CHECK
db.students.find()
