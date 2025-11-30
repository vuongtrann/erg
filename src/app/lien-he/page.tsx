
'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
       <div className="bg-blue-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Liên Hệ</h1>
        <p className="text-blue-100">Chúng tôi luôn sẵn sàng lắng nghe và giải đáp thắc mắc của bạn.</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Info Side */}
          <div className="p-8 md:p-12 bg-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-8">Thông tin liên lạc</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Địa chỉ</h3>
                  <p className="text-blue-100">Số 123, Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Điện thoại</h3>
                  <p className="text-blue-100">0912.345.678</p>
                  <p className="text-blue-100">024.3333.8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-blue-100">contact@erg.edu.vn</p>
                  <p className="text-blue-100">support@erg.edu.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Giờ làm việc</h3>
                  <p className="text-blue-100">Thứ 2 - Thứ 7: 8:00 - 21:00</p>
                  <p className="text-blue-100">Chủ nhật: 8:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Gửi tin nhắn cho chúng tôi</h2>
            <p className="text-gray-500 mb-8">Để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="0912..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung cần tư vấn</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tôi muốn tìm hiểu về khóa học..."
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>

       {/* Map Placeholder */}
       <div className="h-96 w-full bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
             Google Maps Placeholder for 123 Nguyen Trai, Ha Noi
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6366037060413!2d105.80622567599988!3d21.00219088852309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9872e41369%3A0x62955768800539c!2zMTIzIMSQLiBOZ3V54buFbiBUcsOjaSwgVGhhbmggWHXDom4gVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
       </div>
    </div>
  );
}
