import { notFound } from 'next/navigation'
import { PRICE_ID_MAP } from '@/lib/products'

const VALID_PRODUCT_IDS = new Set(
  Object.values(PRICE_ID_MAP).map((p) => p.product_id)
)

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product_id: string }>
}) {
  const { product_id } = await params

  if (!VALID_PRODUCT_IDS.has(product_id)) {
    notFound()
  }

  return (
    <iframe
      src={`/content/${product_id}.html`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        zIndex: 9999,
      }}
      title={product_id}
    />
  )
}
