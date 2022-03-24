Rails.application.routes.draw do
  resources :posts
  resources :thread_rs, only: []
  resources :comments, only: []
  resources :forums, only: []
  resources :users, only: []
  
end
