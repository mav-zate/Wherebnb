class CreateBnbs < ActiveRecord::Migration[5.0]
  def change
    create_table :bnbs do |t|
      t.string :title, null: false
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :general_description
      t.text :space_description
      t.text :side_notes
      t.integer :accomodation_count, null: false
      t.decimal :price, null: false
      t.decimal :security_deposit, null: false
      t.decimal :cleaning_fee, null: false
      t.decimal :weekly_discount, null: false
      t.decimal :monthly_discount, null: false
      t.boolean :wifi, null: false
      t.boolean :internet, null: false
      t.boolean :kitchen, null: false
      t.boolean :parking, null: false
      t.boolean :essentials, null: false
      t.boolean :pets_allowed, null: false
      t.boolean :smoking_allowed, null: false

      t.timestamps
    end
  end
end
