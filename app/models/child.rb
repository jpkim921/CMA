class Child < ActiveRecord::Base
  belongs_to :parent
  belongs_to :classroom

  validates :first_name, presence: true
  validates :last_name, presence: true



  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end

  def assign_classroom
    Classroom.all.each do |classroom|
#       the class size is set to 3 for demonstration
      if classroom.class_size < 10 && classroom.age_range.include?(self.age)
        self.classroom = classroom
      end
    end
  end

end
