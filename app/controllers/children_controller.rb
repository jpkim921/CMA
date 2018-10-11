class ChildrenController < ApplicationController
  before_action :check_if_admin, only: [:index]
  before_action :set_child, only: [:show, :edit, :update, :destroy]

  def index
    @children = Child.all
  end


  def new
    # @child = Child.new
    @parent = Parent.find(session[:parent_id])
    @child = Child.new(parent_id: params[:parent_id])
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

    @parent = Parent.find(params[:child][:parent_id])
    @child = @parent.children.build(child_params)
    # binding.pry
    @child.assign_classroom

    if @child.save
      redirect_to parent_path(@parent)
    else
      render :new
    end
  end

  def show
    if session[:parent_id] == @child.parent.id || session[:admin]
      render :show
    else
      # flash[:notice] = "Not your child."
      # redirect_to child_path(@child)
      redirect_to parent_path(@child.parent)
      # render '/parents/show'
    end
  end

  def edit
    @parent = Parent.find(session[:parent_id])
  end

  def update

    if @child.update(child_params)
      @child.assign_classroom
      @child.save

      if session[:admin]
        redirect_to children_path
      else
        redirect_to parent_path(@child.parent)
      end
    else
      render :edit
    end
  end

  def destroy
    # binding.pry
    @child.destroy
    redirect_to parent_path(@child.parent)
  end

  def allergy
    @children = Child.children_with_allegies
    render :allergy
  end


  private

  def set_child
    @child = Child.find(params[:id])
  end

  def child_params
    params.require(:child).permit(:first_name, :last_name, :dob, :parent_id, :allergy)
  end


end
