class CreateParents < ActiveRecord::Migration
  def change
    create_table :parents do |t|
      t.string :last_name
      t.string :first_name
      t.integer :phone_number
      
      t.timestamps null: false
    end
  end
end
