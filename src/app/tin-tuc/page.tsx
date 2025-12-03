'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Loader2, ChevronRight as ChevronRightIcon } from 'lucide-react';

const DEFAULT_IMAGE = 'https://moet.gov.vn/upload/2007219/20251020/image_2025-10-20_11-46-19_998cd.png';
const ITEMS_PER_PAGE = 9;

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // Thêm state để hiển thị lỗi nếu có
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // --- Các hàm tiện ích giữ nguyên ---
  const extractImage = (content: string | null): string => {
    if (!content) return DEFAULT_IMAGE;
    // Regex tìm src ảnh, hỗ trợ cả dấu nháy đơn và kép
    const imgRegex = /<img[^>]+src=['"]([^'"]+)['"]/;
    const match = content.match(imgRegex);
    if (match && match[1]) {
      let src = match[1];
      // Nếu ảnh là đường dẫn tương đối (bắt đầu bằng /)
      if (src.startsWith('/')) {
        src = `https://moet.gov.vn${src}`;
      }
      return src;
    }
    return DEFAULT_IMAGE;
  };

  const stripHtml = (html: string | null): string => {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  const getTextContent = (element: Element | null, tagName: string): string => {
    if (!element) return '';
    const node = element.querySelector(tagName);
    return node?.textContent || '';
  };

  // --- useEffect Fetch Data ---
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setErrorMsg(null);
      try {
        // GỌI API ROUTE CỦA MÌNH (Không gọi trực tiếp sang MOET hay AllOrigins)
        const res = await fetch('/api/rss');
        
        if (!res.ok) {
           throw new Error('Không thể kết nối đến server lấy tin');
        }

        const xmlText = await res.text();

        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        
        // Kiểm tra xem có phải XML lỗi không
        if (xmlDoc.querySelector("parsererror")) {
             throw new Error("Lỗi phân tích cú pháp XML");
        }

        const items = xmlDoc.querySelectorAll("item");
        
        const formattedNews: NewsItem[] = Array.from(items).map((item) => {
          const descriptionHtml = getTextContent(item, "description");
          const rawPubDate = getTextContent(item, "pubDate");
          
          return {
            title: getTextContent(item, "title"),
            pubDate: rawPubDate,
            link: getTextContent(item, "link"),
            thumbnail: extractImage(descriptionHtml),
            description: stripHtml(descriptionHtml)
          };
        });

        // RSS thường đã sắp xếp sẵn, nhưng sort lại cho chắc chắn
        formattedNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        setNews(formattedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setErrorMsg('Không thể tải tin tức lúc này. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // --- Logic Phân trang & Render (Giữ nguyên như code cũ của bạn) ---
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="bg-blue-900 py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tin Tức Giáo Dục</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất từ Bộ Giáo dục và Đào tạo.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
            <p className="text-gray-500">Đang tải dữ liệu...</p>
          </div>
        ) : errorMsg ? (
          <div className="text-center py-10 text-red-500 bg-red-50 rounded-xl border border-red-100">
            <p className="font-medium">{errorMsg}</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentNews.map((item, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative h-52 overflow-hidden block">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Bộ GD & ĐT
                    </div>
                  </a>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-3">
                      <Calendar size={16} />
                      <span>{formatDate(item.pubDate)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center gap-1"
                      >
                        Xem chi tiết <ChevronRightIcon size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border ${
                    currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  (number === 1 || number === totalPages || (number >= currentPage - 1 && number <= currentPage + 1)) ? (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors border ${
                        currentPage === number
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {number}
                    </button>
                  ) : (
                    number === currentPage - 2 || number === currentPage + 2 ? (
                      <span key={number} className="text-gray-400 px-1">...</span>
                    ) : null
                  )
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border ${
                    currentPage === totalPages 
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {!loading && news.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">Chưa có tin tức nào được cập nhật.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}