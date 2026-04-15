/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  const pageCover = props?.siteInfo?.pageCover
  const bannerImage = pageCover || siteConfig('PROXIO_HERO_BANNER_IMAGE', null, config)
  const bannerIframe = siteConfig('PROXIO_HERO_BANNER_IFRAME_URL', null, config)

  return (
    <>
      <div id='home' className='h-screen relative overflow-hidden bg-primary'>
        {!bannerIframe && bannerImage && (
          <LazyImage
            priority
            className='w-full object-cover absolute h-screen left-0 top-0 pointer-events-none'
            src={bannerImage}
          />
        )}
        <iframe src={bannerIframe} className='w-full absolute h-screen left-0 top-0 pointer-events-none' />
        <div className='h-1/3 w-full absolute left-0 bottom-0 z-10'>
          <div className='h-full w-full absolute bg-gradient-to-b from-transparent to-white dark:to-black' />
        </div>
      </div>

      <div className='w-full pb-15 dark:text-white'>
        <div className='container -mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4'>
            <div className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center' data-wow-delay='0.5s'>
              <h1 className='mb-6 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                {siteConfig('PROXIO_HERO_TITLE_1', null, config)}
              </h1>
              <p className='mx-auto mb-9 max-w-[600px] text-base font-medium sm:text-lg sm:leading-[1.44]'>
                {siteConfig('PROXIO_HERO_TITLE_2', null, config)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
