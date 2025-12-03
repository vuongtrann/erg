// app/api/rss/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Link RSS chuẩn bạn vừa cung cấp
  const RSS_URL = 'https://moet.gov.vn/rss/2007219/101914846.rss';

  try {
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        // QUAN TRỌNG: Giả lập User-Agent của Chrome để không bị chặn
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      },
      // Cache dữ liệu 5 phút để load nhanh hơn cho các lần sau
      next: { revalidate: 300 } 
    });

    if (!response.ok) {
      return NextResponse.json({ error: `MOET Server returned ${response.status}` }, { status: response.status });
    }

    const xmlData = await response.text();

    // Trả về XML cho Client
    return new NextResponse(xmlData, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=300, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('RSS Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}