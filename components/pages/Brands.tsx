import Image from 'next/image';
import { brands } from '../const'
import AutoScroll from 'embla-carousel-auto-scroll'
import { 
    Carousel, 
    CarouselContent,
    CarouselItem 
} from '../ui/carousel';
import React from 'react';

const Brands = () => {
    const plugin = React.useRef(
        AutoScroll({ 
            speed: 2, 
            startDelay: 1000,
            stopOnInteraction: false
        })
    )

  return (
    <div className='w-full m-auto p-3 flex justify-center bg-red-500 overflow-hidden'>
        <Carousel
            plugins={[plugin.current]}
            opts={{ 
                align: 'start',
                loop: true
            }}
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className='basis-1/3 md:basis-1/4 lg:basis-1/6 object-contain'>
                <Image src={brand.image} alt={brand.name} width={200} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default Brands