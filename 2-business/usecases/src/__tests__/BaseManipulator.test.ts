import { describe, test, expect } from '@jest/globals'
import { BaseManipulator } from '../base/BaseManipulator'
import { baseEntity, baseEntityParams } from './fixtures/fBaseEntity'

describe('toJSON method tests', () => {
   test('baseObject should Be Transformed To JSON', () => {
      const stringifiedCreateDate = baseEntityParams.created.toISOString()
      const stringifiedUpdateDate = baseEntityParams.updated.toISOString()

      const baseManipulator = new BaseManipulator()

      const entityConvertedToJson = baseManipulator.toJSON(baseEntity)

      expect(entityConvertedToJson.id).toBe(baseEntityParams.id)
      expect(entityConvertedToJson.created).toBe(stringifiedCreateDate)
      expect(entityConvertedToJson.updated).toBe(stringifiedUpdateDate)
   })
})
