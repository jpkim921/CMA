class ParentsController < ApplicationController
  def index
    @parents = Parent.all
  end
end
