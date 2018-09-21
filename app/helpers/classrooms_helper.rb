module ClassroomsHelper

  def age_range(classroom)
    "#{classroom.age_low} to #{classroom.age_high} year olds"
  end

  def back_to_homepage
    if session[:admin]
      classrooms_path
    else
      parent_path(session[:parent_id])
    end
  end

end
