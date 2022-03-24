Rails.application.routes.draw do
  resources :posts
  resources :thread_rs, only: []
  resources :comments, only: []
  resources :forums, only: []
  resources :users, only: [:show, :create, :update]
end
