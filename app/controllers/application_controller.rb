class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def home
  end



  private

  def check_for_login
    unless session[:parent_id]
      flash[:notice] = "Need to log in"
      redirect_to login_path
    end
  end
  
  def check_if_admin
    unless session[:admin]
      flash[:notice] = "Need admin access"
    end
  end
  


end
