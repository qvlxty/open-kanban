import { client } from "./axios";
import { accessTokenApi, loadDalFx, requestFx } from "./public";


loadDalFx.use(async () => {
  await Promise.all([
    accessTokenApi.loadFx(),
  ])
})

requestFx.use((p) => client.request({
  ...p,
  params: p.query,
  data: p.body,
  headers: {
    ['Authorization']: p.accessToken
      ? p.accessToken
      : undefined
  }
}))