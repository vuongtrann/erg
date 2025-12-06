// // responsive-roadmap.js (hoặc .tsx)
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// // --- DATA ---
// const studyNodes = [
//   {
//     id: 1,
//     time: "Tháng 9 - Tháng 10",
//     desc: "Bắt đầu giảng dạy nội dung chương trình HK1 theo khung chương trình.",
//     // progress: vị trí phần trăm trên đường đi (0 -> 1)
//     progress: 0.1,
//     position: "bottom" // Đặt text nằm dưới đường
//   },
//   {
//     id: 2,
//     time: "Tháng 11",
//     desc: "Học sinh làm quen, nắm rõ thao tác phần mềm giả lập thi Gmetrix.",
//     progress: 0.3,
//     position: "bottom"
//   },
//   {
//     id: 3,
//     time: "Tháng 12",
//     desc: "Ôn luyện để chuẩn. Tiến hành kiểm tra đánh giá, phân loại học sinh Lần 1.",
//     progress: 0.5,
//     position: "top" // Đặt text nằm trên đường
//   },
//   {
//     id: 4,
//     time: "Tháng 1-2",
//     desc: "Tiếp tục giảng dạy nội dung chương trình HK2 theo khung chương trình chuẩn quốc tế.",
//     progress: 0.75,
//     position: "top"
//   },
//   {
//     id: 5,
//     time: "Đầu tháng 3",
//     desc: "Ôn luyện để chuẩn. Tiến hành kiểm tra, đánh giá, phân loại học sinh Lần 2.",
//     progress: 0.95,
//     position: "bottom"
//   }
// ];

// const examNodes = [
//   { id: 1, time: "Giữa tháng 3", desc: "Tiếp tục ôn luyện để chuẩn, đánh giá phân loại học sinh." },
//   { id: 2, time: "Cuối tháng 3", desc: "Tổng ôn cô đọng, luyện đề về đích." },
//   { id: 3, time: "Tháng 4", desc: "Tiến hành thi thử thực chiến, đánh giá kết quả thi theo đợt." },
//   { id: 4, time: "Tháng 5", desc: "Ôn luyện củng cố. Tiến hành thi nhận chứng chỉ." }
// ];

// // Component Pin (Ghim đỏ) - Dùng chung
// const RoadPin = ({ number, className = "" }) => (
//   <div className={`relative flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 z-20 flex-shrink-0 ${className}`}>
//     {/* Shadow blur */}
//     <div className="absolute -bottom-1 w-8 h-2 bg-black/40 blur-[3px] rounded-full"></div>
//     {/* Main pin circle */}
//     <div className="w-full h-full bg-[#bf1e2e] rounded-full border-[3px] border-white flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.3)] relative z-10">
//       <span className="text-white font-extrabold text-sm md:text-lg">{number}</span>
//     </div>
//     {/* Triangle pointer */}
//     <div className="absolute -bottom-2 w-4 h-4 bg-[#bf1e2e] transform rotate-45 border-r border-b border-white/50 z-0"></div>
//   </div>
// );


// // --- COMPONENT D3 CHO CON RẮN (Desktop) ---
// const D3SnakeRoad = () => {
//     const svgRef = useRef(null);
//     const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });
//     const containerRef = useRef(null);

//     // Hook để đo kích thước container thực tế
//     useEffect(() => {
//         const observeTarget = containerRef.current;
//         const resizeObserver = new ResizeObserver((entries) => {
//             entries.forEach((entry) => {
//                 setDimensions({
//                     width: entry.contentRect.width,
//                     // Tính chiều cao dựa trên tỷ lệ khung hình mong muốn (ví dụ 16:9 hoặc 5:3)
//                     // Để giống ảnh, nó khá cao, khoảng tỷ lệ 5:3
//                     height: entry.contentRect.width * 0.6 
//                 });
//             });
//         });
//         if (observeTarget) resizeObserver.observe(observeTarget);
//         return () => resizeObserver.disconnect();
//     }, []);


//     // D3 Effect vẽ đường và đặt các điểm
//     useEffect(() => {
//         if (!svgRef.current || dimensions.width === 0) return;

//         const svg = d3.select(svgRef.current);
//         svg.selectAll("*").remove(); // Xóa vẽ cũ khi resize

//         const { width, height } = dimensions;
//         const margin = { top: 50, right: 50, bottom: 50, left: 50 };
//         const drawWidth = width - margin.left - margin.right;
//         const drawHeight = height - margin.top - margin.bottom;

//         const svgContent = svg.append("g")
//             .attr("transform", `translate(${margin.left},${margin.top})`);

//         // --- 1. TÍNH TOÁN ĐƯỜNG CONG (SNAKE PATH) ---
//         // Chúng ta xây dựng đường đi bằng các đoạn thẳng và cung tròn để giống ảnh nhất.
//         // Đường đi chia làm 3 tầng (bottom, middle, top) và 2 khúc cua.
        
//         const rowH = drawHeight / 3; // Chiều cao mỗi tầng
//         const turnR = rowH / 2; // Bán kính khúc cua

//         // Các điểm mốc chính của đường đi
//         const pStart = { x: 0, y: rowH * 2.5 };
//         const pRow1End = { x: drawWidth - turnR, y: rowH * 2.5 };
//         // Khúc cua 1 lên tầng giữa
//         const pTurn1Top = { x: drawWidth - turnR, y: rowH * 1.5 };
//         const pRow2End = { x: turnR, y: rowH * 1.5 };
//         // Khúc cua 2 lên tầng trên cùng
//         const pTurn2Top = { x: turnR, y: rowH * 0.5 };
//         const pEnd = { x: drawWidth * 0.7, y: rowH * 0.5 }; // Kết thúc ở khoảng 70% chiều rộng

//         // Tạo path string thủ công để kiểm soát chính xác hình dáng
//         // M: Move to, L: Line to, A: Arc (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
//         const pathData = `
//             M ${pStart.x} ${pStart.y}
//             L ${pRow1End.x} ${pRow1End.y}
//             A ${turnR} ${turnR} 0 0 0 ${pTurn1Top.x} ${pTurn1Top.y}
//             L ${pRow2End.x} ${pRow2End.y}
//             A ${turnR} ${turnR} 0 0 1 ${pTurn2Top.x} ${pTurn2Top.y}
//             L ${pEnd.x} ${pEnd.y}
//         `;

//         // --- 2. VẼ ĐƯỜNG ROAD ---
//         // Shadow của đường
//         svgContent.append("path")
//             .attr("d", pathData)
//             .attr("fill", "none")
//             .attr("stroke", "black")
//             .attr("stroke-width", 85)
//             .attr("opacity", 0.1)
//             .attr("transform", "translate(0, 8)");

//         // Đường chính màu xám đậm
//         const mainPath = svgContent.append("path")
//             .attr("d", pathData)
//             .attr("fill", "none")
//             .attr("stroke", "#333333") // Màu xám đậm như ảnh
//             .attr("stroke-width", 80)
//             .attr("stroke-linecap", "round");

//         // Đường đứt nét màu trắng ở giữa
//         svgContent.append("path")
//             .attr("d", pathData)
//             .attr("fill", "none")
//             .attr("stroke", "white")
//             .attr("stroke-width", 4)
//             .attr("stroke-dasharray", "20, 25") // Nét đứt dài, khoảng cách rộng
//             .attr("stroke-linecap", "round")
//             .attr("opacity", 0.8);

//         // --- 3. ĐẶT CÁC NODE TRÊN ĐƯỜNG ---
//         // Sử dụng getPointAtLength của SVG để tìm tọa độ chính xác trên đường cong
//         const pathNode = mainPath.node();
//         if (!pathNode) return;
//         const pathLength = pathNode.getTotalLength();

//         studyNodes.forEach((node) => {
//             // Tính điểm trên đường dựa vào progress
//             const point = pathNode.getPointAtLength(node.progress * pathLength);
            
//             // Tạo group chứa Pin và Text
//             const nodeGroup = svgContent.append("g")
//                 .attr("class", "node-group cursor-pointer transition-transform hover:scale-105")
//                 .attr("transform", `translate(${point.x}, ${point.y})`);

//             // Render Pin bằng HTML foreignObject để dùng lại component React (cách dễ nhất)
//             nodeGroup.append("foreignObject")
//                 .attr("x", -24) // Căn giữa pin (width 48/2)
//                 .attr("y", -24) // Căn giữa pin (height 48/2)
//                 .attr("width", 48)
//                 .attr("height", 48)
//                 .attr("class", "overflow-visible")
//                 .append("xhtml:div")
//                 .html(`<div class="road-pin-container">${node.id}</div>`);

//             // Render Text Box
//             const textYOffset = node.position === "top" ? -120 : 60;
            
//             const textGroup = nodeGroup.append("g")
//                 .attr("transform", `translate(0, ${textYOffset})`);

//             // Text box background (màu trắng, bo góc, có shadow nhẹ)
//             // Sử dụng foreignObject cho text box để dễ style và wrap text tự động
//             const textBoxWidth = 220;
//             const textBoxHeight = 100; // Chiều cao ước lượng

//             textGroup.append("foreignObject")
//                 .attr("x", -textBoxWidth / 2)
//                 .attr("y", -textBoxHeight / 2)
//                 .attr("width", textBoxWidth)
//                 .attr("height", textBoxHeight + 50) // Thêm chiều cao để tránh bị cắt
//                 .attr("class", "overflow-visible text-center font-sans")
//                 .append("xhtml:div")
//                 .html(`
//                     <div class="bg-white rounded-xl shadow-md p-4 border-b-2 border-gray-100 relative">
//                         <h3 class="text-[#bf1e2e] font-extrabold text-base uppercase leading-tight mb-1">${node.time}</h3>
//                         <p class="text-gray-700 text-sm font-medium leading-snug">${node.desc}</p>
//                         <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 ${node.position === 'top' ? '-bottom-2 border-r border-b' : '-top-2 border-l border-t'} border-gray-200"></div>
//                     </div>
//                 `);
//         });

//         // --- 4. VẼ FLAG TITLE (Góc trên phải) ---
//         const flagGroup = svgContent.append("g")
//              .attr("transform", `translate(${drawWidth - 180}, ${rowH * 0.5 - 100})`);

//         flagGroup.append("foreignObject")
//             .attr("width", 250)
//             .attr("height", 100)
//             .append("xhtml:div")
//             .html(`
//                 <div class="relative">
//                     <div class="bg-[#bf1e2e] text-white py-3 pl-6 pr-10 shadow-xl relative z-10" style="clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);">
//                         <h2 class="text-xl font-extrabold uppercase leading-tight tracking-wide text-left">Lộ trình học <br/> Trong năm</h2>
//                     </div>
//                      <div class="absolute top-[5px] left-[-5px] w-full h-full bg-black/20 z-0" style="clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);"></div>
//                 </div>
//             `);

//     }, [dimensions]);

//     // CSS phụ trợ cho D3 injection
//     useEffect(() => {
//         const style = document.createElement('style');
//         style.innerHTML = `
//             .road-pin-container { 
//                 display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; 
//             }
//             .road-pin-container > div {
//                 /* Kế thừa style từ component RoadPin gốc */
//                 position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
//                 width: 3rem; height: 3rem; z-index: 20; flex-shrink: 0;
//             }
//             .road-pin-container > div > div:nth-child(1) { /* Shadow */
//                 position: absolute; bottom: -0.25rem; width: 2rem; height: 0.5rem; background-color: rgba(0,0,0,0.4); filter: blur(3px); border-radius: 9999px;
//             }
//             .road-pin-container > div > div:nth-child(2) { /* Circle */
//                 width: 100%; height: 100%; background-color: #bf1e2e; border-radius: 9999px; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative; z-index: 10; color: white; font-weight: 800; font-size: 1.125rem;
//             }
//             .road-pin-container > div > div:nth-child(3) { /* Triangle */
//                  position: absolute; bottom: -0.5rem; width: 1rem; height: 1rem; background-color: #bf1e2e; transform: rotate(45deg); border-right: 1px solid rgba(255,255,255,0.5); border-bottom: 1px solid rgba(255,255,255,0.5); z-index: 0;
//             }
//         `;
//         document.head.appendChild(style);
//         return () => document.head.removeChild(style);
//     }, []);

//     return (
//         <div ref={containerRef} className="w-full max-w-5xl mx-auto relative">
//             <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="overflow-visible"></svg>
//         </div>
//     );
// };


// // --- MAIN COMPONENT ---
// export default function RealisticRoadmap() {
//   return (
//     <div className="w-full min-h-screen bg-[#f8f5f0] flex flex-col items-center py-10 font-sans overflow-x-hidden text-[#333]">
      
//       {/* =========================================================
//           PHẦN 1: LỘ TRÌNH HỌC TRONG NĂM
//          ========================================================= */}
      
//       {/* --- A. MOBILE VIEW (Giữ nguyên từ code cũ, chỉ đổi màu nền) --- */}
//       <div className="block md:hidden w-full px-4 mb-12">
//         <div className="mb-8 flex justify-center relative">
//              {/* Flag Title Mobile */}
//             <div className="relative z-10">
//                 <div className="bg-[#bf1e2e] text-white pl-6 pr-10 py-3 shadow-lg relative" style={{clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)'}}>
//                     <h2 className="text-xl font-extrabold uppercase text-left leading-tight">Lộ trình học<br/>Trong năm</h2>
//                 </div>
//             </div>
//         </div>

//         <div className="relative pl-8 ml-4 space-y-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-6 before:bg-[#333] before:rounded-full before:opacity-90">
//              {/* Đường kẻ trắng giữa mobile road */}
//              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-white/70 z-10"></div>

//             {studyNodes.map((node) => (
//                 <div key={node.id} className="relative pl-8">
//                     <div className="absolute -left-[42px] top-0 z-20">
//                         <RoadPin number={node.id} className="scale-90" />
//                     </div>
//                     <div className="bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-b-2 border-gray-100 relative ml-2">
//                         <h3 className="text-[#bf1e2e] font-extrabold text-lg uppercase leading-tight">{node.time}</h3>
//                         <p className="text-sm text-gray-700 mt-1 font-medium">{node.desc}</p>
//                         {/* Mũi tên chỉ sang trái */}
//                         <div className="absolute top-5 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100"></div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//       </div>

//       {/* --- B. DESKTOP VIEW (D3 SNAKE) --- */}
//       <div className="hidden md:block w-full px-4 mb-20">
//         <D3SnakeRoad />
//       </div>


//       {/* =========================================================
//           PHẦN 2: LỘ TRÌNH LUYỆN THI
//          ========================================================= */}
      
//       <div className="w-full max-w-6xl mt-0 md:mt-12 px-4 relative z-10">
//          {/* Title */}
//          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#9e2a2f] uppercase mb-12 md:mb-24 tracking-wider drop-shadow-sm">
//             Lộ trình luyện thi
//          </h2>

//          {/* --- A. MOBILE EXAM (VERTICAL) --- */}
//          <div className="block md:hidden">
//             <div className="relative pl-8 ml-4 space-y-6 pb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-6 before:bg-[#333] before:rounded-full before:opacity-90">
//                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-white/70 z-10"></div>
//                {examNodes.map((item) => (
//                    <div key={item.id} className="relative pl-8">
//                         <div className="absolute -left-[42px] top-0 z-20">
//                            <RoadPin number={item.id} className="scale-90" />
//                        </div>
//                        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border-l-4 border-[#bf1e2e] shadow-sm ml-2">
//                            <h4 className="text-[#bf1e2e] font-bold text-base uppercase">{item.time}</h4>
//                            <p className="text-sm text-gray-800 font-semibold leading-tight">{item.desc}</p>
//                        </div>
//                    </div>
//                ))}
//             </div>
//          </div>

//          {/* --- B. DESKTOP EXAM (HORIZONTAL STRAIGHT ROAD) --- */}
//          {/* Sử dụng CSS Flexbox thay vì D3 vì nó là đường thẳng */}
//          <div className="hidden md:flex relative w-full items-center justify-between px-10 lg:px-20">
            
//             {/* The Straight Road Background */}
//             <div className="absolute top-[60%] left-0 w-full h-16 bg-[#333] -translate-y-1/2 shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-sm z-0">
//                 {/* Dashed line */}
//                 <div className="w-full h-full flex items-center px-2">
//                     <div className="w-full border-t-[3px] border-dashed border-white/70"></div>
//                 </div>
//                 {/* End Flag */}
//                  <div className="absolute -right-1 -top-10 text-[#bf1e2e] filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
//                     <svg width="60" height="100" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M4 2v20h2v-8h10l-4-6 4-6H6V2H4z"/>
//                     </svg>
//                 </div>
//             </div>

//             {/* Exam Nodes Items */}
//             {examNodes.map((item, index) => (
//               <div key={item.id} className="relative flex flex-col items-center z-10 group w-1/4 px-2">
//                   {/* Text Box (Above the road) */}
//                   <div className="mb-[70px] w-full text-center transition-transform group-hover:-translate-y-2 duration-300"> 
//                       <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-4 border-b-4 border-[#bf1e2e] relative">
//                           <p className="text-gray-700 font-bold text-sm md:text-base leading-tight mb-2 h-12 flex items-center justify-center">{item.desc}</p>
//                           <h4 className="text-[#bf1e2e] font-extrabold text-lg uppercase">{item.time}</h4>
//                           {/* Mũi tên chỉ xuống */}
//                           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white transform rotate-45 border-r border-b border-[#bf1e2e]"></div>
//                       </div>
//                   </div>
//                   {/* Pin (On the road) */}
//                   <div className="absolute top-[60%] transform -translate-y-1/2">
//                     <RoadPin number={item.id} className="md:w-14 md:h-14 text-xl" />
//                   </div>
//               </div>
//             ))}
//          </div>
//       </div>
      
//       {/* Footer */}
//       <div className="text-center text-gray-500 text-sm font-bold mt-24 uppercase tracking-[0.2em] pb-8">
//         Trung tâm tin học ngoại ngữ ERG
//       </div>

//       {/* Background decoration (optional circle from original image) */}
//       <div className="fixed top-1/3 left-0 -translate-x-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
//       <div className="fixed bottom-1/4 right-0 translate-x-1/2 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
//     </div>
//   );
// }


'use client';

import React from 'react';
import { ROADMAP_DATA, TRAINING_GOALS } from '@/data/constants';
import { CheckCircle, Target, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function RoadmapPage() {
  return (
    <div className="animate-fade-in bg-white pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase drop-shadow-md tracking-wide">
            LỘ TRÌNH ĐÀO TẠO
          </h1>
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
            <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wider text-white">
              TRUNG TÂM TIN HỌC ERG
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Intro Section */}
        <div className="mb-16">
          <div className="bg-amber-50 border-l-8 border-amber-400 p-8 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-amber-700 mb-4 uppercase flex items-center gap-3">
              <BookOpen size={28} className="text-amber-500"/>
              GIỚI THIỆU CHƯƠNG TRÌNH
            </h3>
            <div className="space-y-4 text-slate-700 font-medium text-lg leading-relaxed pl-2">
              <p className="flex items-start gap-3">
                <span className="text-blue-500 mt-1.5 text-xl">•</span>
                <span>Trung tâm Tin học ERG cung cấp chương trình đào tạo toàn diện, được thiết kế khoa học phù hợp với mọi độ tuổi và trình độ từ cơ bản đến nâng cao.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-blue-500 mt-1.5 text-xl">•</span>
                <span>Học viên được trang bị kiến thức nền tảng vững chắc, đáp ứng tốt nhu cầu học tập, làm việc văn phòng và đủ năng lực thi các chứng chỉ quốc tế.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-8">
            {ROADMAP_DATA.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-cyan-50/60 p-6 md:p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:bg-cyan-50 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-blue-700 mb-5 uppercase border-b border-cyan-200 pb-2 inline-block">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-lg">
                      <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={20} fill="currentColor" color="white" />
                      <span className="leading-snug">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {ROADMAP_DATA.slice(4).map((item) => (
              <div key={item.id} className="bg-cyan-50/60 p-6 md:p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:bg-cyan-50 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-blue-700 mb-5 uppercase border-b border-cyan-200 pb-2 inline-block">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-lg">
                      <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={20} fill="currentColor" color="white" />
                      <span className="leading-snug">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Goals Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-white bg-amber-500 inline-block px-6 py-2 rounded-lg mb-6 uppercase shadow-sm">
                MỤC TIÊU ĐÀO TẠO
              </h3>
              <ul className="space-y-5">
                {TRAINING_GOALS.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-800 text-lg font-medium">
                    <div className="bg-white p-2 rounded-full shadow-sm text-amber-500">
                      <Target size={20} />
                    </div>
                    <span className="mt-1">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-blue-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Bạn đã sẵn sàng bắt đầu lộ trình của mình?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              Đừng để sự do dự cản bước tiến của bạn. Hãy để ERG đồng hành cùng bạn trên con đường chinh phục công nghệ và tri thức ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link
                 href="/lien-he"
                 className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
               >
                 Đăng ký tư vấn ngay <ArrowRight size={20}/>
               </Link>
               <Link
                 href="/khoa-hoc"
                 className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
               >
                 Xem chi tiết khóa học
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
