import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Thay thế bằng domain thực tế của bạn
  const baseUrl = 'https://erg.edu.vn' 

  return {
    rules: {
      userAgent: '*', // Quy định này áp dụng cho TẤT CẢ các loại bot (Google, Bing, Yahoo...)
      allow: '/',     // Cho phép quét toàn bộ website
      disallow: [     // Danh sách các đường dẫn CẤM bot vào
        '/api/',      // Thường API trả về JSON data, bot không cần index (trừ RSS)
        '/admin/',    // Trang quản trị (nếu có)
        '/private/',  // Các trang riêng tư
        '/tai-khoan/',// Trang thông tin cá nhân người dùng
      ],
    },
    // Quan trọng: Chỉ đường cho Bot tìm thấy bản đồ site
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}