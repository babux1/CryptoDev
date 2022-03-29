class ShowPostCommentsUsersSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :comments, :users
  
  
end
