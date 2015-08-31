class Sale < ActiveRecord::Base

  def involves_the_best_beverage_ever?
    "YES"
  end


  validates :name, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :quantity, presence: true
end
