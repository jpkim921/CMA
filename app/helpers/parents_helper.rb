module ParentsHelper

  def phone_number(parent)
    area_code = parent.phone_number[0..2]
    first_three = parent.phone_number[3..5]
    last_four = parent.phone_number[6..-1]
    "(#{area_code}) #{first_three} - #{last_four}"
  end
end
