@bnbs.each do |bnb|
  json.set! bnb.id do
    json.extract! bnb, :title, :lat, :lng, :price,
      :home_type, :room_type, :bed_count, :rating
  end
end
