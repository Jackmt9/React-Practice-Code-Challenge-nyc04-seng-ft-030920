import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // debugger
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.displayIndex, props.displayIndex + 4).map(sushi => {
            return <Sushi sushi={sushi} removeSushi={props.removeSushi} eaten={props.eaten.includes(sushi)} key={sushi.id}/>
          })
        }
        <MoreButton getNextFour={props.getNextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer