class Api::BnbsController < ApplicationController
  def index
    @bnbs = bounds ? Bnb.in_bounds(params[:bounds]) : Bnb.all

    if params[:priceRange][:min] && params[:priceRange][:max]
      @bnbs = @bnbs.where(price: price_range)
    end

    render :index
  end

  def show
    @bnb = Bnb.find(params[:id])
    render :show
  end


  private

  def price_range
    (params[:priceRange][:min]..params[:priceRange][:max])
  end

  def bounds
    params[:bounds]
  end
end
