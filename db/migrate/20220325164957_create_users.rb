class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.string :password_digest
      t.string :btc_address
      t.boolean :admin
      t.string :avatar_url

      t.timestamps
    end
  end
end
