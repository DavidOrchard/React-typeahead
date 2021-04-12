const searchTerms = [
  "Jean-Frederic",
  "Jonathan",
  "Jessica",
  "Dominic",
  "John-Jefferson",
  "Cathryn",
  "Kaelig",
  "Monica",
  "Cynthia",
  "Peter",
  "Justin",
];

export const matchWords = (text: string) => {
  if (text === "") return [];
  return searchTerms.reduce((acc: string[], term) => {
    if (term.indexOf(text) > -1) {
      acc.push(term);
    }
    return acc;
  }, []);
};
