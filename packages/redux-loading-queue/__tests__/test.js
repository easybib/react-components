import { ActionTypes as types } from '../src/index'
import { loadingShow, loadingHide } from '../src/index'
import { loadingReducer as reducer } from '../src/index'

describe('actions tests', () => {
  it('should create an action to show loading', () => {
    const id = 1
    const expectedAction = {
      id,
      type: types.SHOW_LOADING,
    }
    expect(loadingShow(id)).toEqual(expectedAction)
  })

  it('should create an action to hide loading', () => {
    const id = 1
    const expectedAction = {
      id,
      type: types.HIDE_LOADING,
    }
    expect(loadingHide(id)).toEqual(expectedAction)
  })
})

describe('reducer tests', () => {
  it('should return the state with loading id', () => {
    expect(
      reducer([], {
        type: types.SHOW_LOADING,
        id: 1
      })).toEqual([1])
  })
  it('should return the state without the id', () => {
    expect(
      reducer([1, 2], {
        type: types.HIDE_LOADING,
        id: 2
      })).toEqual([1])
  })
})
