console.log('admin index js test')

$(document).ready(function() {
  $('#results').hide();
  $('td a').on('click', function (e) {
      e.preventDefault();
      $('#results').show();
      $('#results').empty();

      const url = this.href;
      let query;

      query = url.substring('https://localhost:3000/admin/'.length)
      console.log(query)

      if (query === 'classrooms') {
        $.get(url, classroomsResults)

      } else if (query === 'parents') {
        // console.log('PARENTS INDEX')
        $.get(url, parentsResults)
      } else if (query === 'children') {
        $.get(url, childrenResults)
        // console.log('CHILDREN INDEX')
      }

    }
  );
});

// populate div#results with classrooms index
const classroomsResults = (data) => {
  $('#results').append('<a id="add_classroom" href="/classrooms/new">Add Classroom</a>')

  // add the rows with column heading
  $('#results').append('<table id="classrooms_index"><tbody><tr><th>Class Name</th><th>Teacher</th><th>Age Range</th><th>Number of Students</th></tr></tbody></table>')

  data.forEach((classroom) => {
    console.log(classroom)
    const baseURL = 'https://localhost:3000/admin/classrooms/'
    let className = classroom.name;
    let classTeacher = classroom.teacher_name;
    let classAgeRange = classroom.age_low + " - " + classroom.age_high;
    let numOfStudents = classroom.children.length
    let editURL = '<a attr-edit="edit" href="https://localhost:3000/classrooms/' + classroom.id + '/edit">Edit</a>'
    // let deleteURL = '<a class="delete-classroom" attr-delete="delete" data-classrom-id="'+ classroom.id + '" data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="https://localhost:3000/classrooms/' + classroom.id + '">Delete</a>'
    let deleteURL = '<a class="delete-classroom" attr-delete="delete" data-classrom-id="'+ classroom.id + '" data-confirm="Confirm Deletion" rel="nofollow" href="https://localhost:3000/classrooms/' + classroom.id + '">Delete</a>'

    $('#classrooms_index').append('<tr><td><a href='+'"https://localhost:3000/classrooms/' + classroom.id + '">' + className + '</a></td><td>' + classTeacher + '</td><td>' + classAgeRange + '</td><td>' + numOfStudents + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });

  loadClassroom();
  loadClassroomForm();
  deleteClassroom();
}

// populate div#results with parents index
const parentsResults = (data) => {

  data.forEach((parent) => {
    console.log(parent)
    let parent_name = parent.first_name + ' ' + parent.last_name
    let baseURL = 'https://localhost:3000/parents/'
    $('#results').append('<li><a href='+ baseURL + parent.id + '>' + parent_name + '</a></li>')
  });

  loadParent();
}

// populate div#results with children index
const childrenResults = (data) => {
  // add the rows with column heading
  $('#results').append('<table id="children_index"><tbody><tr><td>Child Name</td><td>Age</td><td>Edit Column</td><td>Delete Column</td></tr></tbody></table>')

  data.forEach((child) => {
    console.log(child)
    let child_name = child.first_name + ' ' + child.last_name
    let age = Date.now() - timeStamp(child.dob);
    console.log(age)
    const baseURL = 'https://localhost:3000/children/'
    let editURL = '<a href="https://localhost:3000/children/' + child.id + '/edit">Edit</a>'
    let deleteURL = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="https://localhost:3000/children/' + child.id + '">Delete</a>'
    // '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/3">Delete</a>'

    console.log(deleteURL)
    $('#children_index').append('<tr><td><a href='+ baseURL + child.id + '>' + child_name + '</a></td><td>' + getChildAge(child.dob) + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });
  loadChild();
}


// to convert child age from Ruby to use with JS

// changes string date to timestamp
const timeStamp = (stringDate) => {
  let datum = Date.parse(stringDate);
  return datum;
}
//converts to human readable time format
const timeConverter = (UNIX_timestamp)=> {
  let time = new Date(UNIX_timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = time.getFullYear();
  let month = months[time.getMonth()];
  let date = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let convertedTime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return convertedTime;
}

// const getChildAge = (dob) => {
//   let dobConvert = timeStamp(dob)
//   let dateNow = Date.now()
//   let diff = dateNow - dobConvert
//
//   let jsTime = new Date(timeConverter(diff))
//
//   return jsTime.getFullYear() - 1970
//
// }
