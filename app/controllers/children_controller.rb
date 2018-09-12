class ChildrenController < ApplicationController
  before_action :set_child, only: [:show, :edit, :update, :destroy]


  def new
    @child = Child.new
  end

  def create
    @child = Child.create(child_params)
    @parent = Parent.find(session[:parent_id])

    if @child.save
      @parent.children << @child
      @parent.save

      redirect_to parent_path(@parent)
    else
      render :new
    end
  end

  def show
  end

  def destroy
    # binding.pry
    @child.destroy
    redirect_to parent_path(@child.parent)
  end


  private

  def set_child
    @child = Child.find(params[:id])
  end
  
  def child_params
    params.require(:child).permit(:first_name, :last_name, :dob)
  end

end
