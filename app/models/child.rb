class Child < ActiveRecord::Base
  belongs_to :parent
  belongs_to :classroom

  validates :first_name, presence: true
  validates :last_name, presence: true
  
  
  
  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end
  
end
