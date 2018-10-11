class AddAllergyColumnToChildren < ActiveRecord::Migration
  def change
    add_column :children, :allergy, :boolean
  end
end
