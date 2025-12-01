
'use client';

import React, { useState } from 'react';
import { Search, Clock, BookOpen } from 'lucide-react';
import { COURSES } from '@/data/constants';
import Link from 'next/link';

export default function CoursesPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];

  // Logic lọc dữ liệu theo cả Category và Search Term
  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = filter === 'All' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in pb-16">
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Danh sách khóa học</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Khám phá các khóa học chất lượng cao, được thiết kế phù hợp với nhiều độ tuổi và trình độ khác nhau.
          </p>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                     filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                   }`}
                 >
                   {cat === 'All' ? 'Tất cả' : cat}
                 </button>
               ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden group flex flex-col sm:flex-row h-full">
                
                {/* Image Side - Responsive: Full width on mobile, 40% on desktop */}
                <div className="relative w-full sm:w-2/5 h-56 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wide shadow-sm">
                    {course.category}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 flex flex-col w-full sm:w-3/5">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0ea5e9] mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="mb-4 space-y-1.5 text-gray-700 text-sm md:text-base">
                    <p className="flex items-center gap-2">
                       <span className="text-orange-500 font-bold">Hình thức:</span>
                       <span className="font-medium">{course.format || 'Online & Offline'}</span>
                    </p>
                    <p className="flex items-center gap-2">
                       <span className="text-orange-500 font-bold">Thời lượng:</span>
                       <span className="font-medium">{course.duration}</span>
                    </p>
                  </div>

                  {/* Curriculum List */}
                  {course.curriculum && (
                    <ul className="space-y-1.5 mb-6 flex-grow">
                      {course.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-black text-lg leading-4">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Footer Actions */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                     <Link href="#" className="inline-block text-blue-600 font-bold hover:underline text-sm md:text-base">
                        Xem chi tiết &gt;
                     </Link>
                     <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span className="flex items-center gap-1"><BookOpen size={14}/> {course.students}</span>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-gray-600">Không tìm thấy khóa học nào</h3>
            <p className="text-gray-500 mt-2">Vui lòng thử lại với từ khóa hoặc danh mục khác.</p>
            <button 
              onClick={() => {setFilter('All'); setSearchTerm('');}}
              className="mt-6 text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
