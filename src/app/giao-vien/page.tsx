'use client';

import React, { useRef, useEffect } from 'react';
import { TEACHERS } from '@/data/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeachersPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getScrollItemWidth = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement;
      return firstCard ? firstCard.clientWidth + 16 : 350; 
    }
    return 350;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = getScrollItemWidth();
      const targetScroll = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;
      current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const autoScroll = () => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = getScrollItemWidth();
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        
        if (current.scrollLeft >= maxScrollLeft - 20) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };
    const timer = setInterval(autoScroll, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    // SỬA 1: Xóa 'min-h-screen', giảm 'pb-16' xuống 'pb-8'
    // Giúp footer bên dưới (nếu có) được đẩy lên sát nội dung hơn
    <div className="animate-fade-in pb-8 bg-gray-50"> 
      <div className="bg-blue-900 py-16 text-center text-white mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Đội Ngũ Giáo Viên</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Những người truyền lửa đam mê và tri thức tại ERG.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative group">
        
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:-left-4 top-[175px] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 hidden md:flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:-right-4 top-[175px] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 hidden md:flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollContainerRef}
          // SỬA 2: Giảm pb-8 xuống pb-4 để khoảng cách dưới thẻ hẹp lại
          className="flex overflow-x-auto gap-4 md:gap-8 pb-4 -mx-4 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth items-stretch scroll-pl-4"
        >
          {TEACHERS.map((teacher) => (
            <div 
              key={teacher.id} 
              className="
                w-[calc(100vw-32px)] md:w-[350px] 
                flex-shrink-0 
                bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 
                group/card snap-start flex flex-col
              "
            >
              <div className="w-full aspect-square relative overflow-hidden bg-gray-50 border-b border-gray-100">
                 <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-contain"
                 />
              </div>
              
              <div className="py-3 text-center bg-white">
                  <button className="text-blue-600 font-bold text-sm hover:underline uppercase tracking-wide">
                      Xem chi tiết hồ sơ
                  </button>
              </div>
              {/* <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 italic leading-relaxed line-clamp-3 md:line-clamp-none flex-grow">
                    {teacher.bio}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <button className="text-blue-600 font-semibold text-sm hover:underline uppercase tracking-wide">
                        Xem chi tiết hồ sơ
                    </button>
                </div>
              </div> */}
            </div>
          ))}
          
           <div className="w-1 md:hidden flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}