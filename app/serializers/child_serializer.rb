class ChildSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :dob, :allergy, :parent_id, :classroom_id
  belongs_to :parent
  embed :parent, include: true
  # has_one :parent
  belongs_to :classroom
end
