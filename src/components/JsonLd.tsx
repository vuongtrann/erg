
'use client';
import React from 'react';

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trung tâm tin học Giáo dục phát triển toàn cầu",
    "alternateName": ["Edurise Global", "Trung tâm tin học Giáo dục phát triển toàn cầu"],
    "url": "https://erg.edu.vn",
    "logo": "https://erg.edu.vn/erg.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0766144888",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://www.facebook.com/eduriseerg",
      "https://www.youtube.com/eduriseerg",
      "https://zalo.me/0766144888"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Số 83B, đường Hoàng Sa",
      "addressLocality": "Phường Tân Định",
      "addressRegion": "TP.Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "description": "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục. Cam kết chất lượng đầu ra cho học viên.."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default JsonLd;
