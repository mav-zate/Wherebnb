class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: { success: 'You succesfully made a post!' }
    else
      render @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require(:review).permit(:bnb_id, :author_id, :body, :accuracy,
                                   :cleanliness, :location, :check_in,
                                   :value, :rating)
  end
end
