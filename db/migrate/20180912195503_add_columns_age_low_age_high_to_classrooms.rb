class AddColumnsAgeLowAgeHighToClassrooms < ActiveRecord::Migration
  def change
    add_column :classrooms, :age_low, :integer
    add_column :classrooms, :age_high, :integer
  end
end
