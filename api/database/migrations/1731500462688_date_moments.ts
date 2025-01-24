import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddDateToMoments extends BaseSchema {
  protected tableName = 'moments'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      // Adiciona uma coluna de string chamada "date" que pode ser nula
      table.string('date').nullable();
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('date')  // Remove a coluna "date" caso a migration seja revertida
    })
  }
}
