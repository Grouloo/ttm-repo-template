import { describe, test, expect } from '@jest/globals'
import BaseEntity from '../BaseEntity'

describe('BaseEntity tests', () => {
   const id = '0'
   const created = new Date()
   const updated = new Date()

   test('shouldInitializeCorrectly', () => {
      const baseEntity = new BaseEntity({ id, created, updated })

      expect(baseEntity.id).toBe(id)
      expect(baseEntity.created).toBe(created)
      expect(baseEntity.updated).toBe(updated)
   })
})
