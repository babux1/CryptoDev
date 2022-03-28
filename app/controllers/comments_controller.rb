class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :destroy_invalid
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    
        def index
            comments = Comment.all
            render json: comments
        end
    
        def show
            comment = Comment.find(params[:id])
            render json: comment
        end
    
        def create
            comment = Comment.create!(params_create)
            render json: comment
        end
    
        # add validation
    
    
        def destroy
            comment = Comment.find(params{:id})
            comment.destroy
            head :no_content
        end
    
    
        def update
            comment = Comment.find(params[:id])
            comment.update(params_create)
            render json: comment
        end
    
    
    
        private
    
        def params_create
            params.permit(:content)
        end
    
        def destroy_invalid
            render json: {error: "Comment not found"}, status: :not_found
        end
    
        def render_not_found
            render json: {errors: "comment not found"}, status: :not_found
        end
    
        def render_invalid(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
    
    end