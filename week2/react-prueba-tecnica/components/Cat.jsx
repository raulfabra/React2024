import { useCatImage } from '../hooks/useCatImage'

export function Cat ({ facts }) {
  const { imageUrl } = useCatImage({ facts })
  return (
    <section>
      {facts && <p>{facts}</p>}
      {
          imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${facts}`} />
        }
    </section>
  )
}
