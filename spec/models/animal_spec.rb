require 'rails_helper'

RSpec.describe Animal, type: :model do
  subject { FactoryBot.build(:animal) }
  
  context 'validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end

    it 'is not valid without a name' do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it 'is not valid without an age' do
        subject.age = nil
        expect(subject).to_not be_valid
    end

    it 'is not valid with an negative age' do
      subject.age = -1
      expect(subject).to_not be_valid
  end
    
    it 'is not valid without a breed' do
        subject.breed = nil
        expect(subject).to_not be_valid
    end

  end

end
