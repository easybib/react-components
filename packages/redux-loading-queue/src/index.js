import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export const ActionTypes = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING',
}

function LoadingComponent({ children, visible }) {
  return (
    <span>{visible && children}</span>
  )
}

LoadingComponent.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
}

const mapStateToProps = (state) => ({
  visible: state.loading.length > 0,
})

export const Loading = connect(
  mapStateToProps
)(LoadingComponent)

export const loadingShow = (id) => ({
  type: ActionTypes.SHOW_LOADING,
  id,
})

export const loadingHide = (id) => ({
  type: ActionTypes.HIDE_LOADING,
  id,
})

export const loadingReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING: {
      return state.concat(action.id)
    }
    case ActionTypes.HIDE_LOADING: {
      return state.filter(id => id !== action.id)
    }
    default:
      return state
  }
}
