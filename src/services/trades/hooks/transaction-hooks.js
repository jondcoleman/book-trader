exports.approve = function(hook) {
  // get trade details
  return hook.app.service('trades').get(hook.id)
    .then(function(trade) {
      return Promise.all([
          // update the book offered to new owner
          hook.app.service('books').patch(trade.bookOffered, { userId: trade.bookOffered.userId }),
          // update the book requested to new owner
          hook.app.service('books').patch(trade.bookRequested, { userId: trade.bookRequested.userId }),
          // mark the trade as completed
          hook.app.service('trades').patch(hook.id, { status: 'complete' })
        ])
        .then(function(values) {
          hook.result = { data: 'trade completed' }
          return hook
        })
    })
}

exports.decline = function(hook) {
  return hook.app.service('trades').patch(hook.id, { status: 'declined' })
    .then(function(result) {
      return hook
    })
}
