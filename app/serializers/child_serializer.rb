class ChildSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :dob, :allergy
  belongs_to :parent
  belongs_to :classroom
end
