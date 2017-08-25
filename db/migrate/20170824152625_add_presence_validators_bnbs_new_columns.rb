class AddPresenceValidatorsBnbsNewColumns < ActiveRecord::Migration[5.0]
  def change
    change_column_null :bnbs, :rating, false
    change_column_null :bnbs, :bed_count, false
    change_column_null :bnbs, :room_type, false
    change_column_null :bnbs, :home_type, false
  end
end
