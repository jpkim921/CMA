class ParentSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :phone_number, :admin, :email
  has_many :children
  has_many :classroom, through: :children
end
