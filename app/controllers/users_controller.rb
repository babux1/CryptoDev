class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    def show
        user = User.find_by!(id: session[:user_id])
        render json: user 
    end

    private

    def render_record_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
