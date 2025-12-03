import { NextResponse } from 'next/server';

// 1. Ép buộc API này luôn chạy ở chế độ Dynamic (Server-side) mỗi khi gọi
// Tránh việc Next.js cố gắng cache hoặc build tĩnh gây lỗi
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  // 2. Bypass lỗi SSL (Đặt ở đây để chắc chắn chạy mỗi request)
  // Fix lỗi "unable to verify the first certificate" của các trang .gov.vn
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const RSS_URL = 'https://moet.gov.vn/rss/2007219/101914846.rss';

  console.log('Bắt đầu gọi RSS từ server...'); // Xem log này trong Vercel/VPS Logs

  try {
    // 3. Sử dụng fetch với timeout thủ công (vì fetch mặc định chờ rất lâu)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // Timeout sau 15 giây

    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://moet.gov.vn/',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      signal: controller.signal,
      cache: 'no-store', // Không cache tại tầng fetch
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Lỗi HTTP từ MOET: ${response.status}`);
      throw new Error(`Server MOET trả về lỗi: ${response.status}`);
    }

    const xmlData = await response.text();
    console.log('Đã nhận dữ liệu thành công, độ dài:', xmlData.length);

    // Kiểm tra sơ bộ xem có phải XML không
    if (!xmlData || !xmlData.includes('<rss') && !xmlData.includes('<item')) {
         throw new Error('Dữ liệu trả về không đúng định dạng XML');
    }

    return new NextResponse(xmlData, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'no-store, max-age=0', // Tắt cache browser để test
      },
    });

  } catch (error) {
    console.error('SERVER SIDE ERROR:', error);
    
    let errorMessage = 'Lỗi không xác định';
    if (error instanceof Error) {
        errorMessage = error.message;
        
        // Chẩn đoán lỗi cụ thể cho bạn dễ sửa
        if (error.name === 'AbortError') {
            errorMessage = 'Kết nối tới MOET bị Timeout (quá 15s). Server có thể đang chặn IP của bạn.';
        } else if (errorMessage.includes('ECONNREFUSED')) {
             errorMessage = 'Server MOET từ chối kết nối.';
        }
    }

    // Trả về JSON lỗi để Client hiển thị
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}