import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, img_url, price, created_at} = props.sushi

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.removeSushi(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi