class ChildrenController < ApplicationController
  before_action :set_child, only: [:show, :edit, :update, :destroy]



  def new
    @child = Child.new
    @parent = Parent.find(session[:parent_id])
  end

  # def create
  #   @child = Child.create(child_params)
  #   @parent = Parent.find(session[:parent_id])
  #
  #   if @child.save
  #     @parent.children << @child
  #     @parent.save
  #
  #     redirect_to parent_path(@parent)
  #   else
  #     render :new
  #   end
  # end


  def create
    @parent = Parent.find(session[:parent_id])
    @child = @parent.children.build(child_params)
#     binding.pry
    @child.assign_classroom

    if @child.save      
      redirect_to parent_path(@parent)
    else
      render :new
    end
  end

  def show
  end

  def edit
    @parent = Parent.find(session[:parent_id])
  end

  def update
        
    if @child.update(child_params)
      @child.assign_classroom
      @child.save
      redirect_to parent_path(@child.parent)
    else
      render :edit
    end
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
