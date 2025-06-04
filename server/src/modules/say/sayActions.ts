import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (request, response) => {
  console.info(request.query);
  response.send(`Welcome to Wild Series ${request.query.name}!`);
};

export default { sayWelcome };
