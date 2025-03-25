Rails.application.routes.draw do
  devise_for :users
  root "home#index"
  resources :projects
  get "project_detail/:id", to: "home#project_detail", as: "project_detail"
  namespace :admin do
    get "dashboard", to: "dashboard#index"
  end
  post "/send_email", to: "home#send_email"

end
