'use client';

import { useState, useEffect } from 'react';

const AdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isMounted) return null;
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose} 
      />

      {/* POPUP CONTENT */}
      {/* Mobile: w-full max-w-[90%] (nhỏ gọn) | Desktop: md:max-w-3xl (Rất rộng) */}
      <div className={`
          relative w-full max-w-[90%] md:max-w-3xl
          max-h-[90vh] overflow-y-auto custom-scrollbar
          bg-white rounded-xl md:rounded-2xl shadow-2xl 
          transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}
      `}>
        
        {/* Header Line */}
        <div className="h-1.5 md:h-2 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-1 md:p-2 rounded-full transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Padding: Mobile nhỏ (p-5), Desktop to (p-8) */}
        <div className="p-5 md:p-10 text-center">
          
          {/* Icon: Mobile nhỏ (h-12), Desktop to (h-20) */}
          <div className="mx-auto mb-3 md:mb-6 flex h-12 w-12 md:h-20 md:w-20 items-center justify-center rounded-full bg-red-50 text-red-700 ring-4 ring-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Title: Mobile chữ vừa (text-xl), Desktop chữ to (text-4xl) */}
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-tight">
            Cam kết chất lượng
          </h2>
          
          {/* Description: Ẩn bớt text trên mobile nếu cần hoặc để size nhỏ */}
          <p className="text-gray-600 mb-5 md:mb-8 text-xs md:text-lg leading-relaxed max-w-lg mx-auto">
            ERG cam kết tỷ lệ học viên đạt chuẩn đầu ra và vượt qua các kỳ thi quốc tế.
          </p>

          {/* Grid Layout: Gap nhỏ mobile (gap-3), Gap to desktop (gap-8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-6 md:mb-10 px-0 md:px-4">
            
            {/* Box 1 */}
            <div className="bg-blue-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-blue-200 hover:border-blue-400 transition-colors group flex flex-col justify-center items-center">
              <p className="text-blue-600/80 text-[10px] md:text-sm uppercase font-bold mb-1 md:mb-2 tracking-wide">Khối TH, THCS, THPT</p>
              {/* Số liệu: Mobile (text-3xl), Desktop (text-5xl) */}
              <div className="text-3xl md:text-5xl font-extrabold text-blue-700 my-0 md:my-1">
                &gt;90<span className="text-lg md:text-2xl align-top">%</span>
              </div>
              <p className="text-[10px] md:text-sm text-blue-500 font-medium">Đạt chuẩn đầu ra</p>
            </div>

            {/* Box 2 */}
            <div className="bg-red-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-red-100 hover:border-red-300 transition-colors group flex flex-col justify-center items-center">
              <p className="text-red-600/80 text-[10px] md:text-sm uppercase font-bold mb-1 md:mb-2 tracking-wide">Khối Cao Đẳng - ĐH</p>
              <div className="text-3xl md:text-5xl font-extrabold text-red-700 my-0 md:my-1">
                100<span className="text-lg md:text-2xl align-top">%</span>
              </div>
              <p className="text-[10px] md:text-sm text-red-500 font-medium">Đạt chuẩn đầu ra</p>
            </div>

          </div>

          {/* Button Zalo: Padding nhỏ mobile */}
          <div className="max-w-md mx-auto">
            <a 
              href="https://zalo.me/0766144888"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleClose} 
              className="block w-full bg-gray-900 hover:bg-blue-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Liên hệ tư vấn ngay
            </a>
          </div>
          
          <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-gray-400">
            * Dựa trên thống kê kết quả đào tạo thực tế
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdPopup;