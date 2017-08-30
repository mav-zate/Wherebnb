class BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    return if @booking.save

    render json: @booking.errors.full_messages, status: 422
  end

  def booking_params
    params
      .require(:booking)
      .permit(:start_date, :end_date, :booker_id, :bnb_id)
  end
end
