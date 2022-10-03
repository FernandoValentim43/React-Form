import React from 'react'
import { DivButton } from './Button.styled'
import { AuthContext } from "../Containers/Page/Page";

const Button = ({nameDiv, id, type, image, text, imageTwo, form, onClick}) => {
  return (
    <DivButton className={nameDiv}>
        <button className={id} id={id} type={type} form={form} onClick={onClick}>
            <img src={image}/> {text} <img src={imageTwo}/>
        </button>
    </DivButton>
  )
}

export default Button