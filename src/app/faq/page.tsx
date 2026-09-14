import React from 'react';

export const metadata = {
  title: 'Frequently Asked Questions | abhishek portfolio',
  description: 'Find answers to common questions about abhishek portfolio, features, security, and services on iabhi.live.',
  alternates: { canonical: 'https://iabhi.live/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | abhishek portfolio',
    description: 'Find answers to common questions about abhishek portfolio.',
    url: 'https://iabhi.live/faq',
    siteName: 'abhishek portfolio',
    type: 'website',
  },
};

export default function FAQPage() {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of software engineering services do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in building scalable, intelligent applications as an AI full stack developer. My expertise spans the entire development lifecycle, from architecting robust backends and intuitive frontends to integrating advanced machine learning models and optimizing DevOps pipelines."
      }
    },
    {
      "@type": "Question",
      "name": "How can an AI software engineer help my business grow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As an AI software engineer, I bridge the gap between traditional software development and artificial intelligence. I help businesses automate complex workflows, implement predictive analytics, and build AI-driven features that enhance user experience and provide a competitive edge in the market."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have experience with end-to-end ML engineering and deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I am an experienced ML engineer with a strong focus on production-grade deployments. I don't just build models; I ensure they are scalable, maintainable, and seamlessly integrated into your existing infrastructure using modern DevOps practices."
      }
    },
    {
      "@type": "Question",
      "name": "What is your approach to DevOps and infrastructure management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As a DevOps engineer, I prioritize automation, CI/CD efficiency, and cloud-native architecture. My goal is to ensure your software is reliable, secure, and capable of handling high traffic loads with minimal downtime, allowing your team to focus on feature development."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I hire you as a senior software engineer for my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With a deep background as a senior software engineer, I bring technical leadership, architectural foresight, and a problem-solving mindset to every project. Whether you need a complex AI system or a high-performance web application, I deliver clean, efficient, and future-proof code that aligns with your business objectives."
      }
    }
  ]
};

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
        >
          ← Back to Home
        </a>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Everything you need to know about abhishek portfolio.</p>
      <div className="faq-list">
          <div key={0} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What kind of software engineering services do you specialize in?</h3>
            <p className="text-gray-600">I specialize in building scalable, intelligent applications as an AI full stack developer. My expertise spans the entire development lifecycle, from architecting robust backends and intuitive frontends to integrating advanced machine learning models and optimizing DevOps pipelines.</p>
          </div>
          <div key={1} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can an AI software engineer help my business grow?</h3>
            <p className="text-gray-600">As an AI software engineer, I bridge the gap between traditional software development and artificial intelligence. I help businesses automate complex workflows, implement predictive analytics, and build AI-driven features that enhance user experience and provide a competitive edge in the market.</p>
          </div>
          <div key={2} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you have experience with end-to-end ML engineering and deployment?</h3>
            <p className="text-gray-600">Yes, I am an experienced ML engineer with a strong focus on production-grade deployments. I don't just build models; I ensure they are scalable, maintainable, and seamlessly integrated into your existing infrastructure using modern DevOps practices.</p>
          </div>
          <div key={3} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your approach to DevOps and infrastructure management?</h3>
            <p className="text-gray-600">As a DevOps engineer, I prioritize automation, CI/CD efficiency, and cloud-native architecture. My goal is to ensure your software is reliable, secure, and capable of handling high traffic loads with minimal downtime, allowing your team to focus on feature development.</p>
          </div>
          <div key={4} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why should I hire you as a senior software engineer for my project?</h3>
            <p className="text-gray-600">With a deep background as a senior software engineer, I bring technical leadership, architectural foresight, and a problem-solving mindset to every project. Whether you need a complex AI system or a high-performance web application, I deliver clean, efficient, and future-proof code that aligns with your business objectives.</p>
          </div>
      </div>
    </main>
  );
}
