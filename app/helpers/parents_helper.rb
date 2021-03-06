module ParentsHelper

#   def phone_number(parent)

#     phone_number = parent.phone_number.gsub!('-','')

#     if phone_number
#       area_code = phone_number[0..2]
#       first_three = phone_number[3..5]
#       last_four = phone_number[6..-1]

#       "(#{area_code}) #{first_three} - #{last_four}"
#     else
#       "Need PHONE NUMBER!"
#     end
#   end

#   def phone_number(parent)
#
#     if parent.phone_number
#
#       phone_number = parent.phone_number.gsub!('-','')
#
# #       if phone_number
#       area_code = phone_number[0..2]
#       first_three = phone_number[3..5]
#       last_four = phone_number[6..-1]
#
#       "(#{area_code}) #{first_three} - #{last_four}"
#     elsif parent.phone_number == ""
#       "Need PHONE NUMBER!"
#     end
#   end

  def phone_number(parent)
    if parent.phone_number == "" || parent.phone_number == nil
      "Need PHONE NUMBER!"
    else
      phone_number = parent.phone_number.gsub!('-','')

      area_code = phone_number[0..2]
      first_three = phone_number[3..5]
      last_four = phone_number[6..-1]

      "(#{area_code}) #{first_three} - #{last_four}"
    end
  end


end
