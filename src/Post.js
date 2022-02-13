import React from 'react'

function Post(props) {

  return (
    <div className='post'>
        <h2>Author : {props.author}</h2>
        <p>{props.post}</p>
    </div>
  )
}

export default Post