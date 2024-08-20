import React, { useState } from 'react';
import testimoniallogo from '../../assets/testimoniallogo.png'

// Updated testimonials data with images and space
const testimonials = [
  {
    id: 1,
    name: "David B (Son of Client)",
    text: `We engaged Holistic Care (which at the time was Radfield Home Care) to come to my parent's home twice a day to help with my Dad's morning and evening routines. His mobility and cognitive function were poor, but the excellent staff at Holistic Care were very patient and skilled in their interactions with him and enabled him to remain living at home with Mum for a further 12 months before requiring residential care. The team members built a great relationship with my Dad, and Holistic Care's management team were professional, caring, and showed very good attention to detail. They were great at keeping my Mum informed if changes to the service were expected for whatever reason.`,
    img: 'https://picsum.photos/101/101',
    space: <div className='w-full h-[60px]'></div>,
  },
  {
    id: 2,
    name: "Sandra T (Daughter of Client)",
    text: `Holistic Care cared for our mum who lived at home with our dad for 3 and a half months before she passed away. After 4 years of dad looking after mum, we had to admit that we needed some help. This was such a hard decision to make, but Holistic Care made it easier to come to terms with. The care our mum received was second to none, even from the very first visit. Every member of staff was so professional, caring, reliable, and compassionate, and always went above and beyond for our mum and also for our dad, who loved to chat with the carers.
        We feel that we were so very lucky that we had Holistic Care look after our mum, and we will never be able to thank the whole team enough; they became part of the family in such a short time. Very, very special people! We would highly recommend this care provider, and we will be forever thankful for everything they did for Mum and Dad right until the end. Forever grateful and thankful.`,
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: "G H (Son of Client)",
    text: `My sister and I use Holistic Care to care for our mother, who is 99. Mum still lives in her own house and receives daily visits. The service provided is good, and Holistic Care responds to issues quickly and attentively. There has never been an issue with providing cover, providing good flexibility. The staff are very helpful, providing a solid and well-thought-out service. Mum responds well to the colleagues and engages in good conversation with them. We ask for a lunch visit, an evening visit, and a 'close down' so Mum is locked up safely in her home. These visits are well carried out and on time. We have cameras in the house, but we use the cameras only to check on Mum overnight and when there are no other visitors. The majority of communication is between my sister and Holistic Care because she lives close to the house. Her review will reflect my comfort with the high level of quality provided.`,
    img: 'https://picsum.photos/103/103',
    space: <div className='w-full h-[20px]'></div>,
  },
  {
    id: 4,
    name: "T F (Son of Client)",
    text: `Generally good continuity of assigned carers, which was important to me as my mum has Alzheimer’s and doesn’t like change. Managers listened to and acted upon any concerns/issues I raised. Care plans are regularly updated, with very good communication, timekeeping, and reporting. Carers always rang me if they had concerns over Mum's health or welfare, and each visit was clearly documented on the access mobile app. The carers were very gentle and had a good manner with Mum and worked hard to make her feel at ease during their visits.
        I would have no hesitation in recommending them. Thank you to two particular members of staff at this care provider.`,
    img: 'https://picsum.photos/104/104',
    space: <div className='w-full h-[65px]'></div>,
  },
  {
    id: 5,
    name: "F W (Son of Client)",
    text: `My father has dementia and was in hospital before Christmas. The care provider was the only company who had the capacity to offer care visits at his home and have looked after him since then. The care received has been nothing short of outstanding, generally from keeping his living areas tidy to his personal care and assisting him to eat and drink, encouraging and being patient with him. My father is prone to infections, and prior to this care provider, he was hospitalized over and over with UTIs whilst in the care of other companies. Since this care provider took over, he hasn’t had one infection or hospital admission, which is a testament to the consistent high-quality care received. Most carers my father has had from other companies go after 15 mins and have not provided the care to meet my father's needs, but this care provider always stays the full hour consistently every day. Special thanks to the Owner and Manager, who have been brilliant throughout, and their very effective team.`,
    img: 'https://picsum.photos/105/105',
  },
];

// Number of testimonials to show per page
const ITEMS_PER_PAGE = 3;

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + ITEMS_PER_PAGE) >= testimonials.length
        ? 0
        : prevIndex + ITEMS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - ITEMS_PER_PAGE) < 0
        ? testimonials.length - ITEMS_PER_PAGE
        : prevIndex - ITEMS_PER_PAGE
    );
  };

  // Slice the testimonials array to get the current page of testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  return (
    <>
    <div className='text-center max-w-[600px] mx-auto'>
          <img src={testimoniallogo} className='ml-10' alt='Testimonial Logo' />
          <p className='text-sm text-primary'>What our customers are saying</p>
          <h1 className='text-3xl font-bold'>Testimonial</h1>
          <p className='text-xs text-gray-400'>Good products have more qualities</p>
        </div>

    <div className="relative max-w-6xl mx-auto p-4">

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-none w-full lg:w-1/3 p-4">
              <blockquote className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.img}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-[10px] lg:text-[12px] italic">{testimonial.text}</p>
                <footer className="mt-4 text-right font-bold text-sm lg:text-base">
                  – {testimonial.name}
                </footer>
              </blockquote>
              {testimonial.space}
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
    </>
  );
};

export default TestimonialCarousel;
