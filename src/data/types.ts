
export interface NavItem {
  label: string;
  path: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  grade: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  format?: string;
  curriculum?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface RoadmapSection {
  id: number;
  title: string;
  items: string[];
}

export interface JobItem {
    id: number;
    title: string;
    salary: string; // Mức lương: "8 - 20 triệu/tháng", "Thỏa thuận"
    quantity: string; // Số lượng: "1", "Không giới hạn"
    workSchedule: string; // Thời gian làm việc: "8h/ngày từ thứ Hai đến thứ Bảy"
    deadline: string; // Hạn nộp: "30/11/2024"
    requirements: string[]; // Điều kiện/yêu cầu công việc
    // Thông tin bổ sung để tạo độ chân thực
    location: string;
    descriptionShort: string;
    isUrgent: boolean;
}

// Định nghĩa cấu trúc cho Job Card (dùng trong trang danh sách)
export interface JobSummary {
    id: string;
    slug: string; // Dùng cho URL trang chi tiết
    title: string;
    salary: string;
    quantity: string;
    workSchedule: string;
    deadline: string;
    requirements: string[];
}

// Định nghĩa cấu trúc cho Job Detail (dùng trong trang chi tiết)
export interface JobDetail {
    title: string;
    postDate: string;
    summary: string;
    jobDescription: string[];
    requirements: string[];
    benefits: string[];
    quickInfo: {
        location: string;
        position: string;
    };
}