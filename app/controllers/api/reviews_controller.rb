class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.get_by(review_params[:bnb_id])
    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require(:review).permit(:bnb_id, :author_id, :body, :accuracy,
                                   :cleanliness, :location, :check_in,
                                   :value, :rating, :communication)
  end
end
