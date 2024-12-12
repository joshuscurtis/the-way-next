"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaClock,
  FaBook,
  FaPaintBrush,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaLocationArrow,
  FaChessKnight,
  FaQuestion,
} from "react-icons/fa";
import { FaCakeCandles, FaQ } from "react-icons/fa6";
import { GiSewingNeedle, GiWool } from "react-icons/gi";

const events = [
  {
    name: "Game On!",
    icon: <FaChessKnight className="text-4xl text-[#D4A574]" />,
    description: "",
    dates: "1st Wednesday",
    frequency: "monthly",
    startTime: "19:30",
    endTime: "21:00",
    location: "The Way Coffee House",
  },
  {
    name: "Book Club",
    icon: <FaBook className="text-4xl text-[#D4A574]" />,
    description:
      "From Asimov to Hemmingway, the fictional to the factual, the tear-jerkers to the comedies, Book club enjoys reading old favourites, modern classics, and the yet to be acknowledged!",
    dates: "2nd Wednesday",
    frequency: "monthly",
    startTime: "19:30",
    endTime: "21:00",
    location: "The Way Coffee House",
  },
  {
    name: "Quiz Night",
    icon: <FaQuestion className="text-4xl text-[#D4A574]" />,
    description:
      "Join us for a night of fun and friendly competition. Test your knowledge and enjoy a great evening with friends.",
    dates: "3rd Wednesday",
    frequency: "monthly",
    startTime: "19:30",
    endTime: "21:00",
    location: "The Way Coffee House",
  },
  {
    name: "Puddings Night",
    icon: <FaCakeCandles className="text-4xl text-[#D4A574]" />,
    description:
      "A night of indulgence! Join us for a selection of homemade puddings and a great evening with friends.",
    dates: "4th Wednesday",
    frequency: "monthly",
    startTime: "19:30",
    endTime: "21:00",
    location: "The Way Coffee House",
  },
  {
    name: "Patchwork & Quilting",
    icon: <GiSewingNeedle className="text-4xl text-[#D4A574]" />,
    description:
      "Whether you're a master tailor, a skilled-seamstress, or you simply wouldn't know the eye from the point; Patchwork & Quilting has something for every level of skill.",
    dates: "1st & 3rd Monday",
    frequency: "monthly",
    startTime: "10:00",
    endTime: "12:30",
    location: "Christ Church Dunstable's Foyer",
  },
  {
    name: "Art Group",
    icon: <FaPaintBrush className="text-4xl text-[#D4A574]" />,
    description:
      "Portraits, landscapes, seascapes escapes. Whether it'll be the first time you've putting pencil to paper, or you've just lacquered your latest masterpiece, 'Art' is a group made for you.",
    dates: "Tuesdays",
    frequency: "term time",
    startTime: "10:00",
    endTime: "12:00",
    location: "The Way Coffee House",
  },
  {
    name: "Knit & Natter",
    icon: <GiWool className="text-4xl text-[#D4A574]" />,
    description:
      "Warm group full of fun, laughter, chatting, and occasionally some knitting gets done. Home to over 40 knitters and crochet-ers ranging from beginner to expert.",
    dates: "Fridays",
    frequency: "weekly",
    startTime: "10:00",
    endTime: "12:00",
    location: "Christ Church Dunstable's Foyer",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/min/snow-outside-min.jpg",
    "/min/coffeemachine-min.webp",
    "/min/cake-min.webp",
    "/min/coffee-min.webp",
  ];

  useEffect(() => {
    setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5E9] to-white font-['Helvetica_Neue']">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt={`The Way Coffee House ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000
          absolute inset-0 brightness-[0.65] ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 pb-20">
          <div
            className="backdrop-blur-md bg-[#0A2240] p- md:p-16 pb-12 md:pb-32 rounded-1xl max-w-[280px] md:max-w-[350px] w-full text-center mb-8 
             shadow-2xl transform hover:scale-105 transition-all duration-500
            outline outline-white outline-offset-[-10px] md:outline-offset-[-10px] animate-fade-in"
          >
            <h1 className="text-white text-7xl font-bold mt-12 text-center md:mt-2">
              THE
            </h1>
            <h1 className="text-white text-7xl font-bold mb-8 text-center md:mb-2">
              WAY
            </h1>
            <p className="text-white text-2xl md:text-3xl font-bold pt-6 md:pt-16">
              Coffee House
            </p>
            <small className="absolute bottom-4 right-4 text-white/60">
              Christ Church Dunstable
            </small>
          </div>

          <p
            className="text-xl md:text-4xl font-light text-center max-w-4xl mb-8 
        drop-shadow-xl animate-fade-in leading-relaxed tracking-wide
        text-white bg-black/20 backdrop-blur-sm rounded-xl p-6 font-bold"
          >
            Quality coffee, homemade cakes, and a welcoming community space in
            the heart of Dunstable.
          </p>

          <button
            onClick={() => {
              const element = document.getElementById("events");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-4 bg-[#002040]/80 hover:bg-[#002040]/90 backdrop-blur-md
            rounded-xl text-white transition-all transform hover:scale-105
            border-[3px] border-white
            text-lg font-extrabold shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3),0_6px_20px_0_rgba(0,0,0,0.3)]
            hover:shadow-[4px_4px_4px_4px_rgba(0,0,0,0.3),0_8px_24px_0_rgba(0,0,0,0.3)]
            whitespace-nowrap animate-fade-in"
          >
            Discover More
          </button>

          <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce flex items-center justify-center">
            <a href="#events" className="flex items-center justify-center">
              <FaChevronDown className="text-4xl text-white drop-shadow-lg" />
            </a>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section
        id="events"
        className="py-16 px-6 md:px-8 bg-gradient-to-b from-[#002032] to-[#002040]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-white">
            Our Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.name}
                className="p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]
            transition-all duration-300 hover:shadow-2xl bg-white/5 backdrop-blur-lg group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#D4A574] transition-colors mb-2">
                      {event.name}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90 bg-white/5 p-4 rounded-xl">
                    <FaCalendar className="text-[#D4A574] flex-shrink-0" />
                    <span className="font-medium">{event.dates}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 bg-white/5 p-4 rounded-xl">
                    <FaClock className="text-[#D4A574] flex-shrink-0" />
                    <span className="font-medium">
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90 bg-white/5 p-4 rounded-xl">
                    <FaLocationArrow className="text-[#D4A574] flex-shrink-0" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section
        id="gallery"
        className="relative py-16 px-6 md:px-8 bg-gradient-to-b from-[#002032] to-[#002040]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="relative aspect-square overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={`/insta/insta_${num}.webp`}
                  alt={`Instagram post ${num}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#00204e]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-[#002032] to-[#002040]"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">
              Visit Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Opening Hours */}
            <div className="lg:col-span-1 space-y-4 md:space-y-8">
              <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/30 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4A574]/10 flex items-center justify-center">
                    <FaClock className="text-[#D4A574]" />
                  </div>
                  Opening Hours
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    ["Monday", "8:30am - 3:00pm"],
                    ["Tuesday", "8:30am - 3:00pm"],
                    ["Wednesday", "8:30am - 9:00pm", true],
                    ["Thursday", "8:30am - 3:00pm"],
                    ["Friday", "8:30am - 3:00pm"],
                    ["Saturday", "8:30am - 3:00pm"],
                    ["Sunday", "Join us at Christ Church 11.15am", false, true],
                  ].map(([day, time, isLate, isSunday]) => (
                    <div
                      key={day.toString()}
                      className={`flex justify-between items-center p-2 rounded-lg
              ${isLate ? "bg-white/10" : "hover:bg-white/5"}
              ${isSunday ? "bg-[#D4A574]/10" : ""}`}
                    >
                      <span className="font-medium text-white text-base md:text-lg">
                        {day}
                      </span>
                      <div className="text-right">
                        <span
                          className={`${
                            isSunday
                              ? "text-[#D4A574] font-medium"
                              : "text-white/90"
                          } text-sm md:text-base`}
                        >
                          {time}
                        </span>
                        {isLate && (
                          <span className="block text-xs md:text-sm text-[#D4A574] mt-1 font-medium">
                            Evening Events
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/30 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4A574]/10 flex items-center justify-center">
                    <FaPhone className="text-[#D4A574]" />
                  </div>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <FaMapMarkerAlt className="text-[#D4A574]" />,
                      title: "Address",
                      content:
                        "6 West Street, Dunstable, Bedfordshire, LU6 1JL",
                      href: "https://goo.gl/maps/yourAddress",
                    },
                    {
                      icon: <FaPhone className="text-[#D4A574]" />,
                      title: "Phone",
                      content: "01582 343343",
                      href: "tel:01582343343",
                    },
                    {
                      icon: <FaEnvelope className="text-[#D4A574]" />,
                      title: "Email",
                      content: "hello@thewaydunstable.com",
                      href: "mailto:hello@thewaydunstable.com",
                    },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D4A574]/10 flex items-center justify-center group-hover:bg-[#D4A574]/20">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#D4A574] text-xs md:text-sm font-medium mb-1">
                          {item.title}
                        </p>
                        <p className="text-white/90 group-hover:text-white text-sm md:text-base break-words">
                          {item.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="flex items-center justify-center gap-4 md:gap-6 pt-6 mt-6 border-t border-white/10">
                  {[
                    {
                      icon: <FaInstagram />,
                      href: "https://instagram.com/the_way_dunstable",
                      label: "Instagram",
                    },
                    {
                      icon: <FaFacebook />,
                      href: "https://facebook.com/thewaydunstable",
                      label: "Facebook",
                    },
                    { icon: <FaYoutube />, href: "#", label: "YouTube" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A574] hover:scale-110 transition-all duration-300 group"
                    >
                      <div className="text-lg md:text-xl text-gray-400 group-hover:text-white">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 h-[300px] md:h-[500px]">
              <div className="bg-white/5 backdrop-blur-lg p-2 rounded-2xl border border-white/10 hover:border-[#D4A574]/30 transition-all duration-300 h-full">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWoKnIqMOJ1npXjMd3GXbknzUSLWYga0Q&q=The+Way+Coffee+House"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Way Coffee House location"
                  className="rounded-xl filter brightness-90 contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-8 px-6 md:px-8 bg-gradient-to-b from-[#002032] to-[#002040]">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <p className="text-gray-400 leading-relaxed">
                Quality coffee, homemade cakes, and a welcoming community space
                in the heart of Dunstable.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2024 The Way Coffee House, Dunstable. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
