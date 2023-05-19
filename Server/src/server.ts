import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP METHOD: GET, POST, PUT, PATCH, DELETE
// GET = Lista alguma coisa
// POST = Criar alguma coisa
// PUT =  Atualizar alguma coisa
// PATCH = Atualizar alguma coisa expecífica dentro de um recurso
// DELETE = Quando for deletar alguma coisa

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀HTTP server running on http://localhost:3333')
  })
