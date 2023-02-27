import { BaseEntity } from 'entities'

export class BaseManipulator<T extends BaseEntity> {
   /**
    * Returns the content of the entity in JSONformat
    * @param entity
    * @returns
    */
   toJSON(entity: T): { [x: string]: unknown } {
      const stringifiedJson = JSON.stringify(entity)

      const parsedJson = JSON.parse(stringifiedJson)

      return parsedJson
   }
}
