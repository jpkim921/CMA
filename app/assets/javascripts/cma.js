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
        console.log('PARENTS INDEX')
        $.get(url, parentsResults)
      } else if (query === 'children') {
        console.log('CHILDREN INDEX')
      }

    }
  );
});

// populate div#results with classrooms index
var classroomsResults = (data) => {
  // add the rows with column titles
  $('#results').append('<table id="classrooms_index"><tbody><tr><td>Class Name</td><td>Teacher</td><td>Age Range</td><td>Number of Students</td></tr></tbody></table>')

  data.forEach((classroom) => {
    console.log(classroom)
    var baseURL = 'https://localhost:3000/classrooms/'
    $('#classrooms_index').append('<tr><td><a href='+'"https://localhost:3000/classrooms/' + classroom.id + '">' + classroom.name + '</a></td><td>TEST</td><td>TEST</td><td>TEST</td><td>TEST</td></tr>'

    )
  })
}

// populate div#results with parents index
var parentsResults = (data) => {

  data.forEach((parent) => {
    console.log(parent)
    var parent_name = parent.first_name + ' ' + parent.last_name
    var baseURL = 'https://localhost:3000/parents/'
    $('#results').append('<li><a href='+ baseURL + parent.id + '>' + parent_name + '</a></li>')
  });
}
