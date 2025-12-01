
import React from 'react';
import { Award, Target, Heart } from 'lucide-react';
import { TEACHERS } from '@/data/constants';

export default function AboutPage() {
  return (
    <div className="animate-fade-in pb-16">
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Hành trình hơn 15 năm nỗ lực không ngừng nghỉ vì sự nghiệp giáo dục Việt Nam.
          </p>
        </div>
      </div>

      {/* Mission Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Tầm nhìn',
                content: 'Trở thành hệ thống giáo dục hàng đầu, tiên phong trong việc áp dụng các phương pháp giảng dạy hiện đại và công nghệ vào giáo dục.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: Heart,
                title: 'Sứ mệnh',
                content: 'Khơi dậy niềm đam mê học tập, trang bị kiến thức và kỹ năng cần thiết để học sinh tự tin bước vào tương lai và hội nhập quốc tế.',
                color: 'bg-red-50 text-red-600'
              },
              {
                icon: Award,
                title: 'Giá trị cốt lõi',
                content: 'Tận tâm - Sáng tạo - Trách nhiệm - Chất lượng. Chúng tôi đặt người học làm trung tâm trong mọi hoạt động.',
                color: 'bg-green-50 text-green-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team meeting"
                  className="rounded-2xl shadow-xl w-full"
                />
             </div>
             <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của ERG</h2>
               <div className="space-y-4 text-gray-600 leading-relaxed">
                 <p>
                   Được thành lập vào năm 2008 bởi một nhóm các nhà giáo tâm huyết, ERG (Education Research Group) ban đầu chỉ là một trung tâm nhỏ với vài lớp học bổ trợ.
                 </p>
                 <p>
                   Trải qua nhiều năm phát triển, với sự tin tưởng của phụ huynh và sự nỗ lực của học sinh, chúng tôi đã mở rộng quy mô trở thành một hệ thống giáo dục toàn diện. Chúng tôi không chỉ dạy kiến thức sách vở mà còn chú trọng phát triển tư duy, kỹ năng mềm và nhân cách.
                 </p>
                 <p>
                   Tại ERG, mỗi thầy cô giáo không chỉ là người truyền đạt kiến thức mà còn là người bạn, người hướng dẫn, giúp các em khám phá và phát triển năng lực bản thân.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Teachers Team */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Đội ngũ giáo viên tiêu biểu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEACHERS.map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                <div className="h-64 overflow-hidden relative">
                   <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-bold text-lg">{teacher.name}</p>
                      <p className="text-blue-300 text-sm">{teacher.subject}</p>
                   </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm italic">{teacher.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
