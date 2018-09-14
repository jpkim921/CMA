Rails.application.routes.draw do

  root 'application#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'

  resources :parents
  delete '/parents/:id', to: 'parents#destroy', as:'delete_parent'

  resources :children
  delete '/children/:id', to: 'children#destroy', as:'delete_child'
  
  resources :classrooms
  delete '/classrooms/:id', to: 'classrooms#destroy', as:'delete_classroom'
  
#   resources :admin do
#     resources :parents
#     resources :children
#     resources :classrooms
#   end

  resources :admin, only: [:index]
  get '/admin/classrooms', to: 'classrooms#index', as: 'admin_classrooms'
  get '/admin/parents', to: 'parents#index', as: 'admin_parents'
  get '/admin/children', to: 'children#index', as: 'admin_children'
  
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
