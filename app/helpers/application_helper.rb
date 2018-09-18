module ApplicationHelper
  def error_messages(object)
    render(:partial => 'application/errors', :locals => {:object => object})
  end
  
  def name(person)
    person.first_name + " " + person.last_name
  end
end
