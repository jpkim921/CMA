class ClassroomsController < ApplicationController
  before_action :check_if_admin, only: [:index, :new, :edit, :update, :destroy]
  before_action :set_classroom, only: [:show, :edit, :update, :destroy]

  def index
    @classrooms = Classroom.all
  end

  def index
    if !params[:date].blank?
      if params[:date] == "< 5"
        @classrooms = Classroom.less_than_five
        render json: @classrooms
      elsif params[:date] == "< 10"
        @classrooms = Classroom.less_than_ten
        render json: @classrooms
      end
    else
      # if no filters are applied, show all classrooms
      @classrooms = Classroom.all
      render json: @classrooms
    end
  end

  def show
    @classroom = Classroom.find(params[:id])
    render json: @classroom
  end

  def new
#     binding.pry
    @classroom = Classroom.new
  end

  def create
    @classroom = Classroom.create(classroom_params)

    if @classroom.save
      redirect_to classrooms_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @classroom.update(classroom_params)
      redirect_to classrooms_path
    else
      render :edit
    end
  end

  def destroy
    @classroom.destroy
    redirect_to classrooms_path
  end


  private

  def set_classroom
    @classroom = Classroom.find(params[:id])
  end

  def classroom_params
    params.require(:classroom).permit(:name, :teacher_name, :age_low, :age_high)
  end


end
