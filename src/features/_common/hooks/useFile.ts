import { useState } from 'react'
// import { v4 as uuidv4 } from "uuid";
import { FileInput } from '@common/components'
import { messages } from '@common/constants'

const fileExtensions = {
  image: ['jpg', 'jpeg', 'png', 'gif'],
  excel: ['xlsx'],
}

const defaultOption: Required<GlobalTypes.File.Options> = {
  id: '',
  type: 'image',
  size: 1,
  length: 1,
}

export const useFile = (options?: GlobalTypes.File.Options) => {
  const { type, size, length } = { ...defaultOption, ...options }
  const [files, setFiles] = useState<GlobalTypes.File.Item[]>([])
  const allowedExtensions = type ? fileExtensions[type] : ''

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ): GlobalTypes.File.Item[] | void => {
    if (!e.target.files) return
    const copy = [...files]
    for (let index = 0; index < e.target.files.length; index++) {
      const file = e.target.files[index]
      const fileObj = {
        file,
        url: URL.createObjectURL(file),
        originalName: file.name,
        // fileName: uuidv4(),
        extension: file.name.split('.').pop()?.toLowerCase() as string,
        size: file.size,
        index,
      }
      if (type && !allowedExtensions.includes(fileObj.extension)) {
        return alert(allowedExtensions + messages.alert.fileExtensions)
      }
      if (size && file.size > size * 1024000) {
        return alert(size + messages.alert.fileSize)
      }
      if (length !== 1 && copy.length >= length) {
        return alert(length + messages.alert.fileLength)
      }
      if (length === 1) {
        return setFiles([fileObj])
      } else {
        copy.push(fileObj)
      }
    }
    setFiles(copy)
    return copy
  }

  const removeFile = (idx: number): void => {
    const copy = [...files]
    copy.splice(idx, 1)
    setFiles(copy)
  }

  const FileUploader = FileInput({
    handleFile,
    multiple: length > 1 ? true : false,
  })

  return {
    FileUploader,
    files,
    setFiles,
    removeFile,
  }
}
