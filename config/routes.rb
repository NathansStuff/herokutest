Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
  resources :registraions, only: [:create]
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :animals, param: :id
      resources :daily_updates, only: [:create, :destroy]
    end
  end

  get '*path', to: 'home#index', via: :all
end
