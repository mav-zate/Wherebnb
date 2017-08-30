class Booking < ApplicationRecord
  validates :booker, :bnb, :start_date, :end_date, presence: true

  belongs_to :booker,
    class_name: :User,
    foreign_key: :booker_id,
    primary_key: :id

  belongs_to :bnb,
    class_name: :Bnb,
    foreign_key: :bnb_id,
    primary_key: :id

  def make_booking()
  end
end
