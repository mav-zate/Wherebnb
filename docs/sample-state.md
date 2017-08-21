```js

{
  currentUser: {
    id: 1,
    email: 'first_user@gmail.com'
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    Bookbnb: {errors: ["price can't be blank"]}
  },
  Bnb: {
    1: {
      bnb_id: 1
      title: "A beautiful condo by the ocean",
      description: "Come have fun in the sun",
      lat: 123.456,
      lng: 789.123,
      amenities: '2 bathrooms, 1 jacuzzi, & ping pong table'
      host_id: 1
      }
    }
  },
  bnbReviews: {
    1: {
      id: 1
      bnbId: 1,
      reviewId: 1
    }
  }
  reviews: {
    1: {
      author_id: 1
      body: 'This condo did not meet my expectations. What was pitched as an ocean-side condo is in fact a sea-side one...the nerve!',
      cleanliness: 5,
      location: 2,
      value: 2,
      communication: 1,
      date-time: 2017-8-20-22:18:26,
    }
  }
}
```
