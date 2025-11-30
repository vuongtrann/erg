
'use client';

import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock } from 'lucide-react';
import { COURSES } from '@/data/constants';

export default function CoursesPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];

  const filteredCourses = filter === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === filter);

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
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  HOT
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{course.category}</span>
                   <span className="text-gray-400 text-xs">{course.grade}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                  {course.description}
                </p>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                   <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Clock size={16} /> {course.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen size={16} /> {course.students} học viên</span>
                   </div>
                   <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white py-2.5 rounded-lg font-semibold transition-all">
                     Xem chi tiết
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
