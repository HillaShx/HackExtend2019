class ChangeColumnNameTypeToCategory < ActiveRecord::Migration[6.0]
  def change
    rename_column :recycle_points, :type, :category
  end
end
