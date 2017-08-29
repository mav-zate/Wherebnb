export const fetchAllBnbs = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/bnbs',
    data
  });
};

export const fetchSingleBnb = (bnbId) => {
  return $.ajax({
    method: 'GET',
    url: `api/bnbs/${bnbId}`,
  });
};

export const fetchBnbAddress = (lat, lng, key) => {
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
  });
};

// export const
