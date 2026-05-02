// Week 5 - Filtering & Projection

// Step 1: Use database
use companyDB

// Step 2: Create collection (if not already created)
db.createCollection("employees")

// Step 3: Insert multiple records (IMPORTANT for filtering)
db.employees.insertMany([
  {name: "Ravi", age: 25, dept: "HR", salary: 35000},
  {name: "Anu", age: 24, dept: "IT", salary: 40000},
  {name: "Kumar", age: 28, dept: "Finance", salary: 50000},
  {name: "Priya", age: 22, dept: "HR", salary: 30000}
])

// ---------------- FILTERING ----------------

// 1. Salary greater than 35000
db.employees.find({salary: {$gt: 35000}})

// 2. Department = HR
db.employees.find({dept: "HR"})

// 3. Age less than 25
db.employees.find({age: {$lt: 25}})

// ---------------- PROJECTION ----------------

// 4. Show only name and salary
db.employees.find({}, {name: 1, salary: 1, _id: 0})

// 5. Show only department
db.employees.find({}, {dept: 1, _id: 0})

// ---------------- FILTER + PROJECTION ----------------

// 6. Salary > 30000, show name and dept
db.employees.find(
  {salary: {$gt: 30000}},
  {name: 1, dept: 1, _id: 0}
)

