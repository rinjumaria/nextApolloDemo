import Link from 'next/link'
import Name from '../components/Name'
export default function App() {
  return (
    <div>
      Welcome, <Name />
    <br/><br/>
    <Link href="/gridName">Name Data</Link>
    </div>
  )
}