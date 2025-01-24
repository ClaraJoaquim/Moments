import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {
  // Método para adicionar um comentário
  public async store({ request, response, params }: HttpContextContract) {
    const body = request.body() // Obtém os dados do corpo da requisição
    const momentId = params.momentId // Obtém o momentId dos parâmetros da URL

    // Verifica se o momento existe
    await Moment.findOrFail(momentId)

    // Adiciona o momentId ao corpo do comentário
    body.momentId = momentId

    // Cria o novo comentário
    const comment = await Comment.create(body)

    // Retorna o comentário criado com status 201 (Criado)
    return response.status(201).json({
      message: 'Comentário adicionado com sucesso!',
      data: comment,
    })
  }

  // Método para excluir um comentário
  public async destroy({ request, response, params }: HttpContextContract) {
    const momentId = params.momentId
    const { commentId } = request.body()

    // Verifica se o momento existe
    await Moment.findOrFail(momentId)

    // Verifica se o commentId foi passado e é válido
    if (!commentId) {
      return response.status(400).json({
        message: 'O ID do comentário (commentId) é obrigatório no corpo da requisição'
      })
    }

    // Busca o comentário pelo ID e deleta
    const comment = await Comment.findOrFail(commentId)
    await comment.delete()

    return response.status(200).json({
      message: 'Comentário excluído com sucesso!'
    })
  }
}
