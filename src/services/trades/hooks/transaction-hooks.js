exports.approve = function(hook) {
  return hook.app.service('trades').get(hook.id)
    .then(function(trade){
      console.log(trade)
      hook.result = 'transaction approved'
      return hook
    })
    // .then(function(){
    //   console.log('test')
    //
    //   return hook
    // })
}

exports.decline = function(hook) {
  hook.result = 'transaction declined'
}
