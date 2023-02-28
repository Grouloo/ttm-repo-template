import { BaseEntity, File } from 'entities'
import { Payload, Reference } from '../types'
import Query from '../classes/Query'

export default interface BackendAdapter {
   /**
    * Creates an entity in the database from its object representation
    * @param obj
    * @returns
    */
   create: (obj: BaseEntity) => Promise<BaseEntity>

   /**
    * Fetches an entity from the database from a given reference
    * @param ref
    * @returns
    */
   read: (ref: Reference) => Promise<BaseEntity | any>

   /**
    * Updates an entity of the database from its object representation
    * @param obj
    * @returns
    */
   update: (obj: BaseEntity) => Promise<BaseEntity>

   /**
    * Deletes an entity of the database from its reference
    * @param ref
    * @returns
    */
   delete: (ref: Reference) => Promise<boolean>

   /**
    * Executes a query in the database
    * @param query
    * @returns
    */
   find: <T extends BaseEntity>(query: Query) => Promise<Payload<T>>

   /**
    * Returns logged user
    * @returns
    */
   getCurrentUser: () => Promise<BaseEntity>

   /**
    * Uploads a file to the backend
    * @param ref
    * @param field
    * @param file
    * @returns
    */
   uploadFile: (
      ref: Reference,
      field: string,
      file: File,
   ) => Promise<BaseEntity | any>
}
