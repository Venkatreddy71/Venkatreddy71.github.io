db.users.insertOne(
    {name:"Lucka",age:20}
)

db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})