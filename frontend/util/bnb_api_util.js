export const fetchAllBnbs = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/bnbs',
    data
  });
};
