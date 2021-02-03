require 'rails_helper'

RSpec.describe Animal, type: :model do
  subject { described_class.new(
    name: 'Test Animal',
    age: 5,
    breed: 'tiger',
    microchip: false,           # not required
    microchip_number: '',       # not required
    notes: 'will eat you'       # not required
  )}
  
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
    
    it 'is not valid without a breed' do
        subject.breed = nil
        expect(subject).to_not be_valid
    end

  end
end
