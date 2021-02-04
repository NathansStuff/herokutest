FactoryBot.define do
    factory :animal do
      sequence :name do |n|
        "Animal no #{n}"
      end
      age {3}
      breed {'Test breed'}
      microchip {false}
      microchip_number {123}
      notes {'Test note'}
  end
  end
  