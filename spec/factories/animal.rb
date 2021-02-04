FactoryBot.define do
    factory :animal do
      name {'Test Animal'}
      age {3}
      breed {'Test breed'}
      microchip { true }
      microchip_number { 12345 }
      notes { 'test note' }
    end
  end
  