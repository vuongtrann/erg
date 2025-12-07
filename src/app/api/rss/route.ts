// app/api/rss/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Bỏ qua lỗi SSL (Self-signed certificate)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // --- URL RSS MỚI ---
  const RSS_URL = 'https://giaoduc.edu.vn/feed/'; 
  // ---------------------

  try {
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        // Sử dụng User-Agent để tránh bị chặn
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        // Có thể xóa hoặc thay đổi Referer nếu cần
        'Referer': 'https://giaoduc.edu.vn/', 
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Lỗi từ server: ${response.status} ${response.statusText}` }, 
        { status: response.status }
      );
    }

    const xmlData = await response.text();

    return new NextResponse(xmlData, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8', // Thêm charset để đảm bảo hiển thị tiếng Việt
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
      },
    });

  } catch (error) {
    console.error('RSS Fetch Error Chi tiết:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định từ Server';

    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}