
import React from 'react'

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string }
}

// ...Slug 3 dots at the start so we can accept a varying number of parameters

const ProductsPage = ({ params, searchParams }: Props) => {
  return (
    <>
      Products page
      <div> { params.slug } sort by: {searchParams.sortOrder} </div>
    </>
  )
}

export default ProductsPage