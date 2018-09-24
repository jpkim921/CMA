class AdminController < ApplicationController

  def index
    check_if_admin
#     binding.pry
  end

  # def show
  #   redirect_to admin_index_path
  # end

end
