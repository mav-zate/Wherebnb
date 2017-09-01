class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.get_by(bnb_id)

    render :index
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
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
