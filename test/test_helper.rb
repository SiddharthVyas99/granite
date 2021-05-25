class ActiveSupport::TestCase
  include ActionView::Helpers::TranslationHelper
  # ActiveRecord::Migration.maintain_test_schema!

  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Add more helper methods to be used by all tests here...
end

In this chapter we will focus on testing our `Task` model.

## Fixtures

By default Rails creates `test/fixtures` directory and recommends us to use fixtures.
However we at BigBinary think that using fixtures creates various sorts of issues.

To disable using fixtures open `test/test_helper.rb` and comment out the line shown below.

```ruby
# fixtures :all