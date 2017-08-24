class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :bnb_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.integer :accuracy, null: false
      t.integer :communication, null: false
      t.integer :cleanliness, null: false
      t.integer :location, null: false
      t.integer :check_in, null: false
      t.integer :value, null: false

      t.timestamps
    end
  end
end
