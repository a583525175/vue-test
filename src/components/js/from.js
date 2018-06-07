import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let axiosmock = window.axiosmock = new MockAdapter(axios)

var appData = require('./data.json')
let data = appData
axiosmock.onGet('/api/permitform').reply(200, {
  formdata: data
})
axiosmock.onAny().passThrough()
