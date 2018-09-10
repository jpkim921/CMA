module ParentsHelper

  def phone_number(parent)
    phone_number = parent.phone_number.gsub!('-','')

    area_code = phone_number[0..2]
    first_three = phone_number[3..5]
    last_four = phone_number[6..-1]
    
    "(#{area_code}) #{first_three} - #{last_four}"
  end
end
