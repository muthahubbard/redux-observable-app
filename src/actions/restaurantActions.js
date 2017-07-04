
export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_RESTAURANTS_PENDING = 'FETCH_RESTAURANTS_PENDING';
export const FETCH_RESTAURANTS_FULFILLED = 'FETCH_RESTAURANTS_FULFILLED';
export const FETCH_RESTAURANTS_ABORTED = 'FETCH_RESTAURANTS_ABORTED';

export const fetchRestaurants = restaurantId => (
  {
    type: FETCH_RESTAURANTS,
    payload: restaurantId
  }
)

export const fetchRestaurantsFulfilled = restaurants => (
  {
    type: FETCH_RESTAURANTS_FULFILLED,
    payload: restaurants
  }
)

export const fetchRestaurantsAbort = () => (
  {
    type: FETCH_RESTAURANTS_ABORTED
  }
)

export const fetchRestaurantsPending = () => (
  {
    type: FETCH_RESTAURANTS_PENDING
  }
)