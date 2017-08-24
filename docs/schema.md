# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
image_url       | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## bnbs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
host_id     | integer   | not null, foreign key (references users), indexed
lat         | float     | not null
lng         | float     | not null
general_description | text    | not null
space_description | text    | not null
side_notes | text    | not null
accomodation_count | integer    | not null
price | decimal | not null
security_deposit | decimal | not null
cleaning_fee | decimal | not null
weekly_discount | decimal | not null
monthly_discount | decimal | not null
amenities* | boolean | not null

### Amenities consist of many columns



## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
booker_id   | integer   | not null, foreign key (references users)
bnb_id      | integer   | not null, foreign key (references bnbs)
start_date  | date      | not null
end_date    | date      | not null


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bnb_id      | integer   | not null, foreign key (references bnbs), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
accuracy    | integer   | not null
communication | integer   | not null
cleanliness       | integer   | not null
location | integer   | not null
check_in    | integer   | not null
value       | integer   | not null
