db.employees.insertMany([{
  name: "Mental D",
  email: "mental@gmail.com",
  department: "HR",
  salary: 3000,
  location: ["FL", "TX", "AZ"],
  date: Date()
},
{ name: "Amy S",
  email: "amy@gmail.com",
  department: "HR",
  salary: 2000,
  location: ["AZ", "FL"],
  date: Date()
}]);