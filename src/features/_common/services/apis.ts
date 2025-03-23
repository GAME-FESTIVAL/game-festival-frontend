import { requestAPI } from '@common/utils'

export const commnApis = {
  list: {},

  delete: {},

  update: {},

  utility: {
    postFiles: async (files: GlobalTypes.File.Item[]) => {
      const data = new FormData()
      files.forEach(({ file }) => data.append('files', file))
      return requestAPI<GlobalTypes.File.API.PostFiles.Response[]>(
        `/files/uploads`,
        {
          method: 'POST',
          data,
        }
      )
    },
  },
}
