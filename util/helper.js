import moment from "moment";

export const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "k"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "m"; // convert to M for number from > 1 million
  } else {
    return num; // if value < 1000, nothing to do
  }
};

export const IsCSR = typeof window !== "undefined";

export const fromNow = (timestamp) => {
  return moment(timestamp).fromNow();
};
