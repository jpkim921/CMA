console.log('childrens.js test')
//can't name file a certain word

const getChildAge = (dob) => {
  let dobConvert = timeStamp(dob)
  let dateNow = Date.now()
  let diff = dateNow - dobConvert

  let jsTime = new Date(timeConverter(diff))

  return jsTime.getFullYear() - 1970

}

const getChildDob = (dob) => {
  let dobTimestamp = timeStamp(dob);
  let dobConvert = new Date(dobTimestamp);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = dobConvert.getFullYear();
  let month = months[dobConvert.getMonth()];
  let date = dobConvert.getDate();

  // let convertedDob = month + ' ' + date + ' ' + year;
  let convertedDob = `${month} ${date}, ${year}`;

  return convertedDob;
}

let hasAllergies = (child) => {
  if (child.allergy) {
    return "Child has allergies."
  } else {
    return "Child has no allergies."
  }
}


const loadChild = () => {
  $('#children_index td:nth-child(1) a').on('click', function(e) {
    e.preventDefault();
    let url = this.href;

    console.log(url, 'childrens.js')

    $('#results').empty()
    $.get(url, function(data) {
      console.log(data);
    })
    $.get(url, showChild)

  })
}

const showChild = (child) => {
  // console.log("showChild TEST")
  // console.log(child)

  let childName = `${child.first_name} ${child.last_name}`;
  let dob = getChildDob(child.dob);
  // let hasAllergies = child.allergy;
  let allergies = hasAllergies(child);
  let teacherName = child.classroom.teacher_name;
  let classroomName = child.classroom.name;

  // console.log(name, dob, hasAllergies, teacher, classroom)
  console.log(hasAllergies)


  $('#results').append('<h3>' + childName + '</h3>');
  $('#results').append('<h3>DOB: ' + dob + '</h3>');
  $('#results').append('<h3>' + allergies + '</h3>');
  $('#results').append('<h3>Teacher: ' + teacherName + '</h3>');
  $('#results').append('<h3>Classroom: ' + classroomName + '</h3>');



}
