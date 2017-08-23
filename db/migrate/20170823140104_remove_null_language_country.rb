class RemoveNullLanguageCountry < ActiveRecord::Migration[5.0]
  def change
    change_column_null :users, :language, true
    change_column_null :users, :country, true
  end
end
