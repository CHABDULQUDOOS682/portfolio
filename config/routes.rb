Rails.application.routes.draw do
  devise_for :users
  root "home#index"
  resources :projects
  namespace :admin do
    get "dashboard", to: "dashboard#index"
  end
end
