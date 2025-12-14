'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
    Search, MapPin, Briefcase, Filter,
    ChevronLeft, ChevronRight, Zap, Clock, DollarSign, Users
} from 'lucide-react';

// Import Data & Types từ file nguồn
import { JOB_LISTINGS } from '@/data/jobDatas';
import { JobSummary } from '@/data/types';

// --- COMPONENT: JOB CARD ---
const JobCardItem = ({ job }: { job: JobSummary }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative group">

            {/* OVERLAY LINK: Dẫn tới trang chi tiết dựa trên slug động */}
            <Link
                href={`/tuyen-dung/${job.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Xem chi tiết ${job.title}`}
            />

            <div className="absolute top-4 right-4 text-orange-500 bg-orange-50 p-1.5 rounded-full z-20">
                <Zap size={16} fill="currentColor" />
            </div>

            <div className="pointer-events-none">
                <h3 className="font-bold text-gray-800 text-lg mb-3 pr-8 line-clamp-2 uppercase group-hover:text-blue-600 transition-colors">
                    {job.title}
                </h3>

                <div className="space-y-2.5 text-sm text-gray-500 mb-6 flex-grow">
                    <div className="flex items-start gap-2">
                        <Briefcase size={16} className="mt-0.5 shrink-0 text-blue-500" />
                        <span className="line-clamp-1">{job.workSchedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={16} className="shrink-0 text-blue-500" />
                        <span>Số lượng: <span className="font-medium text-gray-700">{job.quantity}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="shrink-0 text-blue-500" />
                        <span>Hạn nộp: {job.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="shrink-0 text-blue-500" />
                        <span>{job.location}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 relative z-20">
                <span className={`font-bold text-sm flex items-center gap-1 ${job.salary.toLowerCase().includes('thỏa thuận') || job.salary.toLowerCase().includes('thương lượng') ? 'text-gray-600' : 'text-blue-600'}`}>
                    <DollarSign size={16} />
                    {job.salary}
                </span>
                {/* Nút giả lập, thực tế Link cha đã bao trùm */}
                <button className="px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Ứng Tuyển
                </button>
            </div>
        </div>
    );
};

// --- COMPONENT: FILTER CHECKBOX ---
const FilterCheckbox = ({ label, count }: { label: string, count?: number }) => (
    <label className="flex items-center justify-between py-2 cursor-pointer group hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors">
        <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
            <span className="text-gray-600 group-hover:text-blue-600 text-sm font-medium">{label}</span>
        </div>
        {count && <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600">{count}</span>}
    </label>
);

export default function JobListingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    // Sử dụng dữ liệu imported từ jobDatas
    const filteredJobs = useMemo(() => {
        return JOB_LISTINGS.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20 pt-20">
            {/* HEADER & SEARCH BAR */}
            <div className="bg-white shadow-sm border-b border-gray-200 mb-8">
                <div className="container mx-auto max-w-7xl px-4 pt-4 pb-8">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tìm kiếm công việc mơ ước</h1>
                            <p className="text-gray-500">Khám phá cơ hội nghề nghiệp phù hợp với bạn</p>
                        </div>
                        <div className="w-full max-w-4xl relative">
                            <div className="bg-white rounded-full shadow-md border border-gray-200 p-1.5 flex items-center transition-shadow focus-within:shadow-lg focus-within:border-blue-300">
                                <div className="pl-4 pr-2 text-gray-400">
                                    <Search size={22} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nhập tên vị trí, kỹ năng..."
                                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2 py-3 text-base"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                                <div className="hidden sm:block w-px h-8 bg-gray-200 mx-2"></div>
                                <select className="hidden sm:block bg-transparent outline-none text-gray-700 font-medium cursor-pointer px-2 py-3 mr-2 hover:text-blue-600">
                                    <option>Tất cả Khu vực</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Hà Nội</option>
                                </select>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* SIDEBAR */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-24">
                            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
                                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <Filter size={18} /> Bộ lọc
                                </h2>
                                <button className="text-xs text-blue-600 font-semibold hover:underline">Đặt lại</button>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase">Mức lương</h3>
                                <div className="space-y-1">
                                    <FilterCheckbox label="Thương lượng" />
                                    <FilterCheckbox label="Dưới 10 triệu" count={2} />
                                    <FilterCheckbox label="10 - 20 triệu" count={10} />
                                    <FilterCheckbox label="Trên 20 triệu" count={8} />
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase">Hình thức</h3>
                                <div className="space-y-1">
                                    <FilterCheckbox label="Toàn thời gian" count={15} />
                                    <FilterCheckbox label="Bán thời gian" count={5} />
                                    <FilterCheckbox label="Thực tập" count={3} />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* LISTING */}
                    <main className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600 text-sm">
                                Tìm thấy <span className="font-bold text-gray-900">{filteredJobs.length}</span> việc làm
                            </p>
                        </div>

                        {currentJobs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                {currentJobs.map((job) => (
                                    <JobCardItem key={job.id} job={job} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">Không tìm thấy công việc nào phù hợp.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg border ${currentPage === 1 ? 'border-gray-200 text-gray-300' : 'border-gray-300 text-gray-600'}`}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-lg font-medium ${currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-600 border'}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg border ${currentPage === totalPages ? 'border-gray-200 text-gray-300' : 'border-gray-300 text-gray-600'}`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}