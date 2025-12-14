'use client';

// 1. Thêm import { use } từ 'react'
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
    AlertCircle
} from 'lucide-react';

// Import từ file data
import { JobDetail } from '@/data/types';
import { getJobDetailBySlug } from '@/data/jobDatas';

// 2. Cập nhật Type: params bây giờ là một Promise
interface JobDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex flex-col mb-4 md:mb-0">
        <div className="flex items-center text-gray-500 mb-1">
            <span className="mr-2 text-gray-400">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-gray-900 font-semibold pl-8 md:pl-0 block">{value}</span>
    </div>
);

const JobDetailPage = ({ params }: JobDetailPageProps) => {
    // 3. SỬ DỤNG React.use() ĐỂ GIẢI NÉN PARAMS
    const { slug } = use(params);

    // Lấy dữ liệu dựa trên slug đã giải nén
    const job: JobDetail | undefined = getJobDetailBySlug(slug);

    // Xử lý trường hợp không tìm thấy
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

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all whitespace-nowrap flex items-center transform hover:scale-105">
                        <CheckCircle2 className="mr-2 w-5 h-5" />
                        Nộp hồ sơ
                    </button>
                </div>
            </div>

            {/* BODY CONTENT */}
            <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* CỘT TRÁI */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Box Thông tin công việc */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-3">
                            Thông tin công việc
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                            <InfoItem icon={<Building2 size={18}/>} label="Đơn vị" value="Trung tâm ERG" />
                            <InfoItem icon={<Users size={18}/>} label="Số lượng tuyển" value={job.quantity} />
                            <InfoItem icon={<Clock size={18}/>} label="Loại hình" value={job.workType} />
                            <InfoItem icon={<DollarSign size={18}/>} label="Mức lương" value={job.salary} />
                            <InfoItem icon={<MapPin size={18}/>} label="Địa điểm" value={job.location} />
                            <InfoItem icon={<Calendar size={18}/>} label="Hạn nộp CV" value={job.deadline} />
                        </div>
                    </div>

                    {/* Chi tiết công việc */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-6 border-b pb-2 uppercase">
                            Chi tiết công việc
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Mô tả công việc
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
                                    {job.jobDescription.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Yêu cầu ứng viên
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
                                    {job.requirements.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 text-base flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Quyền lợi
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-2">
                                    {job.benefits.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CỘT PHẢI */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                            <MapPin className="mr-2 text-orange-500" size={20}/>
                            Nơi làm việc
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{job.location}</p>
                        <div className="bg-orange-100 h-32 rounded-lg flex items-center justify-center border border-orange-200">
                            <div className="text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Map" className="w-12 h-12 mx-auto mb-2 opacity-80" />
                                <span className="text-xs text-orange-600 font-medium">Bản đồ khu vực</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-4">
                            Trung tâm Tin học ERG
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Đơn vị đào tạo tin học hàng đầu.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetailPage;