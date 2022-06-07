import React from 'react'
import "./Modal.scss"

import ButtonClose from '../commons/Buttons/CloseButton'


export default function Modal({children, handleModalClose}) {
  return (
    <div className="modal-window">
        <div className="modal-window__container">
            <div className="modal-window__body">
                {children}
            </div>
            <ButtonClose 
                text={"Закрыть"}
                hadleClickButton={handleModalClose}
            />
        </div>
    </div>
  )
}
