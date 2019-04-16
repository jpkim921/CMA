
$(document).ready(function() {
  $('#results').hide();
  $('td a').on('click', function (e) {
      e.preventDefault();
      $('#results').show();
      $('#results').empty();

      const url = this.href;
      let query;

      query = url.substring('https://localhost:3000/admin/'.length)

      if (query === 'classrooms') {
        $.get(url, classroomsResults)
      } else if (query === 'parents') {
        $.get(url, parentsResults)
      } else if (query === 'children') {
        $.get(url, childrenResults)
      }

    }
  );

});

// populate div#results with classrooms index
const classroomsResults = (data) => {

  $('#results').append('<a id="add_classroom" href="/classrooms/new">Add Classroom</a>')

  // add the rows with column heading
  $('#results').append('<table id="classrooms_index"><tbody><tr><th>Class Name</th><th>Teacher</th><th>Age Range</th><th>Number of Students</th></tr></tbody></table>')

  sortClassroomButton();

  // takes the data and fills the #results with the list of clssrooms
  populateClassroomList(data);

  loadClassroom();
  loadClassroomForm();
  deleteClassroom();
}

// populate div#results with parents index
const parentsResults = (data) => {

  data.forEach((parent) => {
    const parent_name = parent.first_name + ' ' + parent.last_name
    const baseURL = 'https://localhost:3000/parents/'
    $('#results').append('<li><a href='+ baseURL + parent.id + '>' + parent_name + '</a></li>')
  });

  loadParent();
}

// populate div#results with children index
const childrenResults = (data) => {
  // add the rows with column heading
  $('#results').append('<table id="children_index"><tbody><tr><td>Child Name</td><td>Age</td><td>Edit Column</td><td>Delete Column</td></tr></tbody></table>')

  data.forEach((child) => {
    const child_name = child.first_name + ' ' + child.last_name
    const age = Date.now() - timeStamp(child.dob);
    const baseURL = 'https://localhost:3000/children/'
    const editURL = '<a href="https://localhost:3000/children/' + child.id + '/edit">Edit</a>'
    const deleteURL = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="https://localhost:3000/children/' + child.id + '">Delete</a>'
    // '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/3">Delete</a>'

    $('#children_index').append('<tr><td><a href='+ baseURL + child.id + '>' + child_name + '</a></td><td>' + getChildAge(child.dob) + '</td><td>' + editURL + '</td><td>' + deleteURL + '</td></tr>')
  });
  loadChild();
}


// to convert child age from Ruby to use with JS

// changes string date to timestamp
const timeStamp = (stringDate) => {
  const datum = Date.parse(stringDate);
  return datum;
}
//converts to human readable time format
const timeConverter = (UNIX_timestamp)=> {
  const time = new Date(UNIX_timestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = time.getFullYear();
  const month = months[time.getMonth()];
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const convertedTime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return convertedTime;
}
