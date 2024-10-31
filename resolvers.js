// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
import data from "./data.js";

// Use an ORM like Prisma to retrieve the books from your database.
const resolvers = {
  Query: {
    books: () => data.books,
  },
};

export default resolvers;
