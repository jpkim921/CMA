class SessionsController < ApplicationController

  def new
    @parent = Parent.new
  end

  def create
    
    if params[:phone_number].present? && params[:password].present?
      parent = Parent.where(phone_number: params[:phone_number]).first
      if parent
        authorized_parent = parent.authenticate(params[:password])
      end
    end
    
    if auth
      @parent = Parent.find_or_create_by(email: auth['info']['email']) do |u|
#         binding.pry
        #         auth['info']['name'].split.first
        u.first_name = auth['info']['name'].split.first
        u.last_name = auth['info']['name'].split.last
        u.password = auth['uid']
#         u.email = auth['info']['email']
        #         u.id = auth['uid']
      end
      
#         render "parents/new"
      authorized_parent = @parent
    binding.pry
    end
    

    if authorized_parent #will be nil or true or false
      session[:parent_id] = authorized_parent.id
      session[:admin] = authorized_parent.admin

      if session[:admin]
        redirect_to admin_index_path
      else
#         binding.pry
        flash[:notice] = "Logged in."
#         render 'parents/show'
        redirect_to parent_path(authorized_parent)
      end

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
  
  
  private
    
    def auth
      request.env['omniauth.auth']
    end


end
