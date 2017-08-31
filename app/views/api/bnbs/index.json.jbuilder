@bnbs.each do |bnb|
  json.set! bnb.id do
    json.extract! bnb, :id, :title, :lat, :lng, :price,
                  :home_type, :room_type, :bed_count, :rating,
                  :reviews, :host
    json.image_url asset_path(bnb.image.url)
  end
end
