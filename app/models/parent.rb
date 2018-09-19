class Parent < ActiveRecord::Base
  has_many :children
  has_many :classroom, through: :children

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
#   validates :phone_number, uniqueness: true
  validates :email, uniqueness: true

  def name
    "#{self.first_name} #{self.last_name}"
  end

end
