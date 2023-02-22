import { FormEvent } from "react";
import RatingValues from "../RatingValues/RatingValues";
import { useRouter } from "next/router";

const Rating = () => {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = Object.fromEntries(formData);
    console.log(form);
    router.push(`/cheers/${form.rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <RatingValues />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Rating;
