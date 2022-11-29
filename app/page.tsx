import { chunkItems } from '../lib/utils/helpers'
import { getAllDollarRates, URI } from '../pages/api'

async function getData() {
  const res = await getAllDollarRates()
  let data:any[] = []

  if (res.data?.length) {
    data = chunkItems(res.data as any)
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
      {data[3]?.map((i:any) => (
        <div key={i.d}>
          <p>{i.d}</p>
          <p>{i.v}</p>
        </div>
      ))}
    </main>
  )
}
