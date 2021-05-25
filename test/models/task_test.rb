require "test_helper"

class TaskTest < ActiveSupport::TestCase
  def test_instance_of_task
    task = Task.new
    assert_instance_of User, task
  end
end
