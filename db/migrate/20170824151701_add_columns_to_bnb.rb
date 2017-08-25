class AddColumnsToBnb < ActiveRecord::Migration[5.0]
  def change
    add_column :bnbs, :rating, :integer
    add_column :bnbs, :bed_count, :integer
    add_column :bnbs, :room_type, :string
    add_column :bnbs, :home_type, :string
  end
end
