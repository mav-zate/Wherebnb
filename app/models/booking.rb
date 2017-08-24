class Booking < ApplicationRecord
  validates :booker_id, :bnb_id, :start_date, :end_date, presence: true

end
