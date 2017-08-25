class Review < ApplicationRecord
  validates :bnb, :author, :body, :accuracy, :communication, presence: true
  validates :cleanliness, :location, :check_in, :value, :rating, presence: true
  validates :accuracy, :communication, :cleanliness, inclusion: 1..5
  validates :location, :check_in, :value, inclusion: 1..5

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :bnb,
    class_name: :Bnb,
    foreign_key: :bnb_id,
    primary_key: :id

end
