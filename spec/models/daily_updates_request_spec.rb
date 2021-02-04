require 'rails_helper'

RSpec.describe "DailyUpdates", type: :request do
    describe 'GET animals#index' do
      before(:example) do
        @first_daily_update = FactoryBot.create(:daily_update)
        @last_daily_update = FactoryBot.create(:daily_update)
        get api_v1_animals_path
        @json_response = JSON.parse(response.body)
      end
  
      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end
  
      it 'JSON response contains the correct number of entries' do
        expect(@json_response['included'].count).to eq(2) 
      end
  
    #   it 'JSON response body contains expected attributes' do
    #     expect(@json_response['data'][0]).to include({
    #       'id' => @first_task.id,
    #       'name' => @first_task.name,
    #       'age' => @first_task.age,
    #     }) 
    #   end
    end
  end
  