Rails.application.routes.draw do
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :books
  resources :tasks, only: :index
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
