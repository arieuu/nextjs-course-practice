
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { userId: number }
}

const userDetailsPage = ({ params: { userId }}: Props) => {

  if(userId > 10) notFound();

  return (
    <div> Seeing details for user id: {userId} </div>
  )
}

export default userDetailsPage