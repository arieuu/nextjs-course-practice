
import React from 'react'

interface Props {
    params: { userId: number }
}

const userDetailsPage = ({ params: { userId }}: Props) => {
  return (
    <div> Seeing details for user id: {userId} </div>
  )
}

export default userDetailsPage