import { BaseEntity, BaseParams } from 'entities'

const baseEntityParams: BaseParams = {
   id: '0',
   created: new Date(),
   updated: new Date(),
}

const baseEntity = new BaseEntity(baseEntityParams)

export { baseEntity, baseEntityParams }
