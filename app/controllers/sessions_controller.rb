class SessionsController < ApplicationController
   
    def index
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
        render json: { session: session, cookies: cookies.to_hash }
    end

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id 
        render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end