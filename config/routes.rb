Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/sessions", to: "sessions#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout" to: "sessions#destroy"

end
