export default [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Duolingo Mock Test Online - Most Realistic Practice | DET Practice',
    description:
      'Practice with our true-to-life Duolingo mock test that perfectly mirrors the real exam environment. Get instant scores and in-depth analysis to identify your strengths and weaknesses.',
    url: 'https://www.detpractice.com/mock-exam',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: '2025-03-18T12:00:00Z',
    mainEntity: {
      '@type': 'SoftwareApplication',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      name: 'DET Full-Length Mock Test',
      description:
        'Conquer Your Exam with Authentic Full-Length Mocks: In-depth Analysis and Instant Results, Available Anytime, Anywhere.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        category: 'Subscription',
        priceCurrency: 'USD',
      },
      userInteraction: {
        '@type': 'InteractionCounter',
        interactionType: 'http://schema.org/UseAction',
        userInteractionCount: '10000',
        description: '10,000+ successful test-takers who trust our Duolingo mock tests',
      },
      featureList:
        'Real-test experience, Comprehensive score analysis, Rapid feedback (5-30 minutes), Accessible anytime and anywhere',
    },
    mainContentSections: [
      {
        '@type': 'Section',
        name: 'Comprehensive Duolingo Mock Test',
        description:
          'Practice with our true-to-life Duolingo mock test that perfectly mirrors the real exam environment. Get instant scores and in-depth analysis to identify your strengths and weaknesses, helping you prepare with confidence for the actual test.',
      },
      {
        '@type': 'Section',
        name: 'DET Mock Test Like Test Day',
        description:
          'Know exactly what to expect on test day. Our DET mock test mirrors the official DET environment, helping you feel confident and prepared for the real thing. Practice with accurately timed sections and authentic question types to master the test format.',
      },
      {
        '@type': 'Section',
        name: 'Comprehensive Score Analysis',
        description:
          'Receive detailed mock test reports with precise performance analysis across all sections. Our intelligent AI system identifies your strengths and areas for improvement, creating personalized study recommendations to boost your test preparation.',
      },
      {
        '@type': 'Section',
        name: 'DET Mock Test Anytime, Anywhere',
        description:
          "Take a DET mock test whenever and wherever it's convenient for you. Our online platform provides instant access to practice tests, so you can prepare on your schedule.",
      },
      {
        '@type': 'Section',
        name: 'Rapid DET Mock Feedback Report',
        description:
          'Get your detailed DET mock test results in just 5-30 minutes. Our lightening-fast scoring system provides immediate feedback, allowing you to track your progress and adjust your preparation strategy efficiently.',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'DET Practice',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.detpractice.com/img/footer/small_logo.svg',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes your Duolingo mock test different from other practice materials?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Duolingo mock tests provide the most authentic test experience available, precisely mirroring the official exam format, question types, and timing. Unlike generic practice materials, our tests use advanced AI to analyze your performance and provide personalized feedback, just like the real DET.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete a full Duolingo mock test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full Duolingo mock test takes approximately 45-60 minutes to complete, matching the duration of the actual Duolingo English Test. This includes all sections: reading, writing, listening, and speaking.',
        },
      },
      {
        '@type': 'Question',
        name: 'When will I receive my Duolingo mock test results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You'll receive your detailed DET mock test results within 5-30 minutes after completion. Our rapid scoring system analyzes your performance across all sections and provides comprehensive feedback much faster than the official test.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I take the Duolingo mock test multiple times?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can take our Duolingo mock tests multiple times depending on your subscription plan. Each attempt provides a new set of questions while maintaining the same format and difficulty level, allowing you to practice extensively.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to install any special software for the Duolingo mock test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, our Duolingo mock tests are completely web-based. You only need a modern web browser, a stable internet connection, a microphone for speaking sections, and speakers or headphones for listening sections.',
        },
      },
      {
        '@type': 'Question',
        name: 'How up-to-date is your Duolingo mock test content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Duolingo mock test content is continuously updated to reflect the latest changes in the official DET. Our team of experts monitors the actual test closely and updates our question bank regularly to ensure you practice with the most current format and question types.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.detpractice.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.detpractice.com/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Duolingo Mock Test',
        item: 'https://www.detpractice.com/mock-exam',
      },
    ],
  },
];
