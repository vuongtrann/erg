// app/api/rss/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Bỏ qua lỗi SSL (Self-signed certificate)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const RSS_URL = 'https://moet.gov.vn/rss/2007219/101914846.rss';

  try {
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://moet.gov.vn/',
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Lỗi từ server MOET: ${response.status} ${response.statusText}` }, 
        { status: response.status }
      );
    }

    const xmlData = await response.text();

    return new NextResponse(xmlData, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59',
      },
    });

  } catch (error) {
    // --- SỬA LỖI TẠI ĐÂY ---
    // Không dùng (error: any). Thay vào đó, để mặc định và kiểm tra kiểu:
    console.error('RSS Fetch Error Chi tiết:', error);
    
    // Kiểm tra nếu error là một instance của Error để lấy message an toàn
    const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định từ Server';

    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}