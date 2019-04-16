
// $('a[attr-edit="edit"]')

let loadClassroom = () => {
  $('#classrooms_index a').on('click', function(e) {
      e.preventDefault();
      const url = this.href;

      $.get(url, showClassroom)
    }
  );
}

let loadChildClassroom = () => {
  $("[attr='classLink']").on('click', function(e) {
      e.preventDefault();
      const url = this.href;
      $.get(url, showClassroom)
    }
  );
}

let showClassroom = (classroom) => {
  $('#results').empty()

  let className = classroom.name;
  let classTeacher = classroom.teacher_name;
  let classAgeRange = ageRange(classroom);

  $('#results').append('<h2>' + className + '</h2>')
  $('#results').append('<h3>' + classAgeRange + '</h3>')
  $('#results').append('<table id="classroom_index"><tbody><tr><th>First Name</th><th>Last Name</th><th>Parent Contact</th></tr></tbody></table>')
  $('#classroom_index').append(listClassroomChildren(classroom.children));

}

let ageRange = (classroom) => {
  return `${classroom.age_low} to ${classroom.age_high} year olds`
}

// lists the children in the classroom (has_many relationship)
let listClassroomChildren = (children) => {
  let htmlString = '';
  children.forEach((child) => {
    let firstName = child.first_name;
    let lastName = child.last_name;
    let parentContact = `${child.parent.first_name} ${child.parent.last_name}`;


    htmlString += '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + parentContact + '</td></tr>'

  })
  return htmlString;
}

let loadClassroomForm = () => {
  $('#add_classroom').on('click', function(e) {
    e.preventDefault();
    $('#results').empty();
    $('#results').append('<h3>Create New Classroom</h3>');
    $('#results').append('<form class="new_classroom" id="new_classroom" action="/classrooms" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ETHCfP3RfUA8UBQBIpkmAnrPetIrQk0nu0+DzLuYRnjeeZtl4M8u1Gl3pxVwk/Xw9U8pdrSkFGK319s79EOHow=="><input placeholder="Classroom Name" type="text" name="classroom[name]" id="classroom_name"><br><br><input placeholder="Teacher Name" type="text" name="classroom[teacher_name]" id="classroom_teacher_name"><br><br>Classroom Age Range:<input type="number" name="classroom[age_low]" id="classroom_age_low"> to <input type="number" name="classroom[age_high]" id="classroom_age_high"><br><br><input id="submit" type="submit" name="commit" value="Create Classroom"></form>')

    $('form').submit(function(e) {
      e.preventDefault();
      let $form = $(this);
      let data = $form.serialize();
      let action = $form.attr('action')

      $.post(action, data).done(function(data){
        let classroom = data;
        showClassroom(classroom);
      })

    })
  })

}

//delete link in classroom#index
let deleteClassroom = () => {
  $('a[attr-delete="delete"]').on('click', function(e) {
    e.preventDefault();

    let url = this.href;
    $.ajax({
      type: "DELETE",
      url: url,
      dataType: "json",
      data: {"_method":"delete"},
      complete: function(){
        $('#results').empty();
        $('a[attr-index="classrooms"]').trigger("click");
      }
    })
  });
}

const sortTheData = function(data) {
  const sortedData = data.sort(function(a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
  });
  return sortedData;
}

const populateClassroomList = function(data) {

  data.forEach((classroom) => {
    const baseURL = 'https://localhost:3000/admin/classrooms/'
    let className = classroom.name;
    let classTeacher = classroom.teacher_name;
    let classAgeRange = classroom.age_low + " - " + classroom.age_high;
    let numOfStudents = classroom.children.length
    let editURL = '<a attr-edit="edit" href="https://localhost:3000/classrooms/' + classroom.id + '/edit">Edit</a>'
    let deleteURL = '<a class="delete-classroom" attr-delete="delete" data-classrom-id="'+ classroom.id + '" data-confirm="Confirm Deletion" rel="nofollow" href="https://localhost:3000/classrooms/' + classroom.id + '">Delete</a>'

    $('#classrooms_index').append('<tr><td><a href='+'"https://localhost:3000/classrooms/' + classroom.id + '">' + className + '</a></td><td>' + classTeacher + '</td><td>' + classAgeRange + '</td><td>' + numOfStudents + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });
}

function sortClassroomButton() {
  $('#sort-button').on('click', function(e){
    data = sortTheData(data)
    $('#classrooms_index').empty()
    $('#classrooms_index').append('<table id="classrooms_index"><tbody><tr><th>Class Name</th><th>Teacher</th><th>Age Range</th><th>Number of Students</th></tr></tbody></table>')
    populateClassroomList(data);
  })
}
