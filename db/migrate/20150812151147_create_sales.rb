class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.string :name
      t.integer :quantity
      t.string :city
      t.string :country

      t.timestamps null: false
    end
  end
end
