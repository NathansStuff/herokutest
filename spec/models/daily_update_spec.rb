require 'rails_helper'

RSpec.describe DailyUpdate, type: :model do
  subject { described_class.new(
    animal_id: 1,
    weight: 500,
    drank_water: true,
    ate_food: true,
    notes: 'new daily update note!' # not required
  )}

end

  context 'validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end

    # it 'is not valid without an animal_id it belongs to' do
    #   subject.animal_id = nil
    #   expect(subject).to_not be_valid
    # end

    # it 'is not valid without a weight' do
    #     subject.weight = nil
    #     expect(subject).to_not be_valid
    # end
    
    # it 'is not valid without a drinking_water value' do
    #     subject.drank_water = nil
    #     expect(subject).to_not be_valid
    # end

    # it 'is not valid without a eating_food value' do
    #     subject.ate_food = nil
    #     expect(subject).to_not be_valid
    # end

  
end
