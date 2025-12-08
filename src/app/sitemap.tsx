import { MetadataRoute } from 'next'

// Giả sử đây là hàm lấy danh sách bài viết từ API hoặc Database của bạn
// Bạn cần thay thế bằng hàm thực tế bạn đang dùng để fetch data
async function getAllBlogSlugs() {
  // Ví dụ return: [{ slug: 'hoc-nextjs-co-ban', updatedAt: '2023-12-01' }, ...]
  // return await fetch('https://api.cua-ban.com/posts').then(res => res.json())
  return [] 
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://erg.edu.vn' // Thay domain thật của bạn vào đây

  // 1. Các trang tĩnh (Static Pages) - Dựa trên folder structure của bạn
  const staticRoutes = [
    '',             // Trang chủ
    '/gioi-thieu',
    '/khoa-hoc',
    '/lo-trinh',
    '/tin-tuc',
    '/lien-he',
    '/giao-vien',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Trang chủ ưu tiên cao nhất
  }))

  // 2. Các trang động (Dynamic Pages) - Ví dụ cho bài viết tin tức
  const blogPosts = await getAllBlogSlugs()
  const dynamicRoutes = blogPosts.map((post: any) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Gộp cả 2 lại
  return [...staticRoutes, ...dynamicRoutes]
}