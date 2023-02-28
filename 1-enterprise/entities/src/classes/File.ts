export type FilePath = `${string}.${string}`

export enum FileContentType {
   PNG = 'image/png',
   JSON = 'application/json',
}

export interface FileParams {
   filename: string
   filepath: FilePath
   contentType: FileContentType
   content: string
}

export default class File {
   filename: string
   filepath: FilePath
   contentType: FileContentType
   content: string

   constructor({ filename, filepath, contentType, content }: FileParams) {
      this.filename = filename

      this.filepath = filepath

      this.contentType = contentType

      this.content = content
   }
}
