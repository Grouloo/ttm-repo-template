import { BaseEntity } from 'entities'

export type Reference = `${string}/${string}`

export type Payload<T extends BaseEntity> = {
   items: T[]
   meta: {
      collection: string
      order: 'asc' | 'desc'
      orderedBy: string
      startAt: number
      endAt: number
      count: number
      total: number
   }
}
