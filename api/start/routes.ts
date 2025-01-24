/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Definição das rotas para 'moments' e 'comments'
Route.group(() => {
  Route.resource('/moments', 'MomentsController').apiOnly()

  // Rota para adicionar um comentário
  Route.post('/moments/:momentId/comments', 'CommentsController.store')

  // Rota para remover um comentário, usando momentId e commentId
  Route.delete('/moments/:momentId/comments', 'CommentsController.destroy')
}).prefix('/api')
