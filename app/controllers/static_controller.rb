

class StaticController < ApplicationController
  def home
    @sales = Sale.all
    @sale = Sale.new
    @lim = Sale.last(9)
  end

  def terms
  end

end
