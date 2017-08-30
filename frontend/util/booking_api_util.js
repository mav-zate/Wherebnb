export const postBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: booking,
  });
};
