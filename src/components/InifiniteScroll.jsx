import { useInfinite } from '../hooks/useInfinite'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardContent } from './CardContent'
import { motion } from 'framer-motion'
import { CircularProgress } from '@nextui-org/react'

const Loading = () => {
  return <CircularProgress color='warning' aria-label='Loading...' />
}

export const Infinite = ({ filteredContent }) => {
  const { addMore, hasMore, quantity } = useInfinite({ filteredContent })

  return (
    <InfiniteScroll
      dataLength={filteredContent.slice(0, quantity).length}
      next={addMore}
      hasMore={hasMore}
      loader={<Loading />}
      className='grid mt-8 grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-6 p-4 overflow-clip place-items-center place-content-center'
    >
      {filteredContent.length > 0 &&
        filteredContent.slice(0, quantity).map(content => (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            key={content.id}
          >
            <CardContent content={content} />
          </motion.div>
        ))}
    </InfiniteScroll>
  )
}
