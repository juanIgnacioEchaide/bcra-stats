'use client'
import { useState, useEffect } from 'react'

export default function ItemsList(data: any) {
  const [page, setPage] = useState<number>(0)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    if (data) {
      setItems(data.data)
    }
  }, [data])

  useEffect(() => {
    if (items) {
      console.log(items)
    }
  }, [items])
  return (
    <div>
{/*       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
        <p onClick={() => setPage(page - 1)}>-</p>
        <p>{page}</p>
        <p onClick={() => setPage(page + 1)}>+</p>
      </div>
      <div>
        {items[page]?.map((i: any) => (
          <div key={i.d}>
            <p>{i.d}</p>
            <p>{i.v}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export { ItemsList }
