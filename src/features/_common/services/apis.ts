import { requestAPI } from '@common/utils'

export const commnApis = {
  list: {
    getUsers: async () => {
      return requestAPI<GlobalTypes.GetUsers.Response>(`/users`, {
        method: 'GET',
      })
    },
  },

  delete: {},

  update: {},

  utility: {
    postFiles: async (files: GlobalTypes.File.Item[]) => {
      const newFiles = files.filter((file) => file.file)
      const existingFiles = files.filter((file) => !file.file)
      if (!newFiles[0]) return existingFiles

      const data = new FormData()
      newFiles.forEach(({ file }) => data.append('files', file as File))
      const res = await requestAPI<GlobalTypes.File.API.PostFiles.Response[]>(
        `/files/uploads`,
        { method: 'POST', data }
      )

      return [...existingFiles, ...res]
    },
  },
}
