  FactoryBot.define do
    factory :invalid_animal do
      age {3}
      breed {'Test breed'}
      microchip {false}
      microchip_number {123}
      notes {'Test note'}
  end
  end
  