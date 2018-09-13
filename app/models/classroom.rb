class Classroom < ActiveRecord::Base
  has_many :children
  has_many :parents, through: :children
  
  
  
  def age_range
    [self.age_low..self.age_high]
  end
  
  
end
