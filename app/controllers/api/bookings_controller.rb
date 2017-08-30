class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: {success: 'Your booking was made succesfully'}
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def booking_params
    params
      .require(:booking)
      .permit(:start_date, :end_date, :booker_id, :bnb_id)
  end
end
