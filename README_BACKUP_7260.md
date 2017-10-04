
# WhereBnb?
<<<<<<< HEAD
=======
[Live demo][live_link]
>>>>>>> 8d62c3f239eb5fd3d9be29c59430e88ab1cb5c4e

WhereBnb? is a web application inspired by AirBnb that allows users to search for and book bed and breakfasts. It uses the Ruby on Rails framework on the back end. On the front end, it uses a combination of React.js and Redux. The database used is PostgreSQL.  

![Demo of bnb index page][index_gif]
## Current Features

<<<<<<< HEAD
---
=======
>>>>>>> 8d62c3f239eb5fd3d9be29c59430e88ab1cb5c4e
### Google Map API Search

The most prominent feature on the application, the map search, appears on the search page. The Google Map interface allows users to search for their desired bed and breakfasts by location using the intuitive dragging and zoom features.

This feature works by means of an event listener that waits for `idle` events, which occur after any sort of change to the viewport, e.g., drags and zooms in and out. These events trigger a callback function that takes the latitude and longitude coordinates of the Northeastern and Southwestern most points of the map viewport and gives them as a *bounds* filter argument to an `updateFilter` method.

```javascript
// frontend/components/map/bnb_map.jsx

this.map = new google.maps.Map(this.mapNode, mapOptions);

// ....

this.map.addListener('idle', () => {
  const latLngBounds = this.map.getBounds();
  const northEast = {
    lat: latLngBounds.getNorthEast().lat(),
    lng: latLngBounds.getNorthEast().lng(),
  };
  const southWest = {
    lat: latLngBounds.getSouthWest().lat(),
    lng: latLngBounds.getSouthWest().lng(),
  }
  const bounds = {
    northEast,
    southWest,
  };
  this.props.updateFilter('bounds', bounds);
```

The `updateFilter` method then makes a request to the Rails framework with the *bounds* filter (among others such as *price* and *room type*). The Rails controller then queries the database for Bed and Breakfasts that are within the viewport bounds.

```Ruby
# app/controllers/api/bnbs_controller.rb

class Api::BnbsController < ApplicationController
  def index
    bnbs = Bnb.in_bounds(params[:bounds])
    # ...
    # ...
  end

  # ...

end
```

```Ruby
# app/models/bnb.rb

class Bnb < ApplicationRecord

  # ...

  def self.in_bounds(bounds)
    self
      .where(["lat < ?", bounds[:northEast][:lat]])
      .where(["lat > ?", bounds[:southWest][:lat]])
      .where(["lng < ?", bounds[:northEast][:lng]])
      .where(["lng > ?", bounds[:southWest][:lng]])
  end

  # ...

end
```

Upon reception, it sends a response with the in-bounds bed and breakfasts to the request point in the front end. This results in an update to Redux store, which ultimately triggers a re-render in the bed and breakfast index component to the left of the map.


### Bookings

Another pivotal feature of WhereBnb? is the ability to book bed and breakfasts
directly on the show page. The inputs are formatted to facilitate the user's selection of check-in and check-out dates.

The most notable aspect of this feature are the backend validations that ensure that a user cannot add a booking to the database that clash with a pre-existing booking. This is done by making a query to the database for a pre-existing booking for the same Bed and Breakfast that clashes with the current booking. If this query yields any results, the current booking will not be persisted to the database and instead the user will receive an appropriate error message. The following code handles this logic.

```Ruby

class Booking < ApplicationRecord

  # ...

  validate :no_booking_overlap

  def no_booking_overlap
    unless overlapping_bookings.empty?
      errors[:base] << 'Booking conflicts with prior booking'
    end
  end

  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(bnb_id: bnb_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
  end
end
```


## Future Features

<<<<<<< HEAD
---
=======
>>>>>>> 8d62c3f239eb5fd3d9be29c59430e88ab1cb5c4e
### User Profiles

Create a page for users to customize their settings and allow them to view their bookings and related personal information.

### Messaging

Create an inbox page and messaging functionality so prospective and actual bookers can communicate with hosts to improve the bed and breakfast experience.


[live_link]: http://www.wherebnb.co/#/
[index_gif]: http://www.github.com/mav-zate/Wherebnb/master/images/wherebnb_demo.gif "Demo gif"
