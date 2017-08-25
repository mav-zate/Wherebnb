class Api::BnbsController < ApplicationController
  def index
    @bnbs = Bnb.all
    render 'api/bnbs/index'
  end

  def show
  end
end
