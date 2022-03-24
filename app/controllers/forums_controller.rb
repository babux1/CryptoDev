class ForumsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    def index 
        forums = Forum.all
        render json: forums
    end

    def show 
        forum = Forum.find_by!(id:params[:id])
        render json: forum
    end

    def create 
        forum = Forum.create(title: params[:title], comments: params[:comments])
        render json: forum, status: :created
    end

    private

    def render_not_found
        render json: {error: "Forum not found"}, status: :not_found
    end
end
