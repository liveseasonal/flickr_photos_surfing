class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :description
      t.string :text
      t.string :img
      t.string :string

      t.timestamps null: false
    end
  end
end
