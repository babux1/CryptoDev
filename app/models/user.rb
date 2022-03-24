class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true
    validates :password, presence: true, length: { minimum: 8 }

    has_many :comments
    has_many :posts
    # has_many :forums, through: :posts
end
