Redux Loading Queue
===================

A loading queue for Redux

```js
npm install --save redux-loading-queue
```

## Usage

Add the `loadingReducer` to your store under `loading`.

```js
import { createStore, combineReducers } from 'redux'
import { loadingReducer } from 'redux-loading'

const store = createStore(
  combineReducers({
    loading: loadingReducer
  })
)
```

To add or remove an item with a certain id to the loading queue, use the provided actions.

```js
import { loadingShow, loadingHide } from 'redux-loading'

const uuid = '123e4567-e89b-12d3-a456-426655440000'

store.dispatch(loadingShow(uuid))

store.dispatch(loadingHide(uuid))
```

Wrap your loading view with `AppLoading`.
The view will show as long as _at least one_ item is in the queue.

```jsx
<AppLoading>
  <div>Loading..</div>
</AppLoading>
```

## Maintainers

Philip Stewart ([@sodoku](https://www.github.com/sodoku))

Yvan Volochine ([@gusano](https://www.github.com/gusano))

## License

Apache v2, Copyright 2016 Chegg Inc.
