import React from 'react'

export default function RemoveAll(props) {
    function handleRemoveAll() {
        props.removeAllTask(props.index);
    }
  return (
<button className ="removeall" onClick={handleRemoveAll}>RemoveAll</button>
  )
}
