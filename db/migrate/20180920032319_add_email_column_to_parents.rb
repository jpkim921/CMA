class AddEmailColumnToParents < ActiveRecord::Migration
  def change
    add_column :parents, :email, :string
  end
end
