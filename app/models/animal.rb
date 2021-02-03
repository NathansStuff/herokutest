class Animal < ApplicationRecord
    has_many :daily_updates, :dependent => :delete_all
    validates :name, presence: true
    validates :age, presence: true
    validates :breed, presence: true
end
