import React from 'react';
import { Target, Heart, Users, Star, Lightbulb, Handshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="animate-fade-in pb-16">
      {/* Header Banner */}
      <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Hành trình kiến tạo tương lai số và phát triển giáo dục bền vững.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* --- HÀNG 1: TẦM NHÌN & SỨ MỆNH --- */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Tầm nhìn (Blue Theme) */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 uppercase">Tầm nhìn</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                ERG trở thành một tập đoàn công nghệ về cung ứng hạ tầng, nhân sự và cung cấp giải pháp công nghệ thông tin, định hình tương lai số hóa và tạo ra tác động tích cực bền vững cho xã hội. 
                <br /><br />
                Tập trung vào việc xây dựng mối quan hệ tin cậy với khách hàng và đối tác, chúng tôi hướng đến việc trở thành biểu tượng của sự chuyên nghiệp, minh bạch và tận tâm trong kỷ nguyên công nghệ số.
              </p>
            </div>

            {/* Sứ mệnh (Red Theme) */}
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-red-900 uppercase">Sứ mệnh</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                ERG cung cấp các giải pháp công nghệ và dịch vụ tin học chất lượng cao, góp phần thúc đẩy quá trình chuyển đổi số trong cộng đồng, nâng cao năng lực công nghệ cho khách hàng và đối tác, đồng hành cùng sự phát triển bền vững của xã hội trong kỷ nguyên số hóa.
              </p>
            </div>
          </div>

          {/* --- HÀNG 2: GIÁ TRỊ CỐT LÕI (Orange Theme - Full Width) --- */}
          {/* Khối này nằm chung container nhưng bên dưới grid trên -> Tự động full width bằng 2 cái trên cộng lại */}
          <div className="bg-orange-50 p-8 md:p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
            
            {/* Header nằm TRONG khung */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                <Users size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-900 uppercase">Giá trị cốt lõi</h3>
            </div>

            {/* Content: Các thẻ con màu trắng nằm trên nền cam */}
            <div className="flex flex-wrap justify-center gap-6">
              
              {/* 1. Trách nhiệm xã hội */}
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all group">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-orange-600">
                  <Users size={20} className="text-orange-500"/> Trách nhiệm xã hội
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  ERG đóng góp vào sự phát triển bền vững của xã hội thông qua các chương trình đào tạo quốc tế, nâng cao kỹ năng công nghệ cho cộng đồng.
                </p>
              </div>

              {/* 2. Khách hàng là trung tâm */}
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all group">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-orange-600">
                   <Heart size={20} className="text-orange-500"/> Khách hàng là trung tâm
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  ERG đặt lợi ích và sự hài lòng của khách hàng làm ưu tiên hàng đầu trên các khía cạnh về sự thấu hiểu, cải tiến chất lượng, minh bạch hóa và giữ đúng cam kết.
                </p>
              </div>

              {/* 3. Chất lượng vượt trội */}
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all group">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-orange-600">
                   <Star size={20} className="text-orange-500"/> Chất lượng vượt trội
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  ERG cam kết mang lại những sản phẩm và dịch vụ với chất lượng ưu việt nhất thông qua việc đảm bảo tỷ lệ thành công tối ưu và trải nghiệm dịch vụ vượt trội.
                </p>
              </div>

              {/* 4. Sáng tạo đổi mới */}
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all group">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-orange-600">
                   <Lightbulb size={20} className="text-orange-500"/> Sáng tạo đổi mới
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Công nghệ không chỉ là công cụ, mà là động lực để chuyển hóa giáo dục. ERG thúc đẩy tinh thần đổi mới trong từng giải pháp, khuyến khích tư duy sáng tạo.
                </p>
              </div>

              {/* 5. Hợp tác và phát triển */}
              <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all group">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2 group-hover:text-orange-600">
                   <Handshake size={20} className="text-orange-500"/> Hợp tác và phát triển
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  ERG xây dựng một môi trường làm việc đội nhóm, nơi mọi người cùng nhau chia sẻ kiến thức, kinh nghiệm và trải nghiệm để cùng phát triển.
                </p>
              </div>

            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Câu chuyện của ERG</h2>
            <h3 className="text-xl font-bold text-blue-900 mb-6">“Khơi nguồn trí tuệ – Dẫn lối tương lai”</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p>
                Giữa làn sóng chuyển đổi số mạnh mẽ, khi giáo dục toàn cầu đối mặt với yêu cầu đổi mới để bắt nhịp thời đại, ERG (EduRise Global) ra đời với một khát vọng lớn: biến công nghệ trở thành chiếc cầu nối bền vững giữa tri thức và con người.
              </p>
              <p>
                “Edu + Rise + Global” – ERG mang trong mình sứ mệnh khai phóng tiềm năng trí tuệ thông qua các giải pháp giáo dục thông minh và toàn diện. Được sáng lập bởi những nhà giáo dục tâm huyết cùng đội ngũ chuyên gia công nghệ sâu sắc, ERG là sự giao thoa giữa tư duy giáo dục tiến bộ và năng lực sáng tạo đột phá trong kỷ nguyên số.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}