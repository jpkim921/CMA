console.log("parent.js test")

function Parent(attributes){
  this.first_name = attributes.first_name;
  this.last_name = attributes.last_name;
  this.phone_number = attributes.phone_number
}

Parent.prototype.name = function () {
  return `${this.first_name} ${this.last_name}`
}


const loadParent = () => {
  $('li a').on('click', function(e) {
    e.preventDefault();
    let url = this.href;

    console.log(url, 'parent.js')

    $('#results').empty()
    $.get(url, function(data) {
      console.log(data);
    })
    $.get(url, showParent)

  })
}

const showParent = (parent) => {
  console.log("showParents TEST")
  let jsParentObj = new Parent(parent)

  let parentName = jsParentObj.name();
  let phoneNumber = parent.phone_number;

  const logoutLink = '<a rel="nofollow" data-method="post" href="/logout">Log Out</a>';
  let editLink = '<a href="/parents/' + parent.id + '/edit">Edit</a> ';
  let deleteLink = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/parents/' + parent.id + '">Delete</a>';
  let addChildLink = '<div><a href="/parents/' + parent.id + '/children/new">Add Child</a></div>'
  let listOfChildren = listChildren(parent.children);

  $('#results').append('<h2>' + parentName + '</h2>');
  $('#results').append('<div class=""><strong>Phone Number: </strong>' + phoneNumber + '</div>')
  $('#results').append(editLink);
  $('#results').append(deleteLink);
  $('#results').append('<hr>');
  $('#results').append('<h3>Registered Child/Children</h3>');
  $('#results').append(addChildLink);
  $('#results').append(listOfChildren);

  console.log(parent.children)

}

// list children that belongs to the parent
const listChildren = (children) => {
  let htmlString = '';
  children.forEach((child) => {
    let childName = `${child.first_name} ${child.last_name}`
    let age = getChildAge(child.dob)
    let editLink = '<a href="/parents/' + child.parent.id + '/children/' + child.id + '/edit">Edit</a>'
    let deleteLink = '<a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/' + child.id + '">Delete</a>'
    htmlString += '<tr><td><li>' + childName + '</li></td><td> Age: ' + age + ' </td><td> ' + editLink + ' </td><td> ' + deleteLink + ' </td></tr>'

  })
  return htmlString;
}


// <table>
//   <tbody>
//     <tr>
//       <td><li><a href="/parents/2/children/1">Sam Kim</a></li></td>
//       <td>Age: 4</td>
//       <td><a href="/parents/2/children/1/edit">Edit</a></td>
//       <td><a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/1">Delete</a>
// </td>
//     </tr>
//     <tr>
//       <td><li><a href="/parents/2/children/2">Max Kim</a></li></td>
//       <td>Age: 3</td>
//       <td><a href="/parents/2/children/2/edit">Edit</a></td>
//       <td><a data-confirm="Confirm Deletion" rel="nofollow" data-method="delete" href="/children/2">Delete</a>
// </td>
//     </tr>
//
//   </tbody>
// </table>
