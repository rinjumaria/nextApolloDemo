import React from 'react'
import Link from 'next/link'
import Name from '../components/Name'

const app = () => {
  return (
    <div>
    Welcome, <Name />
    <br/><br/>
    <Link href="/about">About Next</Link>
  </div>
  )
}

export default app
