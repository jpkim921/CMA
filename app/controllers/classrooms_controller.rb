class ClassroomsController < ApplicationController
  def index
    @classrooms = Classroom.all
  end
  
  def show
    @classroom = Classroom.find(params[:id])
  end
  
    
end
