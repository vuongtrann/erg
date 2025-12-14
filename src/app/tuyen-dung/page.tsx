'use client';

import React, { useState, useMemo } from 'react';
import { JOB_LISTINGS } from '@/data/jobDatas'; // Import danh sách Job
import { JobSummary } from '@/data/types';
import JobCard from '@/components/JobsCard'; // Import component Card
import { Briefcase, Filter, Search, Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 3; // Số lượng vị trí mỗi trang

export default function JobListingPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLocation, setFilterLocation] = useState('Tất cả');
    
    // --- Lọc dữ liệu ---
    const filteredJobs = useMemo(() => {
        return JOB_LISTINGS.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
            // const matchesLocation = filterLocation === 'Tất cả' || job.location === filterLocation; // Cần bổ sung trường location
            return matchesSearch; // && matchesLocation;
        });
    }, [searchTerm]); // Thêm filterLocation vào dependencies nếu sử dụng

    // --- Logic Phân trang ---
    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="animate-fade-in bg-gray-50 min-h-screen pb-16">
            
            {/* 1. Header Banner */}
            <div className="bg-blue-800 py-16 text-center text-white mb-12 shadow-lg">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-3">
                        <Briefcase size={36} className="text-yellow-300" />
                        Cơ Hội Nghề Nghiệp
                    </h1>
                    <p className="text-blue-200 max-w-2xl mx-auto">
                        Cùng chúng tôi kiến tạo tương lai giáo dục.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                
                {/* 2. Thanh Tìm kiếm và Lọc */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative md:col-span-2">
                            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên vị trí..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1); // Reset trang khi tìm kiếm
                                }}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="relative">
                            <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                value={filterLocation}
                                onChange={(e) => {
                                    setFilterLocation(e.target.value);
                                    setCurrentPage(1); // Reset trang khi lọc
                                }}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Tất cả">Lọc theo Địa điểm</option>
                                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                <option value="Hà Nội">Hà Nội</option>
                                {/* Thêm các tùy chọn khác */}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 3. Danh sách Công việc */}
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-10 bg-white rounded-xl shadow-md">
                        <p className="text-gray-500">Không tìm thấy vị trí nào phù hợp với yêu cầu của bạn.</p>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            {currentJobs.map((job) => (
                                // Sử dụng component JobCard đã sửa đổi
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>

                        {/* 4. Phân trang (Sử dụng logic từ JobPostingPage mẫu) */}
                        {/* Logic phân trang được đặt ở đây */}
                    </>
                )}
            </div>
        </div>
    );
}