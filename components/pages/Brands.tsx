import Image from 'next/image';
import { brands } from '../const'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import { 
    Carousel, 
    CarouselContent,
    CarouselItem 
} from '../ui/carousel';
import React from 'react';

const Brands = () => {
    const plugin = React.useRef(
        // Autoplay({ delay: 1000, stopOnInteraction: false })
        AutoScroll({ playOnInit: true })
    )

  return (
    <div className='flex justify-center m-auto p-3 bg-red-500'>
        <Carousel
            plugins={[plugin.current]}
            opts={{ 
                align: 'start',
                loop: true,
                dragFree: true
            }}
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className='basis-1/7'>
                <Image src={brand.image} alt={`${brand.name} Logo`} width={100} height={100} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default Brands