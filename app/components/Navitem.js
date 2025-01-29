import React from 'react'

const Navitem = ( {children, opacity, href} ) => {
  const classes = `text-white text-lg ${opacity || "opacity-60"} font-semibold`

  return (
    <a href={href}><li className={classes}>{children}</li></a>
  )
}

export default Navitem