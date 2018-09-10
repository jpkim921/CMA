class Parent < ActiveRecord::Base
  has_many :children
  has_many :classroom, through: :children

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, uniqueness: true



end
