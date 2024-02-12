'use client'
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

//import  swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import reqired modules
import { Pagination } from 'swiper/modules'

const reviewsData = [
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        avtar: '/reviews/avatar-1.png',
        name: 'Jack Coolen',
        job: 'CEO',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container max-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            {/* slider */}
            <Swiper
            className="h-[350px]"
            slidesPerView={1} breakpoints={{
                640: { slidesPerView: 2 },
                1400: { slidesPerView: 3 }
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{clickable: true}}
            >
                {reviewsData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                <CardHeader>
                                    <div className="flex items-center gap-x-4">
                                        {/* image */}
                                        <Image src={person.avtar} width={70} height={70} alt="" priority/>
                                        {/* name */}
                                        <div className="flex flex-col">
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews