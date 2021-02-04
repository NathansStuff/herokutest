FactoryBot.define do
    animal = FactoryBot.create(:animal)
    factory :daily_update do
      animal_id {animal.id}
      weight {400}
      ate_food {true}
      drank_water {true}
      notes {'test note'}
    end
  end
  