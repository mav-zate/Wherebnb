class Api::BnbsController < ApplicationController
  def index
    @bnbs = bounds ? Bnb.in_bounds(params[:bounds]) : Bnb.all
    render 'api/bnbs/index'
  end

  def show
  end


  private

  def bounds
    params[:bounds]
  end
end
