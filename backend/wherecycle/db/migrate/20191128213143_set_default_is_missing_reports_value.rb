class SetDefaultIsMissingReportsValue < ActiveRecord::Migration[6.0]
  def change
    change_column :recycle_points, :is_missing_report, :integer, default: 0
  end
end
