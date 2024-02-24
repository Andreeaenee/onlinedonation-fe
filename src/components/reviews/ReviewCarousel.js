import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Review from './Review'
import '../../styles.css'
import { useRef, useEffect } from 'react'

const ReviewCarousel = ({ reviews }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext()
      }
    }, 5000) // Change the interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval)
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  return (
    <Slider ref={sliderRef} {...settings}>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </Slider>
  )
}
export default ReviewCarousel
