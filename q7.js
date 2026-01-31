//adding new column called points
db.employees.updateMany(
    {},
    {$set:{points:0}}
)

db.employees.updateMany(
    {department:"IT"},
    {$set:{points:5}}
)


//inc is increment operator
db.employees.updateMany(
    {},
    {$inc:{points:1}}
)


//rename operator
//name changed from points to score
db.employees.updateMany(
    {},
    {$rename:{"points":"score"}}
)

db.employees.updateMany(
    {},
    {$unset:{"score":""}}
)

db.employees.drop()
