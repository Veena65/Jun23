import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Bootinsert = () => {
  return (
    <div>
        Hello
        <i class="bi bi-basket"></i>
        <i class="bi bi-123"></i>
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faFaceSmile} />
    </div>
  )
}

export default Bootinsert
