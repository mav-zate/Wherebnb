class Api::BnbsController < ApplicationController
  def index
    bnbs = Bnb.in_bounds(params[:bounds])
    @bnbs = handle_filters(bnbs)

    render :index
  end

  def show
    @bnb = Bnb.find(params[:id])
    render :show
  end


  private

  def price_range
    (params[:priceRange][:minPrice]..params[:priceRange][:maxPrice])
  end

  def handle_filters(bnbs)
    bnbs = price_filter(bnbs)
    bnbs = room_filter(bnbs)

    bnbs
  end

  def price_filter(bnbs)
    bnbs.where(price: price_range)
  end

  def room_filter(bnbs)
    room_types = []

    if params[:roomType][:entireHome] == 'true'
      room_types.push('entire_home')
    end
    if params[:roomType][:privateRoom] == 'true'
      room_types.push('private_room')
    end
    if params[:roomType][:sharedRoom] == 'true'
      room_types.push('shared_room')
    end

    bnbs.where(room_type: room_types)
  end
end
