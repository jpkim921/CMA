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
  },
  parent_3: {
    first_name: "John",
    last_name: "Smith",
    phone_number: "111-111-1113",
    password: "test",
    email: "JohnSmith@test.com"
  },
  parent_4: {
    first_name: "Al",
    last_name: "Bundy",
    phone_number: "111-111-1114",
    password: "test",
    email: "AlBundy@test.com"
  },
  parent_5: {
    first_name: "Leela",
    last_name: "Turanga",
    phone_number: "111-111-1115",
    password: "test",
    email: "LeelaTuranga@test.com"
  },
  parent_6: {
    first_name: "Homer",
    last_name: "Simpson",
    phone_number: "111-111-1116",
    password: "test",
    email: "HomerSimpson@test.com"
  }
}

parent.each {|k,v| Parent.create(v)}
# Parent.create(parent)

children = {
  child_1: {
    last_name: "Kim",
    first_name: "Sam",
    dob: "2015-01-26 00:00:00",
    allergy: false
  },
  child_2: {
  last_name: "Fonsi",
  first_name: "LP",
  dob: "2015-09-22 00:00:00",
  allergy: true
  }
}

children.each {|k,v| Child.create(v)}


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

child1 = Child.all[0]
child2 = Child.all[1]
child1.parent = Parent.all[1]
child1.classroom = Classroom.all[0]
child1.save
child2.parent = Parent.all[2]
child2.classroom = Classroom.all[0]
child2.save
