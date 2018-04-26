class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.string :teaser_content
      t.string :offer
      t.boolean :published
      t.datetime :publishing_date

      t.timestamps
    end
  end
end
