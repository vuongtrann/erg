import { JobDetail, JobSummary } from "@/data/types";

// --- BƯỚC 1: TẠO KHO DỮ LIỆU CHI TIẾT (DATABASE) ---
// Key của object này (ví dụ: 'nhan-vien-it') PHẢI TRÙNG KHỚP với slug
const JOB_DATABASE: Record<string, JobDetail> = {
    // 1. Job Giáo viên / Trợ giảng
    'tro-giang-giao-vien': {
        title: "Tuyển dụng Giáo viên tin học, Trợ giảng",
        postDate: "12/12/2025",
        salary: "Thỏa thuận",
        quantity: "5",
        workType: "8h/ngày từ thứ Hai đến thứ Bảy",
        deadline: "30/01/2026",
        location: "Hà Nội", // Sửa lại cho khớp ảnh (Hà Nội) thay vì HCM
        summary: "Trung tâm tin học ERG tuyển dụng giáo viên tin học, trợ giảng dạy các chương trình tin học văn phòng như chứng chỉ MOS, IC3...",

        jobDescription: [
            "Tham gia giảng dạy các chương trình Tin học Văn phòng: MOS, IC3, CNTT Cơ Bản (CCA), CNTT Nâng Cao (CCB).",
            "Làm việc tại các chi nhánh của Trung tâm tin học ERG hoặc các trường TIỂU HỌC, THCS, THPT đối tác.",
            "Soạn thảo giáo án, bài giảng theo khung chương trình.",
            "Theo dõi, đánh giá kết quả học tập của học sinh."
        ],
        requirements: [
            "Giới tính: Nam – Nữ.",
            "Không yêu cầu có kinh nghiệm, được tham gia đào tạo.",
            "Tốt nghiệp Đại học/Cao đẳng chuyên ngành CNTT hoặc Sư phạm Tin.",
            "Trung thực, năng động và có trách nhiệm cao.",
            "Có laptop cá nhân để phục vụ công việc."
        ],
        benefits: [
            "Mức lương cạnh tranh, thưởng theo năng lực giảng dạy.",
            "Được đóng BHXH, BHYT theo quy định nhà nước.",
            "Môi trường làm việc giáo dục, trẻ trung, chuyên nghiệp.",
            "Cơ hội thăng tiến lên Quản lý chuyên môn."
        ],
        quickInfo: {
            location: "Hà Nội",
            position: "Giáo viên / Trợ giảng",
        }
    },

    // 2. Job Nhân viên IT (Tôi đã viết thêm dữ liệu này cho bạn)
    'nhan-vien-it': {
        title: "Nhân viên IT Helpdesk / Quản trị mạng",
        postDate: "10/12/2025",
        salary: "Thỏa thuận",
        quantity: "3",
        workType: "8h/ngày từ thứ Hai đến thứ Bảy",
        deadline: "30/11/2024",
        location: "Hà Nội",
        summary: "Tìm kiếm nhân viên IT chịu trách nhiệm vận hành hệ thống mạng, hỗ trợ kỹ thuật cho văn phòng và các cơ sở đào tạo.",

        jobDescription: [
            "Cài đặt, cấu hình và bảo trì hệ thống máy tính, mạng LAN/WAN, Wifi tại văn phòng.",
            "Hỗ trợ người dùng (user) khắc phục các sự cố về phần cứng, phần mềm, máy in.",
            "Quản lý tài sản thiết bị CNTT của công ty.",
            "Đảm bảo an toàn dữ liệu và bảo mật hệ thống."
        ],
        requirements: [
            "Tốt nghiệp Cao đẳng/Đại học chuyên ngành CNTT, Điện tử viễn thông.",
            "Có ít nhất 1 năm kinh nghiệm ở vị trí tương đương.",
            "Am hiểu về hệ điều hành Windows, phần cứng máy tính và các thiết bị mạng (Router, Switch).",
            "Kỹ năng giải quyết vấn đề tốt, nhanh nhẹn, trung thực."
        ],
        benefits: [
            "Lương cứng + Phụ cấp chuyên cần.",
            "Review tăng lương 6 tháng/lần.",
            "Được tham gia các khóa đào tạo nâng cao chứng chỉ mạng (CCNA, MCSA).",
            "Du lịch hè, Year End Party cùng công ty."
        ],
        quickInfo: {
            location: "Hà Nội",
            position: "Nhân viên IT",
        }
    }
};

// --- BƯỚC 2: TẠO DANH SÁCH TỰ ĐỘNG (JOB_LISTINGS) ---
// Tự động map từ Database ra để đảm bảo dữ liệu luôn đồng nhất
export const JOB_LISTINGS: JobSummary[] = Object.keys(JOB_DATABASE).map((slug, index) => {
    const job = JOB_DATABASE[slug];
    return {
        id: (index + 1).toString(),
        slug: slug, // Slug lấy từ key của object
        title: job.title,
        salary: job.salary,
        quantity: job.quantity,
        workSchedule: job.workType, // Map workType sang workSchedule
        deadline: job.deadline,
        location: job.location,
        requirements: job.requirements.slice(0, 3) // Lấy 3 dòng đầu yêu cầu làm tóm tắt
    };
});

// --- BƯỚC 3: HÀM LẤY CHI TIẾT (QUAN TRỌNG NHẤT) ---
export const getJobDetailBySlug = (slug: string): JobDetail | undefined => {
    // Tìm trong database xem có key nào trùng với slug không
    return JOB_DATABASE[slug];
};