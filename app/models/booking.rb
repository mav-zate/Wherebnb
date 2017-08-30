class Booking < ApplicationRecord
  validates :booker, :bnb, :start_date, :end_date, presence: true
  validates :start_must_come_before_end
  validates :no_booking_overlap

  belongs_to :booker,
    class_name: :User,
    foreign_key: :booker_id,
    primary_key: :id

  belongs_to :bnb,
    class_name: :Bnb,
    foreign_key: :bnb_id,
    primary_key: :id

  private

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << 'must come before end date'
    errors[:end] << 'must come after start date'
  end

  def no_booking_overlap
    unless overlapping_bookings.empty?
      errors[:base] << 'Booking conflicts with prior booking'
    end
  end

  def overlapping_bookings
    self
      .where.not(id: self.id)
      .where(bnb_id: bnb_id)
      .where.not('start_date >= :end_date OR end_date =< :start_date',
                 start_date: start_date, end_date: end_date)
  end

end
