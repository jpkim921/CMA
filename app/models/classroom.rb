class Classroom < ActiveRecord::Base
  has_many :children
  has_many :parents, through: :children
  
  validates :name, presence: true
  validates :teacher_name, presence: true
  validates :age_low, presence: true
  validates :age_high, presence: true
  
  
  def age_range
    (self.age_low..self.age_high)
  end
  
  def class_size
    self.children.count
  end
  
end
