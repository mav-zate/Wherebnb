import React from 'react';

const BLUE_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/blue_star.png";
const GREY_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/grey_star.png";

export const renderStars = (reviews) => {
  if (reviews.length === 0) {
    return <span id="Index-unreviewedBnb">NEW</span>;
  } else {
    var rating = calculateRating(reviews);
  }

  switch (rating) {
    case 1:
      return (
        <span>
          <img src={BLUE_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <span id="review-count">{reviews.length}</span>
        </span>
      );
    case 2:
    return (
      <span>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={GREY_STAR}></img>
        <img src={GREY_STAR}></img>
        <img src={GREY_STAR}></img>
        <span id="review-count">{reviews.length}</span>
      </span>
    );
    case 3:
    return (
      <span>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={GREY_STAR}></img>
        <img src={GREY_STAR}></img>
        <span id="review-count">{reviews.length}</span>
      </span>
    );
    case 4:
    return (
      <span>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={GREY_STAR}></img>
        <span id="review-count">{reviews.length}</span>
      </span>
    );
    case 5:
    return (
      <span>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <img src={BLUE_STAR}></img>
        <span id="review-count">{reviews.length}</span>
      </span>
    );
  }
};

export const calculateRating = (reviews) => {
  let sum = 0;

  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i].rating;
  }

  return Math.floor(sum / reviews.length);
};
