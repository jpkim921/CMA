console.log('test')

$(document).ready(function() {

  $('a').on('click', function (e) {
      e.preventDefault();
      $('#results').empty();
      var url = this.href;
      var query;
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
var classroomsResults = (data) => {
  // add the rows with column heading
  $('#results').append('<table id="classrooms_index"><tbody><tr><td>Class Name</td><td>Teacher</td><td>Age Range</td><td>Number of Students</td></tr></tbody></table>')

  data.forEach((classroom) => {
    console.log(classroom)
    var baseURL = 'https://localhost:3000/admin/classrooms/'
    var className = classroom.name;
    var classTeacher = classroom.teacher_name;
    var classAgeRange = classroom.age_low + " - " + classroom.age_high;
    var numOfStudents = classroom.children.length
    var editURL = '<a href="https://localhost:3000/classrooms/' + classroom.id + '/edit">Edit</a>'
    var deleteURL = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="https://localhost:3000/classrooms/' + classroom.id + '">Delete</a>'

    $('#classrooms_index').append('<tr><td><a href='+'"https://localhost:3000/classrooms/' + classroom.id + '">' + className + '</a></td><td>' + classTeacher + '</td><td>' + classAgeRange + '</td><td>' + numOfStudents + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });
}

// populate div#results with parents index
var parentsResults = (data) => {

  data.forEach((parent) => {
    console.log(parent)
    var parent_name = parent.first_name + ' ' + parent.last_name
    var baseURL = 'https://localhost:3000/admin/parents/'
    $('#results').append('<li><a href='+ baseURL + parent.id + '>' + parent_name + '</a></li>')
  });
}

// populate div#results with children index
var childrenResults = (data) => {
  // add the rows with column heading
  $('#results').append('<table id="children_index"><tbody><tr><td>Child Name</td><td>Age</td><td>Edit Column</td><td>Delete Column</td></tr></tbody></table>')

  data.forEach((child) => {
    console.log(child)
    var child_name = child.first_name + ' ' + child.last_name
    var age = Date.now() - timeStamp(child.dob);
    console.log(age)
    var baseURL = 'https://localhost:3000/children/'
    var editURL = '<a href="https://localhost:3000/children/' + child.id + '/edit">Edit</a>'
    var deleteURL = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="https://localhost:3000/children/' + child.id + '">Delete</a>'
    // '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/3">Delete</a>'

    console.log(deleteURL)
    $('#children_index').append('<tr><td><a href='+ baseURL + child.id + '>' + child_name + '</a></td><td>' + getChildAge(child.dob) + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });
}


// to convert child age from Ruby to use with JS

// changes string date to timestamp
var timeStamp = (stringDate) => {
  var datum = Date.parse(stringDate);
  return datum;
}
//converts to human readable time format
var timeConverter = (UNIX_timestamp)=> {
  var time = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = time.getFullYear();
  var month = months[time.getMonth()];
  var date = time.getDate();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

var getChildAge = (dob) => {
  var dobConvert = timeStamp(dob)
  var dateNow = Date.now()
  var diff = dateNow - dobConvert

  var jsTime = new Date(timeConverter(diff))

  return jsTime.getFullYear() - 1970

}
