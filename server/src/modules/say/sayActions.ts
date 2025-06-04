import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (request, response) => {
  response.json("Welcome to Wild Series !");
};

export default { sayWelcome };
