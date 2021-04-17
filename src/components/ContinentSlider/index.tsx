import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

const locations = [
  {
    id: 1,
    name: 'América do Norte',
    cta: 'O continente mais norte',
    image: 'https://images.unsplash.com/photo-1582471698035-4b6fa4257c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'north-america'
  },
  {
    id: 2,
    name: 'América do Sul',
    cta: 'O continente mais sul',
    image: 'https://images.unsplash.com/photo-1592322053945-88b9b538becc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNvdXRoJTIwYW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=60',
    slug: 'south-america'
  },
  {
    id: 3,
    name: 'Ásia',
    cta: 'O continente mais oriente',
    image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'asia'
  },
  {
    id: 4,
    name: 'Europa',
    cta: 'O continente mais antigo',
    image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'europe'
  },
  {
    id: 5,
    name: 'Oceania',
    cta: 'O continente mais oceânico',
    image: 'https://images.unsplash.com/photo-1574791325738-80142fc0e8c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    slug: 'oceania'
  }
]

export function ContinentSlider() {
  return(
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {locations.map(location => 
        <SwiperSlide>
            <Flex
              as="a"
              href={`continent/${location.slug}`}
              py="36"
              direction="column"
              key={location.id} 
              justifyContent="center" 
              alignItems="center" 
              pos="relative"
              bg="rgba(0,0,0,0.75)"
              _before={{
                content: '""',
                bgImage:
                  `url(${location.image})`,
                bgSize: "cover",
                bgPosition: 'center',
                pos: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                opacity: 0.2
              }}
            >
              <Heading position="relative" zIndex="2" as="h2" size="xl" color="white">{location.name}</Heading>
              <Text position="relative" zIndex="2" color="white">{location.cta}</Text>
            </Flex>
        </SwiperSlide>
      )}
    </Swiper>
  )
}