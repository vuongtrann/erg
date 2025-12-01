
'use client';

import React from 'react';
import { ROADMAP_DATA, TRAINING_GOALS } from '@/data/constants';
import { CheckCircle, Target, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function RoadmapPage() {
  return (
    <div className="animate-fade-in bg-white pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase drop-shadow-md tracking-wide">
            LỘ TRÌNH ĐÀO TẠO
          </h1>
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
            <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wider text-white">
              TRUNG TÂM TIN HỌC ERG
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Intro Section */}
        <div className="mb-16">
          <div className="bg-amber-50 border-l-8 border-amber-400 p-8 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-amber-700 mb-4 uppercase flex items-center gap-3">
              <BookOpen size={28} className="text-amber-500"/>
              GIỚI THIỆU CHƯƠNG TRÌNH
            </h3>
            <div className="space-y-4 text-slate-700 font-medium text-lg leading-relaxed pl-2">
              <p className="flex items-start gap-3">
                <span className="text-blue-500 mt-1.5 text-xl">•</span>
                <span>Trung tâm Tin học ERG cung cấp chương trình đào tạo toàn diện, được thiết kế khoa học phù hợp với mọi độ tuổi và trình độ từ cơ bản đến nâng cao.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-blue-500 mt-1.5 text-xl">•</span>
                <span>Học viên được trang bị kiến thức nền tảng vững chắc, đáp ứng tốt nhu cầu học tập, làm việc văn phòng và đủ năng lực thi các chứng chỉ quốc tế.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-8">
            {ROADMAP_DATA.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-cyan-50/60 p-6 md:p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:bg-cyan-50 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-blue-700 mb-5 uppercase border-b border-cyan-200 pb-2 inline-block">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-lg">
                      <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={20} fill="currentColor" color="white" />
                      <span className="leading-snug">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {ROADMAP_DATA.slice(4).map((item) => (
              <div key={item.id} className="bg-cyan-50/60 p-6 md:p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:bg-cyan-50 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-blue-700 mb-5 uppercase border-b border-cyan-200 pb-2 inline-block">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-lg">
                      <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={20} fill="currentColor" color="white" />
                      <span className="leading-snug">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Goals Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-white bg-amber-500 inline-block px-6 py-2 rounded-lg mb-6 uppercase shadow-sm">
                MỤC TIÊU ĐÀO TẠO
              </h3>
              <ul className="space-y-5">
                {TRAINING_GOALS.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-800 text-lg font-medium">
                    <div className="bg-white p-2 rounded-full shadow-sm text-amber-500">
                      <Target size={20} />
                    </div>
                    <span className="mt-1">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-blue-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Bạn đã sẵn sàng bắt đầu lộ trình của mình?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              Đừng để sự do dự cản bước tiến của bạn. Hãy để ERG đồng hành cùng bạn trên con đường chinh phục công nghệ và tri thức ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link
                 href="/lien-he"
                 className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
               >
                 Đăng ký tư vấn ngay <ArrowRight size={20}/>
               </Link>
               <Link
                 href="/khoa-hoc"
                 className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
               >
                 Xem chi tiết khóa học
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
