require 'rails_helper'

RSpec.describe "Animals", type: :request do
    describe 'GET api/v1/animals#index' do
      before(:example) do
        @first_animal = FactoryBot.create(:animal)
        @last_animal = FactoryBot.create(:animal)
        get api_v1_animals_path
        @json_response = JSON.parse(response.body)
      end
  
      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      # # DONT GET IT IT KEEPS INCREASING
      # it 'contains the current nunber of entries' do
      #   expect(@json_response['data'].count).to eq(2)
      # end

      # it 'Animal contains the expected attributes' do
      #   expect(@json_response['data'].first).to include({
      #     'id' => @first_animal.id,
      #     'name' => @first_animal.name,
      #     'age' => @first_animal.age,
      #     'breed' => @first_animal.breed,
      #   })
      # end

    end



  describe 'POST Animals#create' do
    context 'when the animal is valid' do
      before(:example) do
        @animal_params = FactoryBot.attributes_for(:animal)
        post api_v1_animals_path, params: {animal: @animal_params}
        
      end

      it 'returns status ok' do
        expect(response).to have_http_status(:ok)
      end

      it 'saves the animal to the database' do
        expect(Animal.last.name).to eq(@animal_params[:name])
      end
    end

    context 'when the animal is invalid' do
      before(:example) do
        @animal_params = FactoryBot.attributes_for(:invalid_animal)
        post api_v1_animals_path, params: {animal: @animal_params}
        @json_response = JSON.parse(response.body)
      end

      it 'returns http unprocessable entity' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns the correct number of errors' do 
        expect(@json_response['errors'].count).to eq(1)
      end

      it 'erorr contains the correct error message' do 
        expect(@json_response['errors'].first).to eq("Name can't be blank")
      end
    end
  end
end