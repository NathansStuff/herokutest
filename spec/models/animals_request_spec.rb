require 'rails_helper'

RSpec.describe "Animals", type: :request do
    describe 'GET animals#index' do
      before(:example) do
        @first_animal = FactoryBot.create(:animal)
        @last_animal = FactoryBot.create(:animal)
        get api_v1_animals_path
        @json_response = JSON.parse(response.body)
      end
  
      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end
  
    #   it 'JSON response contains the correct number of entries - WILL RETURN 7 IF DB SEEDED' do
    #     expect(@json_response['data'].count).to eq(2)  # Two created by factory daily_updates for models/daily_updates_request_spec.rb
    #   end
  
    #   it 'JSON response body contains expected attributes' do
    #     expect(@json_response['data'][0]).to include({
    #       'id' => @first_task.id,
    #       'name' => @first_task.name,
    #       'age' => @first_task.age,
    #     }) 
    #   end
    end
  end
  