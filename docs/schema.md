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
lat         | DECIMAL(3,3) | not null
long         | DECIMAL(3,3) | not null
description | string    | not null,
body        | text      | not null
amenities   | ?         | not null
** two or more of the above column
host_id     | integer   | not null, foreign key (references users), indexed


## BnbReviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | primary key
bnbId       | integer   | not null, foreign key (references bnbs)
reviewId    | integer   | not null, foreign key (references reviews)


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
description | text      |
cleanliness | integer   | not null
location    | integer   | not null
value       | integer   | not null
communication | integer   | not null
date-time   | timestamp | not null
