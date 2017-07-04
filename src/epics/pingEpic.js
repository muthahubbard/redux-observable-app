import { PING, pong } from '../actions/pingPongActions';

const pingEpic = action$ => (
  action$.ofType(PING)
    .delay(1000)
    .mapTo( pong() )
)

export default pingEpic;