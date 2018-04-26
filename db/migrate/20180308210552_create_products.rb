class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :teaser
      t.string :infotext
      t.string :images
      t.string :thumbnail

      t.timestamps
    end
  end
end
