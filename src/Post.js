import React from 'react'

function Post(props) {

  return (
    <tr className='post'>
        <td>{props.author}</td>
        <td>{props.post}</td>
    </tr>
  )
}

export default Post