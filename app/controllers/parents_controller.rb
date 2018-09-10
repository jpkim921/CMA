class ParentsController < ApplicationController
  before_action :set_parent, only: [:show, :edit, :update, :destroy]

  def index
    @parents = Parent.all
  end

  def show
    # @parent = Parent.find(params[:id])
  end

  def new
    @parent = Parent.new
  end

  def create
    @parent = Parent.create(parent_params)

    if @parent.save
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

  # def destroy
  #   @parent.destroy
  #   redirect_to parents_path
  # end


  private
  def set_parent
    @parent = Parent.find(params[:id])
  end

  def parent_params
    params.require(:parent).permit(:first_name, :last_name, :phone_number)
  end
end
