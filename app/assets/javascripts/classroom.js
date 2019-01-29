console.log('classroom js test')



var loadClassroom = () => {
  $('#classrooms_index a').on('click', function(e) {
      e.preventDefault();
      var url = this.href;

      // console.log("testing link")
      console.log(url)

      $('#results').empty()
      $.get(url, showClassroom)
    }
  );
}


var showClassroom = (classroom) => {
  var className = classroom.name;
  var classTeacher = classroom.teacher_name;
  var classAgeRange = ageRange(classroom);

  $('#results').append('<h2>' + className + '</h2>')
  $('#results').append('<h3>' + classAgeRange + '</h3>')
  $('#results').append('<table id="classroom_index"><tbody><tr><th>First Name</th><th>Last Name</th><th>Parent Contact</th></tr></tbody></table>')
  // debugger;
  $('#classroom_index').append(listClassroomChildren(classroom.children));

}

var ageRange = (classroom) => {
  return `${classroom.age_low} to ${classroom.age_high} year olds`
}

var listClassroomChildren = (children) => {
  var htmlString = '';
  children.forEach((child) => {
    var firstName = child.first_name;
    var lastName = child.last_name;
    var parentContact = `${child.parent.first_name} ${child.parent.last_name}`;


    htmlString += '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + parentContact + '</td></tr>'

  })
  return htmlString;
}

var newClassroomForm = () => {
  $('#add_classroom').on('click', function(e) {
    e.preventDefault();
    $('#results').empty();
    $('#results').append('<h3>Create New Classroom</h3>');
    $('#results').append('<form class="new_classroom" id="new_classroom" action="/classrooms" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ETHCfP3RfUA8UBQBIpkmAnrPetIrQk0nu0+DzLuYRnjeeZtl4M8u1Gl3pxVwk/Xw9U8pdrSkFGK319s79EOHow=="><input placeholder="Classroom Name" type="text" name="classroom[name]" id="classroom_name"><br><br><input placeholder="Teacher Name" type="text" name="classroom[teacher_name]" id="classroom_teacher_name"><br><br>Classroom Age Range:<input type="number" name="classroom[age_low]" id="classroom_age_low"> to <input type="number" name="classroom[age_high]" id="classroom_age_high"><br><br><input type="submit" name="commit" value="Create Classroom"></form>')
  })
}


'<form class="new_classroom" id="new_classroom" action="/classrooms" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ETHCfP3RfUA8UBQBIpkmAnrPetIrQk0nu0+DzLuYRnjeeZtl4M8u1Gl3pxVwk/Xw9U8pdrSkFGK319s79EOHow=="><input placeholder="Classroom Name" type="text" name="classroom[name]" id="classroom_name"><br><br><input placeholder="Teacher Name" type="text" name="classroom[teacher_name]" id="classroom_teacher_name"><br><br>Classroom Age Range:<input type="number" name="classroom[age_low]" id="classroom_age_low"> to <input type="number" name="classroom[age_high]" id="classroom_age_high"><br><br><input type="submit" name="commit" value="Create Classroom"></form>'
