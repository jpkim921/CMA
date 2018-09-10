class Classroom < ActiveRecord::Base
  has_many :children
  has_many :parents, through: :children
end
