import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import style from './Loader.scss'

const Loader = () => {
  return (
    <div className={ style.loader } >
      <CircularProgress />
    </div>
  )
}

export default Loader
