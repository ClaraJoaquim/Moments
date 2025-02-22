import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Application from '@ioc:Adonis/Core/Application'

import { v4 as uuidv4 } from 'uuid'

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
  
    if (!body.date) {
      body.date = new Date().toISOString().split('T')[0]
    }
  
    const image = request.file('image', this.validationOptions)
  
    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`
  
      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })
  
      body.image = imageName
    }
  
    const moment = await Moment.create(body)
  
    response.status(201)
  
    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }  
  

  public async index() {
    const moments = await Moment.query().preload('comments')

    return {
      data: moments,
    }
  }

  public async show({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    await moment.load('comments')

    return {
      data: moment,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    await moment.delete()

    return {
      message: 'Momento excluído com sucesso!',
      data: moment,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
  
    const moment = await Moment.findOrFail(params.id)
  
    // Atualiza o título e a descrição
    moment.title = body.title
    moment.description = body.description
  
    // Atualiza a data, caso o campo "date" tenha sido enviado
    if (body.date) {
      moment.date = body.date  // Assume que o campo "date" seja do tipo string ou data
    }
  
    // Verifica se há uma nova imagem e realiza o upload
    if (moment.image !== body.image || !moment.image) {
      const image = request.file('image', this.validationOptions)
  
      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`
  
        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })
  
        moment.image = imageName
      }
    }
  
    await moment.save()
  
    return {
      message: 'Momento atualizado com sucesso!',
      data: moment,
    }
  }
  
}
