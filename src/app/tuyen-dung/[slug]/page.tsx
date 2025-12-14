'use client';

import React from 'react';
import { JobDetail } from '@/data/types';
import { getJobDetailBySlug, IT_TEACHER_DETAIL } from '@/data/jobDatas'; 
import { Briefcase, ChevronRight, BookOpen, ScrollText, AlertTriangle, Users } from 'lucide-react';

// Định nghĩa props cho trang chi tiết
interface JobDetailPageProps {
    params: {
        slug: string;
    }
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ params }) => {
    
    // Lấy dữ liệu chi tiết công việc theo slug.
    // Dùng IT_TEACHER_DETAIL làm dữ liệu mặc định/giả định cho mọi slug trong ví dụ này
    // Trong thực tế, bạn sẽ dùng: const job = getJobDetailBySlug(params.slug);
    const job: JobDetail | undefined = IT_TEACHER_DETAIL; 

    if (!job) {
        return (
            <div className="text-center py-20">
                <AlertTriangle size={32} className="mx-auto text-red-500 mb-4" />
                <h1 className="text-2xl font-bold text-gray-700">Không tìm thấy thông tin tuyển dụng.</h1>
            </div>
        );
    }
    
    // Hàm xử lý cuộn đến các phần (Placeholder)
    const handleTocClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Hàm render danh sách dùng chung
    const renderList = (items: string[]) => (
        <ul className="space-y-3 pl-5 list-disc text-gray-700 text-base">
            {items.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
            ))}
        </ul>
    );

    return (
        <div className="bg-white min-h-screen pb-16 pt-8">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                
                {/* Header và Thông tin cơ bản */}
                <div className="mb-8 pb-4 border-b border-gray-200">
                    
                    {/* Breadcrumb và Ngày đăng */}
                    <p className="text-sm text-gray-500 mb-2 flex items-center">
                        Tuyển dụng / <span className="ml-1">{job.postDate}</span>
                    </p>
                    
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{job.title}</h1>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {job.summary}
                    </p>
                </div>

                {/* Nội dung chi tiết */}
                <div className="bg-white">
                    
                    {/* Mục lục - Tương tự như ảnh */}
                    <div className="mb-8 p-4 bg-gray-100 rounded-lg flex items-center gap-4 border border-gray-200 w-fit">
                        <span className="font-bold text-lg text-gray-700">Nội dung bài viết</span>
                        <button onClick={() => handleTocClick('mo-ta')} className="text-sm text-blue-600 hover:underline inline-flex items-center">
                            <ScrollText size={18} className="mr-1" /> Mô tả công việc
                        </button>
                        <button onClick={() => handleTocClick('dieu-kien')} className="text-sm text-blue-600 hover:underline inline-flex items-center">
                            <BookOpen size={18} className="mr-1" /> Điều kiện dự tuyển
                        </button>
                         <button onClick={() => handleTocClick('phuc-loi')} className="text-sm text-blue-600 hover:underline inline-flex items-center">
                            <Users size={18} className="mr-1" /> Phúc lợi
                        </button>
                    </div>
                    
                    {/* 1. Mô tả công việc */}
                    <section id="mo-ta" className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mô tả công việc giáo viên tin học</h2>
                        {renderList(job.jobDescription)}
                    </section>

                    {/* 2. Điều kiện dự tuyển */}
                    <section id="dieu-kien" className="mb-8">
                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Điều kiện dự tuyển giáo viên tin học</h2>
                        {renderList(job.requirements)}
                    </section>
                    
                     {/* 3. Phúc lợi (Phần bổ sung cho đầy đủ) */}
                    <section id="phuc-loi" className="mb-8">
                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Phúc lợi</h2>
                        {renderList(job.benefits)}
                    </section>
                    
                    {/* Nút Ứng tuyển */}
                    <div className="text-center pt-6 border-t border-gray-100">
                         <button
                            onClick={() => alert(`Ứng tuyển: ${job.title}`)}
                            className="w-full md:w-1/2 inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                        >
                            <Briefcase size={20} className="mr-2" />
                            Ứng tuyển ngay
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;