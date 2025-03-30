declare namespace GlobalTypes {
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>

  namespace File {
    type Options = {
      id?: string
      type?: 'image' | 'excel'
      size?: number
      length?: number
    }

    type Item = {
      file: File
      url: string
      originalName: string
      extension: string
      size: number
    }

    namespace API {
      namespace PostFiles {
        type Response = {
          originalname: string
          size: Number
          location: string
        }
      }
    }
  }
}
