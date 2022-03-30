class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

        
        def show
            current_user = User.find(session[:user_id])
            render json: current_user
        end

        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end

        def update
            user = User.update!(user_params)
            render json: user, status: :accepted
        end

        private

        def user_params
            params.permit(:username, :email, :password, :btc_address,  :avatar_url)
        end


        def render_record_not_found
            render json: { error: "User not found" }, status: :not_found
        end

        def render_record_invalid(invalid)
            render json: { "errors": invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    end