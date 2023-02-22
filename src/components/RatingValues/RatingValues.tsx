import { useState } from "react";

const RatingValues = () => {
  //   const [checkedRating, setCheckedRating] = useState(0);
  return (
    <div>
      <input
        // checked={checkedRating === 1}
        // onChange={(event) => {
        //   setCheckedRating(Number(event.currentTarget.value));
        // }}
        id="rating1"
        name="rating"
        type="radio"
        value={1}
      />
      <label htmlFor="rating1">1</label>
      <input
        // onChange={(event) => {
        //   setCheckedRating(Number(event.currentTarget.value));
        // }}
        // checked={checkedRating === 2}
        id="rating2"
        name="rating"
        type="radio"
        value={2}
      />
      <label htmlFor="rating2">2</label>
      <input
        // onChange={(event) => {
        //   setCheckedRating(Number(event.currentTarget.value));
        // }}
        // checked={checkedRating === 3}
        id="rating3"
        name="rating"
        type="radio"
        value={3}
      />
      <label htmlFor="rating3">3</label>
      <input
        // onChange={(event) => {
        //   setCheckedRating(Number(event.currentTarget.value));
        // }}
        // checked={checkedRating === 4}
        id="rating4"
        name="rating"
        type="radio"
        value={4}
      />
      <label htmlFor="rating4">4</label>
      <input
        // onChange={(event) => {
        //   setCheckedRating(Number(event.currentTarget.value));
        // }}
        // checked={checkedRating === 5}
        id="rating5"
        name="rating"
        type="radio"
        value={5}
      />
      <label htmlFor="rating5">5</label>
    </div>
  );
};

export default RatingValues;
