class AddUserToRecyclePoints < ActiveRecord::Migration[6.0]
  def change
    add_reference :recycle_points, :user, index: true
    add_foreign_key :recycle_points, :users
  end
end
