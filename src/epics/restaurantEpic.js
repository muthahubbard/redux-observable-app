import { Observable } from 'rxjs';
import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_ABORTED,
  fetchRestaurantsFulfilled,
  fetchRestaurantsPending
} from '../actions/restaurantActions';

const api = {
  fetchUser: id => {
    const request = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json());
    return Observable.from(request);
  }
};

const loadRestaurantDataEpic = action$ => (
  action$.ofType(FETCH_RESTAURANTS)
    .switchMap(action =>
      api.fetchUser(action.payload) // This returns our Observable wrapping the Promise
        .catch(payload => ({
          type: 'FETCH_RESTAURANTS_ERROR',
          payload
        }))
        .delay(2000)
        .map(payload => fetchRestaurantsFulfilled(payload))
        // Abort fetching data if someone dispatches abort action
        .takeUntil(
          action$.ofType(FETCH_RESTAURANTS_ABORTED)
        )
        // fire initial
        .startWith(fetchRestaurantsPending())
    )

)

export default loadRestaurantDataEpic;