class CreateForums < ActiveRecord::Migration[7.0]
  def change
    create_table :forums do |t|
      t.string :title
      t.string :comments

      t.timestamps
    end
  end
end
