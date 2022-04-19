import React, { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SwipeSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        lazyLoad: true,
        dots: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    const data = [
        {
            image: "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
            caption: "First Slide",
        },
        {
            image: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
            caption: "Second Slide",
        },
        {
            image: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
            caption: "Third Slide",
        },
        {
            image: "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
            caption: "Fourth Slide",
        },
        {
            image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
            caption: "Fifth Slide",
        }
    ]


    return (
        <div className="container">
            <div class="row d-flex justify-content-center text-center">
                <h1 className="w-100 text-center mb-5">React Swipe to Slide using react-slick - technostuf.com</h1>
                <hr />
                <div className="col-md-8">
                    <Slider {...settings}>
                        {data.map((slide, i) => {
                            return (
                                <div>
                                    <img
                                        className="d-block w-100"
                                        src={slide.image}
                                        alt={slide.caption}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div >
    )
}
export default SwipeSlider;