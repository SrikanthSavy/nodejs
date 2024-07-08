
Database - A place where the data stores permanently. 
- What's the difference between general purpose and specific purpose programming lang.
- general pupose - java(mobile, desktop, enterprise)
- Specific purpose programming language. - SQL( used to perform operation on db ) 
SQL - MySQL, Oracle, MariaDB, PostgreSQL 
- Databases 
- Tables
- Rows 
- Columns 
- if you want to insert 50000 rows. (10 mins)

NoSQL - MongoDB
- Database
- Collections 
- Documents 
- keys 
- The data stored in json format. eg: {key:value,key:value}
- If you want to inset 50000 rows. (less than a minute)

Datypes supported in MongoDB:
1. String
2. Boolean
3. Integer
4. Double
5. Arrays
6. ObjecId

Database commands: 
1. View all commands 
show dbs

2. View all colletions:
show collections

*** switch database 
use 'db_name'

3. view Current Db
db

4. Delete Database 
db.dropDatabase()

5. Create collection
db.createCollection('collection-name')

6. Insert one row
db.collection_name.insert({
    key:value,
    key:value
})

7. Insert multiple rows
db.collection_name.insertMany([{--record1--},
{--record2--}])

8. Search in MongoDB 
db.collection_name.find({key:value})

9. Display limited documents(rows)
db.collection_name.find().limit(2) 

10. count number of documents(rows) in a collection
db.collection_name.find().count()

11. Update a Document
db.collection_name.updateOne({key:value},
	{$set:{key:val,key:val}} )


12. Delete Row
db.collection_name.remove({key:value})

13. Show all the records 
db.collection_name.find()

14. Pretty view display of collection
db.collection_name.find().pretty()


Operators
==========
1. Comparison operators
========================

* $eq  - equality operator
syntax:     db.collection.find({key: {$eq: value}})
//db.students.find({'fee':{$eq:5000}})

* $gt  - greater than
syntax:     db.collection.find({key: {$gt: value}})
//db.students.find({'fee':{$gte:5000}})

* $lt  - less than
syntax:     db.collection.find({key: {$lt: value}})
//db.students.find({'fee':{$lt:5000}})

* $gte - greater than or equal
syntax:     db.collection.find({key: {$gte: value}})
//db.students.find({'fee':{$gte:5000}})

* $lte - less than or equal
syntax:     db.collection.find({key: {$lte: value}})
//db.students.find({'fee':{$lte:5000}})

2. Logical operators
=====================
* $and - Joins the query with logical AND
syntax:  db.collection.find({$and: [{key:value},{key:value}] })
//db.students.find({$and:[{'fee':5000},{'name':'Babu'}]})

* $or - Joins the query with logical OR
syntax:  db.collection.find({$or: [{key:value},{key:value}]})
//db.students.find({$or:[{'name':'Srikanth'},{'fee':5000}]})


* $not - Joins the query with logical NOT
db.collection.find({key: {$not: {$lt: value}}})
//db.students.find({'fee':{$not:{$lt:5000}}})  
//db.students.find({'fee':{$not:{$gt:5001}}})

* $nor - Returns all the documents that fail to match all conditions
db.collection.find({$nor: [{key:value},{key:value}] })
//db.students.find({$nor:[{'fee':5000},{'name':'Srikanth'}]})

3.









Node Connecting to MongoDB
========================

2) Creating a Schema
=====================
syntax:

const mongoose = require('mongoose');

const schemaName = new mongoose.Schema({
    fieldName1: { type: String },
    fieldName2: { type: Number },
    fieldName3: { type: Date }
});

3) Creating Model for a Schema
================================
Here's the extracted text from the image:
 NOTE:  MongoDB vs Mongoose
        ===================
        
MongoDB stores flexible data, ideal for diverse content,
While Mongoose, is a Node.js library, organizes data with validation and query building

Mongoose :
Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
This is used to insert the data in the form of JSON format.
https://mongoosejs.com/ is the official website for this library.

npm install mongoose --save
const mongoose = require('mongoose');

const mongoose = require('mongoose');

// Define the schema
const productSchema = new mongoose.Schema({
    // Add your schema fields here, for example:
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Create the model
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
