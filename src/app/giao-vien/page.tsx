
import React from 'react';
import { TEACHERS } from '@/data/constants';

export default function TeachersPage() {
  return (
    <div className="animate-fade-in pb-16 bg-gray-50 min-h-screen">
      <div className="bg-blue-900 py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Đội Ngũ Giáo Viên</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Những người truyền lửa đam mê và tri thức tại ERG.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
              <div className="h-80 overflow-hidden relative">
                 <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold text-xl">{teacher.name}</p>
                    <p className="text-blue-300">{teacher.subject}</p>
                 </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic">{teacher.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
