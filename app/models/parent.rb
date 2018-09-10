class Parent < ActiveRecord::Base
  has_many :children
  has_many :classroom, through: :children
end
