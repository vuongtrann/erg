import React from 'react';
import Link from 'next/link';
import { JobSummary } from '@/data/types';
import { Briefcase, DollarSign, Clock, Users, Calendar, CheckCircle } from 'lucide-react';

interface JobCardProps {
    job: JobSummary;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl overflow-hidden mb-8 border border-gray-100">
            <div className="md:flex">
                {/* --- Phần Hình ảnh/Icon --- */}
                <div className="p-6 flex-shrink-0 md:w-1/3 flex items-center justify-center bg-blue-50">
                    <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 text-center">
                        <Briefcase size={64} className="mx-auto text-blue-500" />
                        <p className="text-sm mt-2 font-medium text-gray-700">Tuyển dụng {job.title}</p>
                    </div>
                </div>

                {/* --- Phần Nội dung Chi tiết --- */}
                <div className="p-6 md:p-8 md:w-2/3">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{job.title}</h2>
                    
                    {/* Quick Info Bar */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm mb-4">
                        <div className="flex items-center text-gray-700 font-medium">
                            <DollarSign size={18} className="text-green-500 mr-2" />
                            <span className="font-bold text-lg text-green-600">{job.salary}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Users size={18} className="text-indigo-500 mr-2" />
                            Số lượng: <span className="ml-1 font-semibold">{job.quantity}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Clock size={18} className="text-yellow-500 mr-2" />
                            Thời gian làm việc: <span className="ml-1 font-semibold">{job.workSchedule}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Calendar size={18} className="text-red-500 mr-2" />
                            Hạn nộp: <span className="ml-1 font-semibold">{job.deadline}</span>
                        </div>
                    </div>

                    {/* Điều kiện dự tuyển */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-2">Điều kiện dự tuyển</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Nút Ứng tuyển và Link chi tiết */}
                    <div className="flex justify-end pt-4 border-t border-gray-100">
                         <Link href={`/tuyen-dung/${job.slug}`} passHref>
                            <button
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                            >
                                Ứng tuyển
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;