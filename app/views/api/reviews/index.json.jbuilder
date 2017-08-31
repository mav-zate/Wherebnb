@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :bnb_id, :author_id, :accuracy, :communication,
                  :cleanliness, :location, :check_in, :value, :body
  end
end
