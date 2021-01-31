class Animal < ApplicationRecord
    has_many :daily_updates, :dependent => :delete_all
end
