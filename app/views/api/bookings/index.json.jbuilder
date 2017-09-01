@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :booker_id, :bnb_id,
                  :start_date, :end_date
  end
end
