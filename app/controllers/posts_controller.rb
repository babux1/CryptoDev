class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid


    def index 
        posts = Post.all 
        render json: posts
    end


    def show 
        post = Post.find(params[:id])
        render json: post
    end


    def create 
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy 
        post = Post.find(params[:id])
        post.destroy 
        head :no_content
    end

    def update 
        post = Post.find(params[:id])
        post.update(params_update)
        render json: post
    end





    private 
    def render_not_found
        render json: { error: "Post not found" }, status: :not_found
    end
    
    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end


    def post_params 
        params.permit(:title, :forum_id, :user_id)
    end
    def params_update
        params.permit(:title)
    end


end
