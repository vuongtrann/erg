'use client';

import React, { use } from 'react';
import {
    Briefcase,
    MapPin,
    DollarSign,
    Users,
    Clock,
    Calendar,
    Building2,
    CheckCircle2,
    AlertCircle,
    Info // Thêm icon Info
} from 'lucide-react';

// Import từ file data
import { JobDetail, EmployerInfo } from '@/data/types';
import { getJobDetailBySlug, EMPLOYER_INFO } from '@/data/jobDatas';

// --- 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU CÔNG TY ---


// --- 2. DỮ LIỆU CÔNG TY (EDURISE GLOBAL) ---
// const EMPLOYER_INFO: EmployerInfo = {
//     name: "Trung tâm Tin học ERG",
//     nameOfOrganization: "EDURISE GLOBAL CO., LTD",
//     tax: "0319007722",
//     mainAddress: "Tầng 6 Toà nhà 83B Hoàng Sa – Phường Tân Định – TP Hồ Chí Minh",
//     location: "Chi nhánh Bình Phú: 40-42 Bình Phú – Phường Bình Phú – TP Hồ Chí Minh.",
//     fieldOfActivity: [
//         "Cung cấp giải pháp CNTT, Hoạt động chuyên môn, khoa học và công nghệ khác.",
//         "Đào tạo sơ cấp.",
//         "Dạy máy tính, ngoại ngữ, tin học, kỹ năng mềm.",
//         "Liên kết đào tạo các chương trình CNTT Quốc Gia và Quốc Tế."
//     ]
// };

// --- TYPE PROPS ---
interface JobDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// --- COMPONENT CON: INFO ITEM ---
const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex flex-col mb-4 md:mb-0">
        <div className="flex items-center text-gray-500 mb-1">
            <span className="mr-2 text-gray-400">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-gray-900 font-semibold pl-8 md:pl-0 block text-sm md:text-base">{value}</span>
    </div>
);

// --- COMPONENT CHÍNH ---
const JobDetailPage = ({ params }: JobDetailPageProps) => {
    // Sử dụng React.use() để giải nén params
    const { slug } = use(params);

    // Lấy dữ liệu công việc
    const job: JobDetail | undefined = getJobDetailBySlug(slug);

    // Xử lý khi không tìm thấy job
    if (!job) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-32 pb-20">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy công việc này!</h1>
            <p className="text-gray-500">Vui lòng kiểm tra lại đường dẫn hoặc công việc đã hết hạn.</p>
            <p className="text-sm text-gray-400 mt-4">Slug hiện tại: {slug}</p>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen font-sans pt-40 pb-10">

            {/* HEADER DẠNG CARD */}
            <div className="container mx-auto px-4 max-w-6xl mb-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase leading-tight">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap items-center text-gray-500 text-sm mt-3 gap-y-2">
                            <span className="flex items-center mr-4">
                                <MapPin size={18} className="mr-1.5 text-gray-400" />
                                {job.location}
                            </span>
                            <span className="hidden md:inline text-gray-300 mr-4">•</span>
                            <span className="flex items-center">
                                <Clock size={18} className="mr-1.5 text-gray-400" />
                                {job.workType}
                            </span>
                        </div>
                    </div>

                    <a
                        href="http://zalo.me/0967689259"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all whitespace-nowrap flex items-center transform hover:scale-105 cursor-pointer"
                    >
                        <CheckCircle2 className="mr-2 w-5 h-5" />
                        Nộp hồ sơ
                    </a>
                </div>
            </div>

            {/* BODY CONTENT */}
            <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* === CỘT TRÁI (NỘI DUNG CHÍNH) === */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Box 1: Thông tin tóm tắt */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-3">
                            Thông tin công việc
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                            {/* Dùng tên từ EMPLOYER_INFO cho đồng bộ */}
                            <InfoItem icon={<Building2 size={18}/>} label="Đơn vị" value={EMPLOYER_INFO.name} />
                            <InfoItem icon={<Users size={18}/>} label="Số lượng tuyển" value={job.quantity} />
                            <InfoItem icon={<Clock size={18}/>} label="Thời gian làm việc" value={job.workType} />
                            <InfoItem icon={<DollarSign size={18}/>} label="Mức lương" value={job.salary} />
                            <InfoItem icon={<MapPin size={18}/>} label="Địa điểm" value={job.location} />
                            <InfoItem icon={<Calendar size={18}/>} label="Hạn nộp CV" value={job.deadline} />
                        </div>
                    </div>

                    {/* Box 2: Chi tiết công việc (Mô tả, Yêu cầu, Quyền lợi) */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-6 border-b pb-2 uppercase">
                            Chi tiết công việc
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Mô tả công việc
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2 text-sm leading-relaxed">
                                    {job.jobDescription.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Yêu cầu ứng viên
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2 text-sm leading-relaxed">
                                    {job.requirements.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Quyền lợi
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2 text-sm leading-relaxed">
                                    {job.benefits.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === CỘT PHẢI (SIDEBAR) === */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Box 1: Nơi làm việc */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                            <MapPin className="mr-2 text-orange-500" size={20}/>
                            Nơi làm việc
                        </h3>
                        <p className="text-gray-700 text-sm font-medium mb-4 border-l-2 border-gray-200 pl-3">
                            {job.location}
                        </p>
                        <div className="bg-orange-50 h-32 rounded-lg flex items-center justify-center border border-orange-200 relative overflow-hidden group">
                            {/* Hiệu ứng hover giả lập */}
                            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-center relative z-10">
                                <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Map" className="w-12 h-12 mx-auto mb-2 opacity-90" />
                                <span className="text-xs text-orange-700 font-bold uppercase tracking-wide">Xem bản đồ</span>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: THÔNG TIN CÔNG TY (Đã cập nhật theo EMPLOYER_INFO) */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center border-b pb-3">
                            <Building2 className="mr-2 text-blue-600" size={20}/>
                            {EMPLOYER_INFO.name}
                        </h3>

                        <div className="space-y-4 text-sm text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Tên tổ chức:</p>
                                <p>{EMPLOYER_INFO.nameOfOrganization}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Trụ sở chính:</p>
                                <p>{EMPLOYER_INFO.mainAddress}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Chi nhánh:</p>
                                <p>{EMPLOYER_INFO.location}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900 mb-2 flex items-center">
                                    <Info size={14} className="mr-1 text-blue-500"/>
                                    Lĩnh vực hoạt động:
                                </p>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-500">
                                    {EMPLOYER_INFO.fieldOfActivity.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetailPage;