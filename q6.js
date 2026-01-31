db.employees.findOne()
db.employees.find().skip(1)
db.employees.find().limit(2)
db.employees.find(
    {department:"HR"},
    {name:1}  //1 means true (this bracket is to print only name columns )
)

db.employees.find(
    {department:"HR"},
    {}
)

db.employees.find(
    {department:"HR"},
    {name:1,email:1}
)//it prints name and email

db.employees.find(
    {department:"HR"},
    {_id:0,name:1,email:1}
)//it wont print id

db.employees.find(
    {},{_id:0,name:1}
)


db.employees.find(
    {},{name:1}
).sort({name:1})

db.employees.find().sort({name:1})//ascending order

db.employees.find().sort({name:-1})//descending order

db.employees.find(
    {},{_id:0,name:1}
).sort({name:-1})


//prints first 3
db.employees.find(
    {},{_id:0,name:1}
).sort({name:1}).limit(3)

//skips 1st one and prints remaining
db.employees.find(
    {},{_id:0,name:1}
).sort({name:1}).limit(3).skip(1)

db.employees.find(
    {salary:3000},{}
) //or
db.employees.find({salary:3000})


//prints person who is greater than 3000
db.employees.find({salary:{$gt:3000}})

//prints person who is less than 3000
db.employees.find({salary:{$lt:3000}})

//prints person who is greater than or equals to 3000
db.employees.find({salary:{$gte:3000}})

//prints person who is less than or equals to 3000
db.employees.find({salary:{$lte:3000}})


db.employees.find(
    {
        salary:{$lt:3000},
        department:'HR'
    },
    {
        _id:0,
        name:1
    }
)

db.employees.find(
    {department:"HR"}
)

//or 
//using operator
db.employees.find(
    {department:{$eq:"HR"}}
)


//not equal to hr
db.employees.find(
    {department:{$ne:"HR"}}
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:1500}}
)

db.employees.updateOne(
    {email:"abc@gmail.com"},
    {$set:{name:"ABC"}},
    {upsert:true}
)

db.employees.deleteOne(
    {email: "abc@gmail.com"}
)





