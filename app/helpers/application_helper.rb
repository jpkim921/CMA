module ApplicationHelper
  def name(parent_or_child)
    parent_or_child.first_name + " " + parent_or_child.last_name
  end
end
