module ChildrenHelper

  def display_dob(dob)
    dob.strftime("%B %e, %Y")
  end

end
