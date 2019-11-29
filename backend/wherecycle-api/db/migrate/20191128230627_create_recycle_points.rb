class CreateRecyclePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :recycle_points do |t|
      t.string :location
      t.string :type
      t.integer :is_missing_report
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
