// import Link from 'next/link'
// import WithApollo from '../lib/with-apollo'
// import Name from '../components/Name'

// const Page = () => (
//   <div>
//     Welcome, <Name />
//     <br/><br/>
//     <Link href="/about"><a>About</a></Link>

//   </div>
// )

// export default WithApollo(Page)

// import React from 'react'
// import Link from 'next/link'
// import Name from '../components/Name'
// // import WithApollo from '../lib/with-apollo'

// const index = () => {
//   return (
//     <div>
//     Welcome, <Name />
//     <br/><br/>
//     <Link href="/about"><a>About Next</a></Link>
//   </div>
//   )
// }
// export default index
// export default WithApollo(index)

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import WithApollo from '../lib/with-apollo';
import { createRoot } from 'react-dom/client';


export default  function Home() {
  return(
    <React.StrictMode>
      <ApolloProvider client={WithApollo}>
      <App />
      </ApolloProvider>
    </React.StrictMode>
   )
}




