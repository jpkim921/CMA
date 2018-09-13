class ClassroomsController < ApplicationController
  before_action :set_classroom, only: [:show, :edit, :update, :destroy]
  
  def index
    @classrooms = Classroom.all
  end
  
  def show
    @classroom = Classroom.find(params[:id])
  end
  
  def new
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
  end
  
  
  private
  
  def set_classroom
    @classroom = Classroom.find(params[:id])
  end
  
  def classroom_params
    params.require(:classroom).permit(:name, :teacher_name, :age_low, :age_high)
  end
  
  
end
