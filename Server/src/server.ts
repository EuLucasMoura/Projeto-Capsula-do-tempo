import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Servidor Online! 🚀'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Servidor rodando em http://localhost:3333 🚀')
  })
