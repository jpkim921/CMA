console.log('classroom js test')



var loadClassroom = () => {
  $('#results a').on('click', function(e) {
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



// dont need this part
// <div><%= link_to "Back To Homepage", back_to_homepage %></div>

// <h2><%= @classroom.name %></h2>
// <h3><%= age_range(@classroom) %></h3>
//
// <table border="0" cellpadding="10">
//   <tr>
//     <th>First Name</th>
//     <th>Last Name</th>
//     <th>Parent Contact</th>
//   </tr>
//
//   <%  @classroom.children.each do |child| %>
//     <tr>
//       <td><%= child.last_name %>,</td>
//       <td><%= child.first_name %></td>
//       <td><%= link_to name(child.parent), parent_path(child.parent) %></td>
//     </tr>
//   <% end %>
// </table>
