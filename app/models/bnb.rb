class Bnb < ApplicationRecord
  validates :title, :host, :lat, :lng, presence: true
  validates :accomodation_count, :price, :security_deposit, presence: true
  validates :cleaning_fee, :weekly_discount, :monthly_discount, presence: true
  validates :wifi, :internet, :kitchen, :parking, :essentials,
            inclusion: { in: [true, false] }
  validates :rating, inclusion: 1..5
  validates :room_type, inclusion:
            { in: ['entire_home', 'private_room', 'shared_room'] }

  # image validations
  has_attached_file :image, default_url: "airbnb_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

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

  def self.in_bounds(bounds)
    self
      .where(["lat < ?", bounds[:northEast][:lat]])
      .where(["lat > ?", bounds[:southWest][:lat]])
      .where(["lng < ?", bounds[:northEast][:lng]])
      .where(["lng > ?", bounds[:southWest][:lng]])
  end
end
