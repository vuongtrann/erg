
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Award, BookOpen, CheckCircle, Quote, Map, Layers } from 'lucide-react';
import { HERO_SLIDES, COURSES, NEWS, TESTIMONIALS, ROADMAP_DATA } from '@/data/constants';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/lo-trinh"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                  >
                    Xem lộ trình chi tiết
                  </Link>
                  <Link
                    href="/lien-he"
                    className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    Tư vấn ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl hidden md:block shadow-lg">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium">Năm kinh nghiệm</p>
              </div>
            </div>
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wide mb-2">Về chúng tôi</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kiến tạo nền tảng vững chắc cho tương lai
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tại ERG, chúng tôi tin rằng mỗi học sinh đều có những tiềm năng riêng biệt cần được khơi dậy.
                Với phương pháp giáo dục hiện đại, kết hợp giữa lý thuyết và thực hành, chúng tôi cam kết mang
                đến môi trường học tập tốt nhất.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Đội ngũ giáo viên giàu kinh nghiệm, tâm huyết.',
                  'Cơ sở vật chất hiện đại, môi trường học tập an toàn.',
                  'Chương trình học chuẩn quốc tế, cập nhật liên tục.',
                  'Cam kết đầu ra, hỗ trợ học sinh tối đa.',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Xem thêm về chúng tôi <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview Section (New) */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wide mb-2">Lộ trình đào tạo</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Chương trình học bài bản tại ERG
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Chúng tôi xây dựng lộ trình chi tiết từ cơ bản đến chuyên sâu, phù hợp với mọi đối tượng.
              </p>
            </div>
            <Link
              href="/lo-trinh"
              className="hidden md:flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Xem đầy đủ lộ trình <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROADMAP_DATA.slice(0, 6).map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <ul className="space-y-2">
                   {item.items.slice(0, 2).map((sub, i) => (
                     <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                       <span className="text-blue-500 mt-1">•</span> {sub}
                     </li>
                   ))}
                   {item.items.length > 2 && (
                     <li className="text-blue-500 text-sm font-medium pt-1">...và còn nữa</li>
                   )}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/lo-trinh"
              className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Xem đầy đủ lộ trình <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Các khóa học nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đa dạng các khóa học từ cơ bản đến nâng cao, đáp ứng mọi nhu cầu học tập của học sinh.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                    <span className="flex items-center gap-1"><Users size={16} /> {course.grade}</span>
                    <span className="flex items-center gap-1"><BookOpen size={16} /> {course.students} học viên</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/khoa-hoc"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Xem tất cả khóa học
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Enhanced) */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
               Học viên nói gì về chúng tôi
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
               Hơn 2000+ học viên tin tưởng
             </h2>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
               Sự hài lòng của phụ huynh và học sinh là minh chứng rõ nhất cho chất lượng đào tạo tại ERG.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <Quote className="text-blue-100 absolute top-6 right-6" size={56} />
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed text-lg flex-grow">
                    {item.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Học viên', value: '2500+', icon: Users },
              { label: 'Giáo viên', value: '50+', icon: Award },
              { label: 'Khóa học', value: '30+', icon: BookOpen },
              { label: 'Hài lòng', value: '98%', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tin tức mới nhất</h2>
                <p className="text-gray-600">Cập nhật hoạt động và sự kiện tại ERG</p>
             </div>
             <Link href="/tin-tuc" className="hidden md:flex items-center text-blue-600 hover:text-blue-800">
               Xem thêm <ArrowRight size={16} className="ml-1" />
             </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-4 h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-sm text-blue-600 font-medium block mb-2">{item.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
       </section>
    </div>
  );
}
