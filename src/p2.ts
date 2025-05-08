// Description: Create a function that filters an array of objects
//  by the rating property, returning only items with a rating of 4 or more.
{
  interface book {
    title: string;
    rating: number;
  }

  const books: book[] = [
    {
      title: "Book A",
      rating: 4.5,
    },
    {
      title: "Book B",
      rating: 3.2,
    },
    {
      title: "Book C",
      rating: 5.0,
    },
  ];
  function filterBooksByRating(item: book[]): book[] {
    return item.filter((item) => item.rating >= 4);
  }

  const res = filterBooksByRating(books);

  console.log(res);
}
