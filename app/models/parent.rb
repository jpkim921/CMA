class Parent < ActiveRecord::Base
  has_many :children
  has_many :classroom, through: :children

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  # validates :phone_number, uniqueness: true


  validate :phone_number_check

  def phone_number_check
    if phone_number == ""
      errors.add(:phone_number, "Need to enter phone number.")
    end
  end


  def name
    `#{self.first_name} #{self.last_name}`
  end

  def self.order_by_last_name
    self.order(:last_name)[1..-1]
  end

end
