Rails.application.routes.draw do
    resources :posts
    resources :comments
    resources :forums, only: []
    resources :users, only: []
    
    get "/sessions", to: "sessions#index"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    # delete "/logout" to: "sessions#destroy"
end

  
  