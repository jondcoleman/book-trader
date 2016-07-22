import feathers from 'feathers-client'
const host = window.location.origin

const app = feathers()
  .configure(feathers.rest(host).fetch(fetch))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }))

export default app
