# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)




for i in 0..100
  Sale.create(name: 'Doug', city: "Boston", country: "USA", quantity:4)
end

Sale.create(name: 'Tom', city: "Madrid", country: "Spain", quantity:12)
Sale.create(name: 'Alex', city: "Berlin", country: "Germany", quantity:1)
Sale.create(name: 'Arya', city: "SF", country: "USA", quantity:2)
Sale.create(name: 'Jenny', city: "Beijing", country: "China", quantity:7)
Sale.create(name: 'Brian', city: "London", country: "England", quantity:3)
Sale.create(name: 'Albert', city: "Boston", country: "USA", quantity:6)
