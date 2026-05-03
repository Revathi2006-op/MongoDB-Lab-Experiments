// Week 8 - Data Transformation

// Step 1: Use database
use companyDB

// Step 2: Show all data (for reference)
db.employees_schema.find()

// ---------------- DATA TRANSFORMATION ----------------

// 1. Projection (show only name and salary)
db.employees_schema.aggregate([
  {
    $project: {
      name: 1,
      salary: 1,
      _id: 0
    }
  }
])

// 2. Add new field (Bonus = 10% of salary)
db.employees_schema.aggregate([
  {
    $addFields: {
      bonus: { $multiply: ["$salary", 0.1] }
    }
  }
])

// 3. Add another field (Total Salary = salary + bonus)
db.employees_schema.aggregate([
  {
    $addFields: {
      bonus: { $multiply: ["$salary", 0.1] },
      totalSalary: { $add: ["$salary", { $multiply: ["$salary", 0.1] }] }
    }
  }
])

// 4. Filter data (salary > 40000)
db.employees_schema.aggregate([
  {
    $match: {
      salary: { $gt: 40000 }
    }
  }
])

// 5. Sort by salary (descending)
db.employees_schema.aggregate([
  {
    $sort: {
      salary: -1
    }
  }
])

// 6. Rename fields (name → empName, salary → empSalary)
db.employees_schema.aggregate([
  {
    $project: {
      empName: "$name",
      empSalary: "$salary",
      _id: 0
    }
  }
])

// 7. Combine operations (filter + project + sort)
db.employees_schema.aggregate([
  {
    $match: { salary: { $gt: 30000 } }
  },
  {
    $project: {
      name: 1,
      salary: 1,
      _id: 0
    }
  },
  {
    $sort: { salary: -1 }
  }
])
