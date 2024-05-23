import { Rating } from "../types";

export function getRatingClass(rating) {
  switch (rating) {
    case Rating.High:
      return "rating__high";
    case Rating.Low:
      return "rating__low";
    default:
      return "";
  }
}
