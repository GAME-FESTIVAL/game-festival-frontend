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
      file?: File
      url: string
      originalName: string
      // fileName: string; // uuid 필요 시 해제
      extension: string
      size: number
      id?: string
    }

    namespace API {
      type GetConnectedFiles = (id: number) => Promise<Item[]>

      type ConnectFilesToPost = (
        fileData: Item[],
        id: number,
        method: string
      ) => Promise<void>

      type UploadFileToServer = (
        type: string,
        id: string,
        method: string
      ) => Promise<void>
    }
    namespace Request {}

    namespace Response {}
  }
}
