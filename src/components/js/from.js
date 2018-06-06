import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let axiosmock = window.axiosmock = new MockAdapter(axios)

const getMockString = (n = 8) => {
  const chrs = 'abcdefghijklmnopqrstuvwxyzaoeiuaoeiu   '
  let str = ''
  for (let i = 0; i < n; i++) {
    str += chrs[Math.floor(Math.random() * chrs.length)]
  }
  return str
}
let data = []
for (let i = 0; i < 9; i++) {
  data.push({
    id: getMockString(),
    img: getMockString(),
    nickname: getMockString(),
    username: getMockString(),
    email: getMockString(),
    status: getMockString(),
    operations: getMockString()
  })
}
axiosmock.onGet('/api/permitform').reply(200, {
  formdata: data
})
axiosmock.onAny().passThrough()
