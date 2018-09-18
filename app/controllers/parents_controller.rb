class ParentsController < ApplicationController
  before_action :check_if_admin, only: [:index]
  before_action :set_parent, only: [:show, :edit, :update, :destroy]
  before_action :check_for_login, only: [:show]

  def index
#     @parents = Parent.all
    @parents = Parent.where(admin: false)
  end

#   def show
#     # @parent = Parent.find(params[:id])
#     # binding.pry
#     if session[:parent_id] != @parent.id
#       flash[:notice] = "Please login to view your account."
#       redirect_to login_path
#     end
#   end

  def show
    # @parent = Parent.find(params[:id])
    # binding.pry
    if session[:parent_id] == @parent.id || session[:admin]
      render :show
    else
      flash[:notice] = "Please verify to view account."
      redirect_to login_path
    end
  end

  def new
    @parent = Parent.new
  end

  def create
    @parent = Parent.create(parent_params)

    if @parent.save
      session[:parent_id] = @parent.id
      redirect_to parent_path(@parent)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @parent.update(parent_params)
      redirect_to parent_path(@parent)
    else
      render :edit
    end
  end

  def destroy
    @parent.destroy
    redirect_to root_path
  end


  private
  def set_parent
    @parent = Parent.find(params[:id])
  end

  def parent_params
    params.require(:parent).permit(:first_name, :last_name, :phone_number, :password)
  end


end
