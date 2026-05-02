// Week 7 - Aggregation Operations

// Step 1: Use database
use companyDB

// Step 2: Clear old data (optional)
db.employees_schema.deleteMany({})

// Step 3: Insert valid data (IMPORTANT: follow schema rules)
db.employees_schema.insertMany([
  {name: "Ravi", age: 25, dept: "HR", salary: 30000},
  {name: "Anu", age: 24, dept: "IT", salary: 40000},
  {name: "Kumar", age: 28, dept: "IT", salary: 50000},
  {name: "Priya", age: 22, dept: "HR", salary: 35000},
  {name: "Suresh", age: 30, dept: "Finance", salary: 45000},
  {name: "Meena", age: 27, dept: "Finance", salary: 55000}
])

// ---------------- AGGREGATION ----------------

// 1. Total salary
db.employees_schema.aggregate([
  {$group: {_id: null, totalSalary: {$sum: "$salary"}}}
])

// 2. Average salary
db.employees_schema.aggregate([
  {$group: {_id: null, avgSalary: {$avg: "$salary"}}}
])

// 3. Count employees
db.employees_schema.aggregate([
  {$group: {_id: null, totalEmployees: {$sum: 1}}}
])

// 4. Department-wise total salary
db.employees_schema.aggregate([
  {$group: {_id: "$dept", totalSalary: {$sum: "$salary"}}}
])

// 5. Department-wise average salary
db.employees_schema.aggregate([
  {$group: {_id: "$dept", avgSalary: {$avg: "$salary"}}}
])

// 6. Max salary
db.employees_schema.aggregate([
  {$group: {_id: "$dept", maxSalary: {$max: "$salary"}}}
])

// 7. Min salary
db.employees_schema.aggregate([
  {$group: {_id: "$dept", minSalary: {$min: "$salary"}}}
])
