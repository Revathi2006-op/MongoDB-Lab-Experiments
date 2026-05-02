// Week 6 - Schema Validation & Indexing

// Step 1: Use database
use companyDB

// Step 2: Create collection with schema validation
db.createCollection("employees_schema", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "dept", "salary"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be integer >= 18"
        },
        dept: {
          bsonType: "string",
          description: "must be a string"
        },
        salary: {
          bsonType: "int",
          minimum: 0,
          description: "must be integer"
        }
      }
    }
  }
})

// Step 3: Insert valid data
db.employees_schema.insertOne({
  name: "Ravi",
  age: 25,
  dept: "HR",
  salary: 30000
})

// Step 4: Try invalid data (will fail)
db.employees_schema.insertOne({
  name: "Anu",
  age: 15,
  dept: "IT",
  salary: 20000
})

// Step 5: Create index on name
db.employees_schema.createIndex({name: 1})

// Step 6: View indexes
db.employees_schema.getIndexes()

// Step 7: Use index (search)
db.employees_schema.find({name: "Ravi"})
