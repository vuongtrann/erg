"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// --- DATA ---
const studyNodes = [
  {
    id: 1,
    time: "Tháng 9 - Tháng 10",
    desc: "Bắt đầu giảng dạy nội dung chương trình HK1 theo khung chương trình.",
    progress: 0.08,
    position: "bottom"
  },
  {
    id: 2,
    time: "Tháng 11",
    desc: "Học sinh làm quen, nắm rõ thao tác phần mềm giả lập thi Gmetrix.",
    progress: 0.32,
    position: "bottom"
  },
  {
    id: 3,
    time: "Tháng 12",
    desc: "Ôn luyện để chuẩn. Tiến hành kiểm tra đánh giá, phân loại học sinh Lần 1.",
    progress: 0.58,
    position: "top" 
  },
  {
    id: 4,
    time: "Tháng 1-2",
    desc: "Tiếp tục giảng dạy nội dung chương trình HK2 theo khung chương trình chuẩn quốc tế.",
    progress: 0.82,
    position: "top"
  },
  {
    id: 5,
    time: "Đầu tháng 3",
    desc: "Ôn luyện để chuẩn. Tiến hành kiểm tra, đánh giá, phân loại học sinh Lần 2.",
    progress: 0.96,
    position: "top"
  }
];

const examNodes = [
  { id: 1, time: "Giữa tháng 3", desc: "Tiếp tục ôn luyện để chuẩn, đánh giá phân loại học sinh." },
  { id: 2, time: "Cuối tháng 3", desc: "Tổng ôn cô đọng, luyện đề về đích." },
  { id: 3, time: "Tháng 4", desc: "Tiến hành thi thử thực chiến, đánh giá kết quả thi theo đợt." },
  { id: 4, time: "Tháng 5", desc: "Ôn luyện củng cố. Tiến hành thi nhận chứng chỉ." }
];

// --- SUB-COMPONENTS ---
const RoadPin = ({ number, className = "" }: { number: number, className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center w-10 h-10 md:w-14 md:h-14 z-20 flex-shrink-0 ${className}`}>
    <div className="absolute -bottom-1 w-8 h-2 bg-black/40 blur-[3px] rounded-full"></div>
    <div className="w-full h-full bg-[#bf1e2e] rounded-full border-[3px] border-white flex items-center justify-center shadow-lg relative z-10 transition-transform hover:scale-110">
      <span className="text-white font-extrabold text-sm md:text-xl">{number}</span>
    </div>
    <div className="absolute -bottom-2 w-4 h-4 bg-[#bf1e2e] transform rotate-45 border-r border-b border-white/50 z-0"></div>
  </div>
);

// --- D3 CHART COMPONENT ---
const D3SnakeRoad = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

    useEffect(() => {
        const target = containerRef.current;
        if (!target) return;
        
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const newWidth = entry.contentRect.width;
                const newHeight = newWidth * 0.75; 
                setDimensions({ width: newWidth, height: newHeight });
            });
        });
        resizeObserver.observe(target);
        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        if (!svgRef.current || dimensions.width === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const { width, height } = dimensions;
        const margin = { top: 80, right: 100, bottom: 80, left: 100 };
        const drawWidth = width - margin.left - margin.right;
        const drawHeight = height - margin.top - margin.bottom;

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const rowH = drawHeight / 2.5;
        const turnR = rowH / 1.8;

        const yBottom = rowH * 2;
        const yMiddle = rowH * 1;
        const yTop = 0;

        const startX = 0;
        const endX = drawWidth;

        const pathData = `
            M ${startX} ${yBottom}
            L ${endX - turnR} ${yBottom}
            Q ${endX} ${yBottom} ${endX} ${yBottom - turnR}
            L ${endX} ${yMiddle + turnR}
            Q ${endX} ${yMiddle} ${endX - turnR} ${yMiddle}
            L ${startX + turnR} ${yMiddle}
            Q ${startX} ${yMiddle} ${startX} ${yMiddle - turnR}
            L ${startX} ${yTop + turnR}
            Q ${startX} ${yTop} ${startX + turnR} ${yTop}
            L ${endX - 40} ${yTop}
        `;

        // Shadow
        g.append("path")
            .attr("d", pathData)
            .attr("fill", "none")
            .attr("stroke", "rgba(0,0,0,0.2)")
            .attr("stroke-width", 85)
            .attr("transform", "translate(3, 8)");

        // Road
        const roadPath = g.append("path")
            .attr("d", pathData)
            .attr("fill", "none")
            .attr("stroke", "#333333")
            .attr("stroke-width", 80)
            .attr("stroke-linecap", "round");

        // Dashed line
        g.append("path")
            .attr("d", pathData)
            .attr("fill", "none")
            .attr("stroke", "rgba(255,255,255,0.8)")
            .attr("stroke-width", 4)
            .attr("stroke-dasharray", "25, 30")
            .attr("stroke-linecap", "round");

        const pathNode = roadPath.node();
        if(!pathNode) return;
        const totalLen = pathNode.getTotalLength();

        studyNodes.forEach((node) => {
            const point = pathNode.getPointAtLength(node.progress * totalLen);

            const group = g.append("g")
                .attr("transform", `translate(${point.x}, ${point.y})`);

            // Pin
            group.append("foreignObject")
                .attr("width", 70).attr("height", 70)
                .attr("x", -35).attr("y", -35)
                .style("overflow", "visible")
                .append("xhtml:div")
                .html(`
                    <div class="flex items-center justify-center w-full h-full relative">
                        <div class="w-16 h-16 bg-[#bf1e2e] rounded-full border-[5px] border-white flex items-center justify-center shadow-2xl relative z-10">
                            <span class="text-white font-black text-2xl">${node.id}</span>
                        </div>
                        <div class="absolute -bottom-2 w-5 h-5 bg-[#bf1e2e] rotate-45 border-r-[5px] border-b-[5px] border-white z-0"></div>
                        <div class="absolute -bottom-3 w-12 h-3 bg-black/40 blur-md rounded-full"></div>
                    </div>
                `);

            // Text Box - tất cả nằm TRÊN pin, cùng một hàng ngang cho mỗi tầng
            const isTop = node.position === "top";
            
            // Tất cả text box đều nằm phía trên pin
            const yOffset = -180;
            
            // Điều chỉnh x để các cặp nằm gần nhau theo hàng ngang
            let xOffset = -130;
            
            // Hàng dưới: node 1 và 2 cùng độ cao
            if (node.id === 1) {
                xOffset = -130; // Node 1 giữ nguyên
            } else if (node.id === 2) {
                xOffset = -130; // Node 2 giữ nguyên
            }
            // Hàng trên: node 3, 4, 5 cùng độ cao
            else if (node.id === 3) {
                xOffset = -130;
            } else if (node.id === 4) {
                xOffset = -130;
            } else if (node.id === 5) {
                xOffset = -130; // Node 5 lệch trái một chút để tránh cờ
            }
            
            group.append("foreignObject")
                .attr("width", 260)
                .attr("height", 150)
                .attr("x", xOffset)
                .attr("y", yOffset)
                .style("overflow", "visible")
                .append("xhtml:div")
                .html(`
                    <div class="flex flex-col items-center">
                        <div class="bg-white p-4 rounded-2xl shadow-xl border-[3px] border-gray-50 w-full text-center relative hover:shadow-2xl transition-all">
                            <h3 class="text-[#9e2a2f] font-black text-base mb-2">${node.time}</h3>
                            <p class="text-gray-700 text-sm font-medium leading-snug">${node.desc}</p>
                            
                            <div class="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white transform rotate-45 -bottom-2.5 border-r-[3px] border-b-[3px] border-gray-50"></div>
                        </div>
                    </div>
                `);
        });

        // Finish Flag - Cột dài màu đỏ, lá cờ dính liền, chữ ở DƯỚI
        const endPoint = pathNode.getPointAtLength(totalLen);
        
        const flagGroup = g.append("g")
            .attr("transform", `translate(${endPoint.x}, ${endPoint.y})`);

        // Cột cờ màu đỏ, dài hơn
        flagGroup.append("rect")
             .attr("x", -3)
             .attr("y", -120)
             .attr("width", 6)
             .attr("height", 120)
             .attr("fill", "#bf1e2e")
             .attr("rx", 3);

        // Lá cờ và chữ - lá cờ dính liền với cột, chữ dưới
        flagGroup.append("foreignObject")
            .attr("width", 220)
            .attr("height", 160)
            .attr("x", 0)
            .attr("y", -120)
            .style("overflow", "visible")
            .append("xhtml:div")
            .html(`
                <div class="flex flex-col items-start gap-2">
                    <!-- Lá cờ dính liền với cột -->
                    <div class="relative h-[45px] w-[120px] shadow-xl">
                        <div class="w-full h-full bg-gradient-to-r from-[#bf1e2e] to-[#9e2a2f]" 
                             style="clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);">
                        </div>
                    </div>
                    
                    <!-- Chữ nằm dưới lá cờ -->
                    <div class="bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-md border-2 border-[#bf1e2e]">
                         <h2 class="text-[#9e2a2f] font-black text-xs uppercase leading-tight tracking-wide whitespace-nowrap">
                            LỘ TRÌNH HỌC<br/>TRONG NĂM
                         </h2>
                    </div>
                </div>
            `);

    }, [dimensions]);

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto relative">
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="overflow-visible mx-auto" />
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function RealisticRoadmap() {
  return (
    <div className="w-full min-h-screen bg-[#f8f5f0] flex flex-col items-center pt-20 md:pt-32 pb-10 font-sans overflow-x-hidden text-[#333]">
      
      {/* HEADER MOBILE */}
      <div className="md:hidden text-center mb-8 px-4">
         <h2 className="text-2xl font-extrabold text-[#bf1e2e] uppercase">Lộ trình học trong năm</h2>
      </div>

      {/* MOBILE VERTICAL ROAD */}
      <div className="block md:hidden w-full px-4 mb-12 max-w-md">
        <div className="relative pl-8 ml-4 space-y-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-6 before:bg-[#333] before:rounded-full before:opacity-90">
             <div className="absolute left-[11px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-white/70 z-10"></div>
            {studyNodes.map((node) => (
                <div key={node.id} className="relative pl-8">
                    <div className="absolute -left-[42px] top-0 z-20">
                        <RoadPin number={node.id} className="scale-75 origin-center" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border-b-2 border-gray-100 relative ml-2">
                        <h3 className="text-[#bf1e2e] font-extrabold text-lg uppercase leading-tight">{node.time}</h3>
                        <p className="text-sm text-gray-700 mt-1 font-medium">{node.desc}</p>
                        <div className="absolute top-5 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* DESKTOP D3 ROAD */}
      <div className="hidden md:block w-full px-4 mb-10">
        <D3SnakeRoad />
      </div>

      {/* LỘ TRÌNH LUYỆN THI */}
      <div className="w-full max-w-7xl mt-16 px-4 relative z-10">
         <h2 className="text-center text-4xl md:text-5xl font-black text-[#9e2a2f] uppercase mb-20 tracking-wide">
            LỘ TRÌNH LUYỆN THI
         </h2>

         {/* Mobile Exam View */}
         <div className="block md:hidden max-w-md mx-auto">
           <div className="relative pl-8 ml-4 space-y-6 pb-4 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-6 before:bg-[#333] before:rounded-full before:opacity-90">
               <div className="absolute left-[11px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-white/70 z-10"></div>
               {examNodes.map((item) => (
                   <div key={item.id} className="relative pl-8">
                        <div className="absolute -left-[42px] top-0 z-20">
                           <RoadPin number={item.id} className="scale-75" />
                       </div>
                       <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border-l-4 border-[#bf1e2e] shadow-sm ml-2">
                           <h4 className="text-[#bf1e2e] font-bold text-base uppercase">{item.time}</h4>
                           <p className="text-sm text-gray-800 font-semibold leading-tight mt-1">{item.desc}</p>
                       </div>
                   </div>
               ))}
            </div>
         </div>

         {/* Desktop Exam View */}
         <div className="hidden md:flex relative w-full items-center justify-between px-10 lg:px-20 min-h-[350px]">
            
            {/* Background Road */}
            <div className="absolute top-[60%] left-0 w-full h-24 bg-[#333] -translate-y-1/2 rounded-full shadow-2xl z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full px-8">
                    <div className="w-full border-t-[5px] border-dashed border-white/70"></div>
                </div>
            </div>

            {/* Nodes */}
            {examNodes.map((item, idx) => (
              <div key={item.id} className="relative flex flex-col items-center z-10 group" style={{width: '24%'}}>
                  {/* Text Box */}
                  <div className="mb-[100px] w-full text-center transition-all duration-300 group-hover:-translate-y-2"> 
                      <div className="bg-white rounded-2xl shadow-2xl p-5 border-[3px] border-gray-100 relative hover:shadow-3xl transition-all">
                          <p className="text-gray-800 font-semibold text-sm leading-snug mb-3 min-h-[3.5rem] flex items-center justify-center">{item.desc}</p>
                          <h4 className="text-[#9e2a2f] font-black text-lg uppercase tracking-tight">{item.time}</h4>
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white transform rotate-45 border-r-[3px] border-b-[3px] border-gray-100"></div>
                      </div>
                  </div>
                  
                  {/* Pin */}
                  <div className="absolute top-[60%] transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                    <RoadPin number={item.id} />
                  </div>
              </div>
            ))}

            {/* Finish Flag - cột màu đỏ, lá cờ dính liền */}
            <div className="absolute right-4 top-[60%] -translate-y-[90%] z-20">
                <div className="relative">
                    <div className="w-1.5 h-24 bg-[#bf1e2e] mx-auto rounded-full shadow-lg"></div>
                    <div className="absolute top-2 left-1.5 w-20 h-12 bg-gradient-to-r from-[#bf1e2e] to-[#9e2a2f] shadow-xl origin-left" 
                         style={{clipPath: 'polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%)'}}></div>
                </div>
            </div>

         </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-gray-400 text-sm font-bold mt-32 uppercase tracking-[0.2em] pb-8">
        TRUNG TÂM TIN HỌC NGOẠI NGỮ ERG
      </div>
      
    </div>
  );
}