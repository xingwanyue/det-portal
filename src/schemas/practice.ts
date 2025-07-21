export default [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Duolingo English Test Practice Questions & AI-Powered Prep | DET Practice',
    description: 'AI-Enhanced Duolingo English Test Practice for Every DET Section',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: '2025-03-18T10:30:00Z',
    mainEntity: {
      '@type': 'SoftwareApplication',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      name: 'Duolingo English Test Practice',
      description:
        'Gain access to an extensive collection of Duolingo English Test practice questions, enhanced with answer analysis, templates, AI-driven speaking and writing evaluations, and smart planning.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        category: 'Subscription',
      },
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/UseAction',
        userInteractionCount: '400000',
      },
    },
    mainContentSections: [
      {
        '@type': 'Section',
        name: 'Practice Question Bank',
        description:
          '18K+ DET Practice Questions & Growing. Access the most comprehensive Duolingo English Test practice question bank, covering all exam sections from reading to speaking.',
      },
      {
        '@type': 'Section',
        name: 'Smart Study Path',
        description:
          'Get your personalized study path to ace the Duolingo English Test practice with AI-powered system that analyzes your performance.',
      },
      {
        '@type': 'Section',
        name: 'AI-Powered Evaluation',
        description:
          'Get instant feedback on your Duolingo English Test responses for both speaking and writing submissions.',
      },
      {
        '@type': 'Section',
        name: 'Answer Analysis',
        description:
          'Get detailed explanations for your Duolingo English Test practice answers with AI breakdown of each question.',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          applicationCategory: 'EducationalApplication',
          name: 'DET Full-Length Mock Test',
          description:
            'Conquer Your Exam with Authentic Full-Length Mocks: In-depth Analysis and Instant Results, Available Anytime, Anywhere.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          applicationCategory: 'EducationalApplication',
          name: 'DET Writing AI Correction',
          description:
            'Get accurate scores and detailed reports so that you can improve your writing skills faster. Support all writing questions!',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          applicationCategory: 'EducationalApplication',
          name: 'DET Speaking AI Correction',
          description:
            'Leverage powerful AI to improve your DET speaking score in a targeted manner. Support all speaking questions!',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Duolingo English Test Course',
          description:
            'Unlock DET Success: Comprehensive Mastery, Proven Techniques, and Up-to-Date Insights for Confident Speaking and Writing Excellence!',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          applicationCategory: 'EducationalApplication',
          name: 'Duolingo Practice Test',
          description:
            'Assess your listening, speaking, reading, and writing skills to identify areas for improvement.',
        },
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
        name: 'Duolingo English Test Practice',
        item: 'https://www.detpractice.com/practice',
      },
    ],
  },
];
