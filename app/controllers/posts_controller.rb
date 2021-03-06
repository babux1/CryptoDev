class PostsController < ApplicationController
    skip_before_action :authorize, only: [:postpreviews, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    
        def index 
            posts = Post.all 
            render json: posts
        end
    
    
        def show 
            post = Post.find(params[:id])
            render json: post, serializer: ShowPostCommentsUsersSerializer
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
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
            post = Post.find(params[:id])
            post.update(params_update)
            render json: post
        end

        def search
            # debugger
            posts = Post.all
            filtered = posts.filter do |post| 
                post.content.downcase.include?(params[:search].downcase) ||
                post.title.downcase.include?(params[:search].downcase) ||
                post.comments.include?(params[:search])
            end
            render json: filtered
        end
    
        # custom, non RESTfull routes
        def postpreviews
            posts = []
            Post.all.order(created_at: :desc).each do |post| 
               posts << { "title" => post.title, "content" => post.content, "poster" => post.user.username, "date" => post.created_at, "id" => post.id, "comments" => post.comments.count, "avatar_url" => post.user.avatar_url }
            end 
            render json: posts
        end

        private 
        
        def render_not_found
            render json: { error: "Post not found" }, status: :not_found
        end
        
        def render_invalid(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
    
        def post_params 
            params.permit(:title, :content, :user_id, :forum_id)
        end
        
        def params_update
            params.permit(:title)
        end
    
    
    end