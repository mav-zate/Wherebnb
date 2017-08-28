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
