class ChangePhoneNumberColumnInParents < ActiveRecord::Migration
  def change
    change_column :parents, :phone_number, :string
  end
end
