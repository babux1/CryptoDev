class Forum < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts
    # has_many :comments, through: :posts
end
