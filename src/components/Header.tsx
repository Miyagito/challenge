import React from 'react'

type Props = {
    headerTitle: string
}

function Header({headerTitle}: Props) {
  return (
    <div>{headerTitle}</div>
  )
}

export default Header