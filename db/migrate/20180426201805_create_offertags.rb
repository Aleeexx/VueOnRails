class CreateOffertags < ActiveRecord::Migration[5.1]
  def change
    create_table :offertags do |t|
      t.string :value
      t.integer :order_id

      t.belongs_to :offer
      t.belongs_to :tag

      t.timestamps
    end
  end
end
