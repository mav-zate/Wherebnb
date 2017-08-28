json.set! @bnb.id do
  json.extract! @bnb, :host_id, :lat, :lng, :general_description,
                :side_notes, :accomodation_count, :price,
                :security_deposit, :cleaning_fee, :weekly_discount,
                :monthly_discount, :wifi, :internet, :kitchen,
                :parking, :essentials, :pets_allowed, :smoking_allowed,
                :rating, :bed_count, :room_type, :home_type, :reviews
  json.image_url asset_path(bnb.image.url)
end
