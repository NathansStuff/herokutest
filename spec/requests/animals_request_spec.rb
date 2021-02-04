require 'rails_helper'

RSpec.describe "Animals", type: :request do
    describe 'GET api/v1/animals#index' do
      before(:each) do
        @first_animal = FactoryBot.create(:animal)
        @last_animal = FactoryBot.create(:animal)
        get api_v1_animals_path
        @json_response = JSON.parse(response.body)
      end
  
      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'contains the current nunber of entries' do
        expect(@json_response['data'].count).to eq(2)
      end

    end

end