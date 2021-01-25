Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'contact', to: 'contact#index'
  resources :animals
  # get 'animals', to: 'animals#index'
  # get 'animals/:id', to: 'animals#show'
end
