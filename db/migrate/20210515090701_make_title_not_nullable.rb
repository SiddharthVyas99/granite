class MakeTitleNotNullable < ActiveRecord::Migration[6.0]
  # def up
  #   add_column :tasks, :title, :text
  #   change_column_null :tasks, :title, false
  # end

  def change
    change_column_null :tasks, :title, false
  end

  # def down
  #   remove_column :tasks, :title
  # end
end
