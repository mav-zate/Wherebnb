class Bnb < ApplicationRecord
  validates :title, :host, :lat, :lng, presence: true
  validates :accomodation_count, :price, :security_deposit, presence: true
  validates :cleaning_fee, :weekly_discount, :monthly_discount, presence: true
  validates :wifi, :internet, :kitchen, :parking, :essentials, inclusion: { in: [true, false] }
  validates :pets_allowed, :smoking_allowed, inclusion: { in: [true, false] }

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id,
    primary_key: :id

  has_many :bookings,
    class_name: :Booking,
    foreign_key: :bnb_id,
    primary_key: :id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :bnb_id,
    primary_key: :id

  has_many :guests,
    through: :bookings,
    source: :booker
end
