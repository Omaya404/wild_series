// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import { type RequestHandler, request, response } from "express";

const browse: RequestHandler = (request, response) => {
  if (request.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(request.query.q as string),
    );

    response.json(filteredCategories);
  } else {
    response.json(categories);
  }
};

const read: RequestHandler = (request, response) => {
  const parsedId = Number.parseInt(request.params.id);
  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    response.json(category);
  } else {
    response.sendStatus(404);
  }
};
// Declare the actions

/* Here you code */

// Export them to import them somewhere else

export default { browse, read };
