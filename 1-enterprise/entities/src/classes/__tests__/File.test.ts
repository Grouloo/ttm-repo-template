import { describe, test, expect } from '@jest/globals'
import File, { FileContentType, FileParams } from '../File'

describe('File initialization tests', () => {
   const fileParams: FileParams = {
      filename: 'image',
      filepath: 'image.png',
      contentType: FileContentType.PNG,
      content: '',
   }

   test('shouldInitializeCorrectly', () => {
      const file = new File(fileParams)

      expect(file.filename).toBe(fileParams.filename)
      expect(file.filepath).toBe(fileParams.filepath)
      expect(file.contentType).toBe(fileParams.contentType)
      expect(file.content).toBe(fileParams.content)
   })
})
