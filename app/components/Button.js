import React from 'react'

const Button = ({children, bgcolor, text, href}) => {
  return (
    <a href={href} className={`border border-secondary text-secondary rounded-full px-[35px] py-[14px] ${bgcolor || ""} ${text || ""}`}>{children}</a>
  )
}

export default Button