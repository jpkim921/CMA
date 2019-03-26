console.log('classroom js test')

// $('a[attr-edit="edit"]')

let loadClassroom = () => {
  $('#classrooms_index a').on('click', function(e) {
      e.preventDefault();
      const url = this.href;

      // console.log("testing link")
      // console.log(url)

      // $('#results').empty()
      $.get(url, showClassroom)
    }
  );
}

let loadChildClassroom = () => {
  $("[attr='classLink']").on('click', function(e) {
      e.preventDefault();
      const url = this.href;

      // console.log("testing link")
      // console.log(url)

      // $('#results').empty()
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
  // debugger;
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

      // console.log(data);
      // console.log(action);

      $.post(action, data).done(function(data){
        let classroom = data;
        showClassroom(classroom);
      })

    })
  })

}

//delete link in classroom#index
let deleteClassroom = () => {
  console.log("inside deleteClassroom")
  $('a[attr-delete="delete"]').on('click', function(e) {
    // debugger
    e.preventDefault();
    // let $this = $(this)
    // console.log ($this.href)
    let url = this.href;
    console.log('this.href', url)
    $.ajax({
      type: "DELETE",
      url: url,
      dataType: "json",
      data: {"_method":"delete"},
      complete: function(){
        $('#results').empty();
        $('a[attr-index="classrooms"]').trigger("click");

        console.log('Delete Successful')

      }
    })
  });
}

//
// $(document).on(“click”, ‘a.jquery-postback’, function(event){
//  event.preventDefault();
//  var goal = this
// goal.parentElement.remove()
//  $.ajax({
//  type: ‘DELETE’,
//  url: goal.href,
//  dataType: “json”,
//  data: {“_method”:”delete”},
//  complete: function(){
//  alert(“Deleted Successfully”);
//  },
//  error: function(result){
//  “something went wrong”
//  }
//  });
// })
