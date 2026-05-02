// Week 4 - Employee Management System

// Step 1: Use database
use companyDB

// Step 2: Create collection
db.createCollection("employees")

// Step 3: Insert one employee
db.employees.insertOne({
  name: "Ravi",
  age: 25,
  dept: "HR",
  salary: 30000
})

// Step 4: Insert multiple employees
db.employees.insertMany([
  {name: "Anu", age: 24, dept: "IT", salary: 40000},
  {name: "Kumar", age: 28, dept: "Finance", salary: 50000}
])

// Step 5: Read data
db.employees.find()

// Step 6: Update one employee
db.employees.updateOne(
  {name: "Ravi"},
  {$set: {salary: 35000}}
)

// Step 7: Update many employees
db.employees.updateMany(
  {dept: "IT"},
  {$set: {dept: "Information Technology"}}
)

// Step 8: Delete one employee
db.employees.deleteOne({name: "Kumar"})

// Step 9: Delete many employees
db.employees.deleteMany({age: {$lt: 25}})

// Final output
db.employees.find()
