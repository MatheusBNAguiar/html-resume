export function getFormattedDate(input) {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}
