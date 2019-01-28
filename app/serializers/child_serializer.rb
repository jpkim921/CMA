class ChildSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :dob, :allergy, :parent_id, :classroom_id, :parent
  belongs_to :parent
  belongs_to :classroom
end
