class Bnb < ApplicationRecord
  validates :title, :host_id, :lat, :lng, presence: true
  validates :accomodation_count, :price, :security_deposit, presence: true
  validates :cleaning_fee, :weekly_discount, :monthly_discount, presence: true
  validates :wifi, :internet, :kitchen, :parking, :essentials, presence: true
  validates :pets_allowed, :smoking_allowed, presence: true

end
