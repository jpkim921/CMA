class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher_name, :age_low, :age_high
  has_many :children
  has_many :parents, through: :children
end
