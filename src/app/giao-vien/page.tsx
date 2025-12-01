
'use client';

import React, { useRef, useEffect } from 'react';
import { TEACHERS } from '@/data/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeachersPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Hàm tính toán khoảng cách cuộn dựa trên thiết bị
  const getScrollItemWidth = () => {
    if (scrollContainerRef.current) {
      // Trên mobile, thẻ chiếm gần hết màn hình, lấy chiều rộng thực tế của thẻ đầu tiên
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement;
      return firstCard ? firstCard.clientWidth + 16 : 350; // +16 là gap
    }
    return 350;
  };

  // Hàm xử lý cuộn thủ công (Nút bấm)
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

  // Logic tự động cuộn (Auto Scroll)
  useEffect(() => {
    const autoScroll = () => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = getScrollItemWidth();
        
        // Kiểm tra xem đã cuộn đến cuối chưa (cho phép sai số nhỏ)
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        const isEnd = current.scrollLeft >= maxScrollLeft - 10;
        
        if (isEnd) {
          // Nếu cuối thì quay về đầu
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Nếu chưa thì cuộn tiếp sang phải
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };

    const timer = setInterval(autoScroll, 3000); // 3 giây
    
    // Xóa timer khi component unmount để tránh rò rỉ bộ nhớ
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in pb-16 bg-gray-50 min-h-screen">
      {/* Banner Tiêu đề */}
      <div className="bg-blue-900 py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Đội Ngũ Giáo Viên</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Những người truyền lửa đam mê và tri thức tại ERG.
          </p>
        </div>
      </div>

      {/* Khu vực Carousel */}
      <div className="container mx-auto px-4 md:px-6 relative group">
        
        {/* Nút Prev (Ẩn trên mobile, hiện khi hover trên desktop) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 md:flex hidden"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Nút Next (Ẩn trên mobile, hiện khi hover trên desktop) */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 md:flex hidden"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Container chứa các thẻ - Scrollable */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-8 pb-8 -mx-4 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth items-stretch"
        >
          {TEACHERS.map((teacher) => (
            <div 
              key={teacher.id} 
              // Mobile: min-w-[calc(100vw-32px)] -> Full màn hình (trừ padding container 16px*2)
              // Desktop: min-w-[350px] -> Cố định chiều rộng
              className="min-w-[calc(100vw-32px)] md:min-w-[350px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group/card snap-center flex-shrink-0 flex flex-col"
            >
              <div className="h-80 overflow-hidden relative shrink-0">
                 <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                    <p className="text-white font-bold text-xl">{teacher.name}</p>
                    <p className="text-blue-300 font-medium">{teacher.subject}</p>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 italic leading-relaxed line-clamp-4 flex-grow">{teacher.bio}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <button className="text-blue-600 font-semibold text-sm hover:underline">
                        Xem chi tiết hồ sơ
                    </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Thẻ filler ẩn để đảm bảo padding cuối cùng khi scroll trên mobile */}
           <div className="min-w-[1px] md:hidden"></div>
        </div>
      </div>
    </div>
  );
}
