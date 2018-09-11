class SessionsController < ApplicationController

  def new
    @parent = Parent.new
  end

  def create
    if params[:phone_number].present? && params[:password].present?
      found_parent = Parent.where(phone_number: params[:phone_number]).first
      if found_parent
        authorized_parent = found_parent.authenticate(params[:password])
      end
    end

    if authorized_parent #will be nil or true or false
      session[:parent_id] = authorized_parent.id
      flash[:notice] = "Logged in."

      redirect_to parent_path(authorized_parent)
    else
      flash.now[:notice] = "Invalid login."
      render 'new'
    end

  end

  def destroy
    if session[:parent_id]
      session.delete(:parent_id)
    else
      session[:parent_id] = nil
    end
    
    redirect_to root_path
  end


end
