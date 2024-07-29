import React from 'react'
import '../../Style/deleteModal.css'

function DeleteModal({onCancel}) {
  return (
    <div className='delete-modal-overlay'>
    <div className='delete-modal-container'>
        <div className='textDelete-modal'>
            <h1>Are you sure it’s deleted ?</h1>
            <p>Attention! If you delete this item, it will not come back...</p>
        </div>
        <div className='deleteModal-buttons'>
            <button onClick={onCancel} className='modal-cancel-button'>cancel</button>
            <button className='modal-delete-button'>delete</button>
        </div>
    </div>

</div>
  )
}

export default DeleteModal