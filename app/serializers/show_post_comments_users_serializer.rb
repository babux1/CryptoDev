class ShowPostCommentsUsersSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :comments, :users
  # has_many :comments
  # has_many :users, through: :comments
end
