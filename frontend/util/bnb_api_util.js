export const fetchAllBnbs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bnbs',
  });
};
