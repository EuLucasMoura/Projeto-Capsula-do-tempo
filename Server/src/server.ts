import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true, // todas as urls de front-end poderão acessar nosso back-end
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀HTTP server running on http://localhost:3333");
  });

// HTTP METHOD: GET, POST, PUT, PATCH, DELETE
// GET = Lista alguma coisa
// POST = Criar alguma coisa
// PUT =  Atualizar alguma coisa
// PATCH = Atualizar alguma coisa expecífica dentro de um recurso
// DELETE = Quando for deletar alguma coisa
