module ChildrenHelper

  def display_dob(dob)
    dob.strftime("%B %e, %Y")
  end

  def display_classroom_name(child)
    if child.classroom
      child.classroom.name
    else
      "Classroom not assigned."
    end
  end

  def display_teacher_name(child)
    if child.classroom
      child.teacher_name
    else
      "N/A"
    end
  end

end
