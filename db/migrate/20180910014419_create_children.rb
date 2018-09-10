class CreateChildren < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :last_name
      t.string :first_name
      t.datetime :dob
      t.integer :parent_id
      t.integer :classroom_id

      t.timestamps null: false
    end
  end
end
