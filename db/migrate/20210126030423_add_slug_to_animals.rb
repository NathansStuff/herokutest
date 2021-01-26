class AddSlugToAnimals < ActiveRecord::Migration[6.0]
  def change
    add_column :animals, :slug, :integer
  end
end
