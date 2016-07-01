import { updateUser } from './actions'
import store from './store'
console.log(store.getState())

let unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(updateUser({ firstName: 'Jonathan' }))

unsubscribe()
