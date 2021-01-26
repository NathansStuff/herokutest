class Animal < ApplicationRecord
    has_many :daily_updates

    after_create :slugify

    def slugify
        self.slug = id
    end
end
