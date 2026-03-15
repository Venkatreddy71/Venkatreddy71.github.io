//In cmd
mongosh
//use storedb
//show collections
db.products.find()
db.products.insertOne({name:"Products 1",price:100})


db.products.updateOne({name:"Products 1",}
    {$set : {desc:"Description "}}
)