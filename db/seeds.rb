# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

parent = {
  first_name: "Vero",
  last_name: "Kim",
  phone_number: "111-111-1111",
  password: "test"
}

Parent.create(parent)


cr = {
  classroom_1: {
  name: "Pre-k",
  teacher_name: "Snoopy" 
  },
classroom_2: {
  name: "1st Grade",
  teacher_name: "Miss First"
  }
}

cr.each do |k,v|
  Classroom.create(v)
end