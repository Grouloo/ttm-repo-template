import Deserializable from '../interfaces/Deserializable'

export type BaseParams = {
   id: string
   created: Date
   updated: Date
}

export default class BaseEntity {
   id: string
   created: Date
   updated: Date

   constructor({ id, created, updated }: BaseParams) {
      this.id = id

      this.created = created

      this.updated = updated
   }
}
