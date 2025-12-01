
import React from 'react';
import Link from 'next/link';
import { BookOpen, MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <BookOpen size={20} />
              </div>
              <span className="text-xl font-bold text-white">ERG Education</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Hệ thống giáo dục hàng đầu, cam kết mang lại chất lượng đào tạo tốt nhất cho thế hệ trẻ Việt Nam. Khơi dậy tiềm năng, kiến tạo tương lai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><Link href="/gioi-thieu" className="hover:text-blue-400 transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Các khóa học</Link></li>
              <li><Link href="/giao-vien" className="hover:text-blue-400 transition-colors">Đội ngũ giáo viên</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-blue-400 transition-colors">Tin tức & Sự kiện</Link></li>
              <li><Link href="/lien-he" className="hover:text-blue-400 transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Chương trình đào tạo</h3>
            <ul className="space-y-3">
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Toán tư duy</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Tiếng Anh Cambridge</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Luyện thi vào 10</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Luyện thi Đại học</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-blue-400 transition-colors">Kỹ năng sống</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Thông tin liên hệ</h3>
            <ul className="space-y-4">
              <div className="flex items-start gap-3">
                    <div className="text-blue-500 shrink-0 mt-1">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-blue-100">Trụ sở chính: 83B, Hoàng Sa, Phường Tân Định, TP.Hồ Chí Minh</p>
                        <p className="text-blue-100">Trung tâm Tin học ERG, Số 40-42 Bình Phú, P Bình Phú, TP. Hồ Chí Minh</p>
                    </div>
                </div>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>0766.144.888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info.eduerg@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© 2024 ERG Education System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
