"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, X } from "lucide-react";

export default function LoveStories() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Disable scrolling when popup is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const testimonials = [
    {
      id: 1,
      name: "Sara Malik",
      event: "Dinner",
      quote:
        "Hey Zainab, it was the best best platter I have ever had, I must say the presentation, the food taste has enriched my each tastebud with delicious taste, perfection I must say — Hummus, salsa, the salad and the brownies ufffff soooo tasty, I really liked the platter presentation 100 and the neatness, superb idea.",
      image: "/images/reviews/review-1.jpg",
    },
    {
      id: 2,
      name: "Areeba Shahid",
      event: "Family Gathering",
      quote:
        "Everyone liked the platter really 😊 I liked each and every item in the platter, very presentable and tasty 🍽️ will shop u again.",
      image: "/images/reviews/review-2.jpg",
    },
    {
      id: 3,
      name: "Hira Qureshi",
      event: "Lunch",
      quote: "It was very good, bohat acha tha 😋.",
      image: "/images/reviews/review-3.jpg",
    },
    {
      id: 4,
      name: "Khawaja Bilal",
      event: "Special Occasion",
      quote:
        "Boht ala, behtreen mashallah... kamaal kr dya apk platter ne 💯... khawaja bilal bop 👏.",
      image: "/images/reviews/review-4.jpg",
    },
    {
      id: 5,
      name: "Tuba Maryam",
      event: "Baat Pakki",
      quote:
        "Thankyou so muchhhhhhhhhhhhhhhh 🙏 everything was so delicioussss 😍 and perfecttttttttttttttttt 🍰 loved the cakeeeeeeeeeeeeeee 🎂 it was the yummiest cake I ever had, and platter was so on point, thankyou so much for putting so much effort and love in it ❤.",
      image: "/images/reviews/review-5.jpg",
    },
    {
      id: 6,
      name: "Mariam Akhtar",
      event: "Gift Tray",
      quote:
        "Hey sorry for the late reply 🙈 it was a beautiful tray, too good 💝 very much impressed 👌.",
      image: "/images/reviews/review-6.jpg",
    },
    {
      id: 7,
      name: "Khadija Irfan",
      event: "Birthday",
      quote:
        "Asalam o Alaikum, kese ha app 🌸 app ki dishes bohat tasty thee 🍛 kal ke birthday occasion per everything's is too much tasty and presentation is wonderful 🎉 — bohat bohat thanks for your delicious recipe or everything 🙌.",
      image: "/images/reviews/review-7.jpg",
    },
    {
      id: 8,
      name: "Aiman Tariq",
      event: "Family Event",
      quote:
        "It was very nice mashallah 🌟 everyone loved it a lot ❤️ thanks to you 😊.",
      image: "/images/reviews/review-8.jpg",
    },
    {
      id: 9,
      name: "Tuba Khalid",
      event: "Casual Gift",
      quote: "Thank u sooo much 💐 it's sooo nice 😍.",
      image: "/images/reviews/review-9.jpg",
    },
    {
      id: 10,
      name: "Abdullah Rauf",
      event: "Home Delivery",
      quote:
        "Thankyou so much for cooperating me for delivering such good food 🙏 Alhamdulillah, they loved it 💕 it was so yummy 🍴 will surely order again 😄 thankyou once again.",
      image: "/images/reviews/review-10.jpg",
    },
    {
      id: 11,
      name: "Mahnoor Ijaz",
      event: "Feedback",
      quote: "Excellent reviews, thank you 🌟.",
      image: "/images/reviews/review-11.jpg",
    },
    {
      id: 12,
      name: "Fatima Zubair",
      event: "Late Night Order",
      quote: "Thankyou for the platter, it was good 👍.",
      image: "/images/reviews/review-12.jpg",
    },
    {
      id: 13,
      name: "Saba Rizwan",
      event: "Self Order",
      quote:
        "Received my platter, it's so tempting 😋 I just love it — taste, presentation, delivery all perfect 🎁.",
      image: "/images/reviews/review-13.jpg",
    },
    {
      id: 14,
      name: "Huma Noor",
      event: "Dinner",
      quote: "Alhumdulillah, too good 🍽️✨.",
      image: "/images/reviews/review-14.jpg",
    },
    {
      id: 15,
      name: "Nimra Saeed",
      event: "Surprise Gift",
      quote: "Yessss, he loved it 💕 thankyou so much 🎉.",
      image: "/images/reviews/review-15.jpg",
    },
    {
      id: 16,
      name: "Iqra Jameel",
      event: "Weekend Dinner",
      quote:
        "We really enjoyed your platter 🤩 the chicken bread was so soft and yummy 🥖 wings and cutlets rocked 🔥 sab ko cake bhi bohat pasand aya 🎂 thank you so much 😊.",
      image: "/images/reviews/review-16.jpg",
    },
    {
      id: 17,
      name: "Zunaira Imran",
      event: "Sister's Treat",
      quote:
        "Hello 👋 ordered this platter for my sister 💝 she loved it 😍 taste was too good 🙂.",
      image: "/images/reviews/review-17.jpg",
    },
    {
      id: 18,
      name: "Hafsa Ansari",
      event: "Formal Gift",
      quote:
        "Catchy presentation 🌟 intricately organised 🎀 scrumptious food items 🍱 — each and every item tasted delicious and worth it 😋.",
      image: "/images/reviews/review-18.jpg",
    },
    {
      id: 19,
      name: "Mehwish Raza",
      event: "Valentine's Day",
      quote:
        "Hey! Ordered your platter for my husband on Valentine's 💌 — it was divine 💫 not only we enjoyed the looks of it 😍 but the taste was incredible too 🍽️ highly economical as well 💵 keep up the good work 💪 would order again InshaAllah 🌸.",
      image: "/images/reviews/review-19.jpg",
    },
  ];

  return (
    <div className="relative">
      {/* Popup overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
            >
              <X />
            </button>
            <Image
              src={selectedImage}
              alt="Selected review"
              width={400}
              height={1000}
              className="max-w-full max-h-[80vh] rounded-xl"
            />
          </div>
        </div>
      )}

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-accent-orange mr-3" />
              <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline">
                Love Stories
              </h1>
              <Heart className="w-8 h-8 text-accent-orange ml-3" />
            </div>
            <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
              What our customers say, in photos and videos.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative group h-96 rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-70 transition-opacity duration-300 rounded-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-2xl font-lexend mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm mb-4 text-accent-orange">
                      {testimonial.event}
                    </p>
                    <p className="italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(testimonial.image);
                      }}
                      className="px-4 py-2 bg-accent-orange text-white rounded-xl hover:bg-opacity-80 transition-colors duration-300 font-medium cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
