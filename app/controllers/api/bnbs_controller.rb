class Api::BnbsController < ApplicationController
  def index
    @bnbs = bounds ? Bnb.in_bounds(params[:bounds]) : Bnb.all
    render :index
  end

  def show
    @bnb = Bnb.find(params[:id])
    render :show
  end


  private

  def bounds
    params[:bounds]
  end
end
