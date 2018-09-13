module ClassroomsHelper
  
  def age_range(classroom)
    "#{classroom.age_low} to #{classroom.age_high} year olds" 
  end
  
end
