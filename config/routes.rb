Rails.application.routes.draw do
  resources :forums
  resources :posts, only: [:show, :index, :create, :patch, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :forums, only: [:index, :show, :create]
  resources :users, only: [:show, :create, :update, :destroy]
  
  get "/sessions", to: "sessions#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get '/postpreviews', to: "posts#postpreviews"
  get '/search', to: "posts#search"
  
end