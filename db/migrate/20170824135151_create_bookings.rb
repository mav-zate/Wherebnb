class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :booker_id, null: false
      t.integer :bnb_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end

    add_index :bookings, [:bnb_id, :booker_id]
  end
end
