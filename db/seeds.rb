# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

admin = Parent.create(first_name: "Admin", last_name: "Admin", phone_number: "000-000-0000", password: "test", admin: true)

parent = {
  parent_1: {
    first_name: "Vero",
    last_name: "Kim",
    phone_number: "111-111-1111",
    password: "test",
    email: "vero@test.com"
  },
  parent_2: {
    first_name: "Luis",
    last_name: "Fonsi",
    phone_number: "111-111-1112",
    password: "test",
    email: "Luis@test.com"

  }
}

parent.each {|k,v| Parent.create(v)}
# Parent.create(parent)

cr = {
  classroom_1: {
  name: "Pre-k",
  teacher_name: "Snoopy",
  age_low: 3,
  age_high: 4
  },
classroom_2: {
  name: "Class A",
  teacher_name: "Spongebob",
  age_low: 5,
  age_high: 7
  },
  classroom_3: {
  name: "Class B",
  teacher_name: "Cartman",
  age_low: 8,
  age_high: 10
  }
}

cr.each do |k,v|
  Classroom.create(v)
end
