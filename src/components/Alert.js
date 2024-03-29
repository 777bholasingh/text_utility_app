import React from 'react'

export default function Alert(props) {
  return (
    <>
    <div style={{height:'15px',marginBottom:"20px"}}>
    {  props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
}
</div>
    </>
  )
};

