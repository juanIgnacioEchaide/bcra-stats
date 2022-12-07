import { ItemsList } from '../lib/components/ItemsList'
import { groupRegisterByMonth } from '../lib/utils/helpers'
import { getAllDollarRates, URI } from '../pages/api'

async function getData() {
  const res = await getAllDollarRates()
  let data:any[] = []

  if (res.data?.length) {
    data = groupRegisterByMonth(res.data as any)
  }
  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return data
}

export default async function DollarRates() {
  const data = await getData()
 
  return (
    <main>
      <ItemsList data={data}/>
    </main>
  )
}
