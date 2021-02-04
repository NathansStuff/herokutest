# require 'rails_helper'
# # require "test_helper"


# RSpec.describe DailyUpdate, type: :model do
#   it { should belong_to(:animal).without_validating_presence }
  
#   it {should belong_to(:animal) }
  
#   it {should validate_presence_of(:animal_id) }

#   animal = Animal.create(:name => 'test', :age => 5, microchip: false)

#   dailyUpdate = DailyUpdate.create(:animal_id => animal.id, weight: 500, ate_food: true, drank_water: true)

#     # context 'validations' do
#     # it 'is valid with valid attributes' do
#     #   expect(dailyUpdate).to be_valid
#     # end

#   # end
#   # subject { 
#   #   described_class.new(
#   #     animal_id: 1,
#   #     weight: 500,
#   #     ate_food: true,
#   #     drank_water: true,
#   #   )
#   #  }


#   #   subject { described_class.new(
#   #   # id: 1,
#   #   weight: 500,
#   #   drank_water: true,
#   #   ate_food: true,
#   #   notes: 'new daily update note!' # not required
#   # )}
#   #   end
#     # it 
#   # context 'validations' do
#   #   it 'is valid with valid attributes' do
#   #     expect(subject).to be_valid
#   #   end

# #     # it 'is not valid without an animal_id it belongs to' do
# #     #   subject.animal_id = nil
# #     #   expect(subject).to_not be_valid
# #     # end

# #     # it 'is not valid without a weight' do
# #     #     subject.weight = nil
# #     #     expect(subject).to_not be_valid
# #     # end
    
# #     # it 'is not valid without a drinking_water value' do
# #     #     subject.drank_water = nil
# #     #     expect(subject).to_not be_valid
# #     # end

# #     # it 'is not valid without a eating_food value' do
# #     #     subject.ate_food = nil
# #     #     expect(subject).to_not be_valid
# #     # end

  
# end
