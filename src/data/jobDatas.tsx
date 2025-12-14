import { JobSummary, JobDetail } from "@/data/types";
// --- Dữ liệu cho trang Danh sách (Job Listing) ---
export const JOB_LISTINGS: JobSummary[] = [
    {
        id: '1',
        slug: 'tro-giang-giao-vien',
        title: "TRỢ GIẢNG, GIÁO VIÊN",
        salary: "Thương lượng",
        quantity: "5",
        workSchedule: "8h/ngày từ thứ Hai đến thứ Bảy",
        deadline: "12/12/2025",
        requirements: [
            "Không yêu cầu kinh nghiệm, chỉ cần nắm vững kiến thức chuyên môn.",
            "Có khả năng tự học và nghiên cứu tài liệu chuyên ngành.",
            "Nghiêm túc, năng động, nhiệt huyết với nghề.", 
        ],
    },
    {
        id: '2',
        slug: 'nhan-vien-it',
        title: "NHÂN VIÊN IT",
        salary: "Thương lượng",
        quantity: "3",
        workSchedule: "8h/ngày từ thứ Hai đến thứ Bảy",
        deadline: "30/11/2024",
        requirements: [
            "Yêu cầu tốt nghiệp ngành CNTT/Kỹ thuật phần mềm.",
            "Có kinh nghiệm thực tế về lập trình hoặc quản trị hệ thống.",
            "Kỹ năng giải quyết vấn đề tốt.",
        ],
    },
];

// --- Dữ liệu cho trang Chi tiết (Job Detail) - Dựa trên ảnh 3 ---
// Đây là chi tiết cho vị trí "Giáo viên tin học, Trợ giảng"
export const IT_TEACHER_DETAIL: JobDetail = {
    title: "Tuyển dụng Giáo viên tin học, Trợ giảng",
    postDate: "12/12/2025",
    summary: "Trung tâm tin học ERG tuyển dụng giáo viên tin học, trợ giảng dạy các chương trình tin học văn phòng như chứng chỉ MOS, IC3, CNTT cơ bản, CNTT nâng cao tại các trường học đối tác. Cùng tìm hiểu ngay mô tả công việc, điều kiện dự tuyển cũng như phúc lợi khi gia nhập Trung tâm tin học ERG nhé!",
    jobDescription: [
        "Tham gia giảng dạy các chương trình Tin học Văn phòng: MOS, IC3, CNTT Cơ Bản (CCA), CNTT Nâng Cao (CCB).",
        "Làm việc tại các chi nhánh của Trung tâm tin học ERG hoặc các trường TIỂU HỌC, THCS, THPT là đơn vị đối tác của Edurise Global.",
    ],
    requirements: [
        "Giới tính: Nam – Nữ",
        "Không yêu cầu có kinh nghiệm, được tham gia các lớp đào tạo kỹ năng và chuyên môn",
        "Đã tốt nghiệp Đại học, ngành Công nghệ thông tin (Có bằng tốt nghiệp chính thức hoặc giấy chứng nhận tốt nghiệp tạm thời)",
        "Trung thực, năng động và có trách nhiệm cao trong công việc",
    ],
    benefits: [
        // Dữ liệu Phúc lợi không có trong ảnh 3, thêm vào cho đầy đủ cấu đ
        "Lương cạnh tranh, thưởng theo hiệu suất công việc.",
        "Môi trường làm việc trẻ trung, năng động, chuyên nghiệp.",
        "Cơ hội thăng tiến rõ ràng lên các vị trí quản lý.",
    ],
    quickInfo: {
        location: "TP. Hồ Chí Minh",
        position: "Giáo viên / Trợ giảng",
    }
};

// Hàm giả lập lấy chi tiết công việc theo slug
export const getJobDetailBySlug = (slug: string): JobDetail | undefined => {
    // Trong thực tế, bạn sẽ dùng slug để gọi API hoặc tìm trong danh sách
    if (slug === 'tro-giang-giao-vien' || slug === 'giao-vien-tin-hoc') {
        return IT_TEACHER_DETAIL;
    }
    return undefined;
};