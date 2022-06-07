import React from 'react'
import "./CloseButton.scss"

export default function ButtonClose({text, hadleClickButton}) {
  return (
    <button class="close__button" onClick={hadleClickButton}>
        {text}
    </button>
  )
}
