import { Course, NavItem, NewsItem, Teacher, Testimonial, RoadmapSection } from '@/data/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/gioi-thieu' },
  { label: 'Khóa học', path: '/khoa-hoc' },
  { label: 'Lộ trình', path: '/lo-trinh' },
  { label: 'Đội ngũ giáo viên', path: '/giao-vien' },
  { label: 'Tin tức', path: '/tin-tuc' },
  { label: 'Liên hệ', path: '/lien-he' },
];

export const HERO_SLIDES = [
  {
    image: '/unnamed.webp',
    title: 'Khơi dậy tiềm năng - Vươn tới thành công',
    subtitle: 'Môi trường giáo dục hiện đại, sáng tạo giúp học sinh phát triển toàn diện.',
  },
  {
    image: '/unnamed.webp',
    title: 'Đội ngũ giáo viên tâm huyết',
    subtitle: 'Chúng tôi đồng hành cùng sự phát triển của con em bạn.',
  },
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Toán tư duy logic',
    category: 'Toán học',
    grade: 'Lớp 6-9',
    description: 'Phát triển tư duy logic, rèn luyện kỹ năng giải quyết vấn đề thông qua các bài toán thực tế.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 tháng',
    students: 120,
  },
  {
    id: 'c2',
    title: 'Tiếng Anh giao tiếp',
    category: 'Ngoại ngữ',
    grade: 'Mọi lứa tuổi',
    description: 'Tự tin giao tiếp với người nước ngoài, chuẩn hóa phát âm và ngữ điệu.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '6 tháng',
    students: 250,
  },
  {
    id: 'c3',
    title: 'Luyện thi Vật Lý',
    category: 'Khoa học tự nhiên',
    grade: 'Lớp 10-12',
    description: 'Nắm vững kiến thức nền tảng và nâng cao, chinh phục các kỳ thi quan trọng.',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 tháng',
    students: 85,
  },
  {
    id: 'c4',
    title: 'Hóa học ứng dụng',
    category: 'Khoa học tự nhiên',
    grade: 'Lớp 8-12',
    description: 'Khám phá thế giới hóa học đầy màu sắc qua các thí nghiệm thực hành thú vị.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 tháng',
    students: 90,
  },
  {
    id: 'c5',
    title: 'Ngữ văn cảm thụ',
    category: 'Khoa học xã hội',
    grade: 'Lớp 6-12',
    description: 'Khơi gợi tình yêu văn học, rèn luyện kỹ năng viết và cảm thụ tác phẩm.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 'Quanh năm',
    students: 150,
  },
  {
    id: 'c6',
    title: 'Lập trình cơ bản',
    category: 'Công nghệ',
    grade: 'Lớp 5-12',
    description: 'Bước đầu làm quen với tư duy lập trình, tạo ra các sản phẩm công nghệ nhỏ.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '6 tháng',
    students: 200,
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: 'ThS. Nguyễn Văn A',
    subject: 'Toán học',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: '10 năm kinh nghiệm giảng dạy tại các trường chuyên, tác giả nhiều đầu sách tham khảo.',
  },
  {
    id: 't2',
    name: 'Cô Trần Thị B',
    subject: 'Tiếng Anh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'IELTS 8.5, phương pháp giảng dạy hiện đại, truyền cảm hứng.',
  },
  {
    id: 't3',
    name: 'TS. Lê Văn C',
    subject: 'Vật Lý',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Chuyên gia luyện thi Olympic, nhiệt huyết và tận tâm với học sinh.',
  },
];

// export const TESTIMONIALS: Testimonial[] = [
//   {
//     id: 'ts1',
//     name: 'Phạm Minh H',
//     role: 'Học sinh lớp 12',
//     content: 'Nhờ thầy cô tại ERG, em đã tự tin hơn rất nhiều và đỗ vào trường đại học mơ ước.',
//     avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
//   },
//   {
//     id: 'ts2',
//     name: 'Chị Nguyễn Thu Thảo',
//     role: 'Phụ huynh',
//     content: 'Môi trường học tập rất tốt, cơ sở vật chất hiện đại. Tôi rất yên tâm khi gửi con theo học tại đây.',
//     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
//   },
// ];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Lễ tổng kết năm học 2023-2024',
    date: '25/05/2024',
    summary: 'Một năm học đầy cảm xúc và thành công rực rỡ của thầy và trò hệ thống giáo dục ERG.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'n2',
    title: 'Khai giảng khóa luyện thi cấp tốc',
    date: '01/06/2024',
    summary: 'Chuẩn bị hành trang tốt nhất cho kỳ thi chuyển cấp quan trọng sắp tới.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'n3',
    title: 'Hội thảo: Đồng hành cùng con vào lớp 10',
    date: '15/06/2024',
    summary: 'Chia sẻ kinh nghiệm, giải đáp thắc mắc cho phụ huynh và học sinh.',
    image: 'https://images.unsplash.com/photo-1544531696-32269279a071?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];
export const ROADMAP_DATA: RoadmapSection[] = [
  {
    id: 1,
    title: '1. CHƯƠNG TRÌNH CHO NGƯỜI MỚI BẮT ĐẦU',
    items: [
      'Máy tính cơ bản cho người mới bắt đầu',
      'Soạn thảo văn bản Word cơ bản',
      'Bảng tính Excel cơ bản'
    ]
  },
  {
    id: 2,
    title: '2. TIN HỌC VĂN PHÒNG CƠ BẢN',
    items: [
      'Máy tính cơ bản',
      'Soạn thảo văn bản hành chính',
      'Excel cơ bản',
      'Thuyết trình với PowerPoint'
    ]
  },
  {
    id: 3,
    title: '3. TIN HỌC VĂN PHÒNG NÂNG CAO',
    items: [
      'Máy tính nâng cao',
      'Word nâng cao',
      'Excel nâng cao'
    ]
  },
  {
    id: 4,
    title: '4. TIN HỌC VĂN PHÒNG CHUYÊN SÂU',
    items: [
      'Excel chuyên sâu',
      'Lập trình VBA Excel',
      'Tổng hợp & phân tích dữ liệu với Pivot Table',
      'Power Query'
    ]
  },
  {
    id: 5,
    title: '5. TIN HỌC TRẺ EM – HỌC SINH',
    items: [
      'Lập trình Scratch',
      'Ứng dụng tin học cơ bản',
      'Ứng dụng tin học nâng cao',
      'Lập trình Python cho trẻ em'
    ]
  },
  {
    id: 6,
    title: '6. TIN HỌC QUỐC TẾ',
    items: [
      'Chương trình được xây dựng theo chuẩn IC3-Spark, IC3 và MOS, giúp học sinh đủ năng lực thi chứng chỉ quốc tế.'
    ]
  }
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ts1',
    name: 'Phạm Minh H',
    role: 'Học sinh lớp 12',
    content: 'Nhờ thầy cô tại ERG, em đã tự tin hơn rất nhiều và đỗ vào trường đại học mơ ước. Môi trường học tập rất thân thiện và chuyên nghiệp.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'ts2',
    name: 'Chị Nguyễn Thu Thảo',
    role: 'Phụ huynh học sinh',
    content: 'Tôi rất yên tâm khi gửi con theo học tại ERG. Các con không chỉ được học kiến thức mà còn được rèn luyện kỹ năng mềm rất tốt.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'ts3',
    name: 'Lê Văn Nam',
    role: 'Sinh viên ĐH Bách Khoa',
    content: 'Khóa học Excel chuyên sâu đã giúp mình xử lý dữ liệu nhanh chóng, phục vụ rất tốt cho đồ án tốt nghiệp và công việc sau này.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'ts4',
    name: 'Lê Văn Linh',
    role: 'Sinh viên ĐH Kinh Tế',
    content: 'Khóa học Excel chuyên sâu đã giúp mình xử lý dữ liệu nhanh chóng, phục vụ rất tốt cho đồ án tốt nghiệp và công việc sau này.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
];
export const TRAINING_GOALS = [
  'Thành thạo kỹ năng máy tính và tin học văn phòng',
  'Tăng năng suất làm việc và khả năng ứng dụng thực tế',
  'Chuẩn bị kiến thức vững chắc để thi chứng chỉ quốc tế',
  'Phát triển tư duy và kỹ năng công nghệ cho học sinh'
];