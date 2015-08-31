require 'test_helper'

class SaleTest < ActiveSupport::TestCase

  setup do
    @sale1 = sales(:one)
  end

  test "whether the salesman knows!!!!!" do
    sale = Sale.new
    assert_equal("YES",sale.involves_the_best_beverage_ever?,"wrong answer")
  end

  test "should not save sale without name/quanity/city/country" do
    sale = Sale.new
    assert_not sale.save, "Saved the sale with missing parameter"
  end

  #test proper data saved

  test "name should save as bob" do
    assert_equal("bob",@sale1.name)
  end

  test "city should save as troy " do
    assert_equal("troy",@sale1.city)
  end

  test "country should save as China" do
    assert_equal("China",@sale1.country)
  end

  test "quantity should be 1" do
    assert_equal(1,@sale1.quantity)
  end


  # test "the truth" do
  #   assert true
  # end
end
