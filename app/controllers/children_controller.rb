class ChildrenController < ApplicationController
  def new
    @child = Child.new
  end
  
  def create
    @child = Child.create(child_params)
    @parent = Parent.find(session[:parent_id])
    
#     binding.pry
    
    if @child.save
      @parent.children << @child
      @parent.save
      
      redirect_to parent_path(@parent)
    else
      render :new
    end
  end
  
  def show
    @child = Child.find(params[:id])
  end
  
  
  private
  def child_params
    params.require(:child).permit(:first_name, :last_name, :dob)
  end
  
end
