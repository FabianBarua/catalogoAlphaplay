import { Image, Card, CardFooter, Button } from '@nextui-org/react'
import noPhoto from '../assets/nophoto.png'

export const CardContent = ({ content }) => {
  return (
    <div className='  flex gap-4  flex-col '>
      <Card
        isFooterBlurred
        className='w-full h-[300px] col-span-12 sm:col-span-7'
      >
        <Image
          removeWrapper
          alt='Relaxing app background'
          className='z-0 w-full h-full object-cover'
          src={content.image || noPhoto}
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div className='flex flex-grow gap-2 items-center'>
            <div className='flex flex-col'>
              <p className='text-tiny text-white/60'>{content.name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
