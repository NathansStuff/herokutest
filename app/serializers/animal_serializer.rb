class AnimalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :breed, :microchip, :microchip_number, :notes

  has_many :daily_updates
end
