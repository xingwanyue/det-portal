export default [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free DET Course - Duolingo English Test Prep Courses | DET Practice',
    description:
      'Expert-Led DET Course with 95% Student Success Rate. Complete DET course covering all question types, integrated practice sets with each lesson, available in both video and text format.',
    url: 'https://www.detpractice.com/courses',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: '2025-03-18T16:00:00Z',
    mainEntity: {
      '@type': 'Course',
      name: 'Duolingo English Test Course',
      description:
        'Unlock DET Success: Comprehensive Mastery, Proven Techniques, and Up-to-Date Insights for Confident Speaking and Writing Excellence!',
      provider: {
        '@type': 'Organization',
        name: 'DET Practice',
        sameAs: 'https://www.detpractice.com/',
      },
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: 'Self-paced',
        },
      ],
    },
    mainContentSections: [
      {
        '@type': 'Section',
        name: 'DET Course: Your Path to Duolingo English Test Success',
        description:
          'Expert-Led DET Course with 95% Student Success Rate. Complete DET course covering all question types, integrated practice sets with each lesson, available in both video and text format, fully aligned with the 2025 DET exam format.',
      },
      {
        '@type': 'Section',
        name: 'DET Course: Duolingo English Test Reading Section',
        description:
          'The Duolingo English Test (DET) Reading section evaluates key language skills through diverse question types, assessing comprehension, vocabulary, and overall literacy. The question types include Read and Select, Fill in the Blanks, Interactive Reading, and Read and Complete.',
      },
      {
        '@type': 'Section',
        name: 'DET Course: Duolingo English Test Listening Section',
        description:
          "The Duolingo English Test (DET) features a comprehensive Learning Section that evaluates candidates' listening skills through two primary question types: Interactive Listening and Listen and Type.",
      },
      {
        '@type': 'Section',
        name: 'DET Course: Duolingo English Test Speaking Section',
        description:
          "The Duolingo English Test (DET) includes a dynamic Speaking Section designed to evaluate a candidate's oral proficiency through five distinct question types: Speak about the Photo, Read, then Speak, Listen, then Speak, Read Aloud, and a Speaking Sample.",
      },
      {
        '@type': 'Section',
        name: 'DET Course: Duolingo English Test Writing Section',
        description:
          "The Duolingo English Test (DET) includes a dedicated writing section designed to evaluate various aspects of a test taker's English writing proficiency. This section comprises three distinct question types: Write About the Photo, Interactive Writing, and the Writing Sample.",
      },
      {
        '@type': 'Section',
        name: 'DET Vocabulary Course: Mastering Language Skills for Test Success',
        description:
          'Our comprehensive Duolingo English Test (DET) Vocabulary Courses target the most challenging aspects of DET vocabulary, designed to enhance your language capabilities and maximize your test success.',
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
        name: "What's included in the DET course package?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our DET course package includes comprehensive modules covering all test sections (Reading, Listening, Speaking, and Writing), specialized vocabulary training, practice exercises integrated with each lesson, video and text format options, performance analytics, expert tips for each question type, and regular updates aligned with the latest exam format. The course is designed to provide a complete preparation experience with both theoretical knowledge and practical application.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this DET course different from other preparation materials?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our DET course stands out with its adaptive learning approach that tailors content to different proficiency levels, integrated practice-as-you-learn methodology, focus on strategy rather than just content, comprehensive coverage of all 2025 question types (including the newest formats), and inclusion of exclusive speaking and writing guides created by test experts. Additionally, our course is continuously updated based on real-time feedback from successful test-takers, ensuring the most relevant and effective preparation resources.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the DET course cover the latest test format?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our DET course is fully updated for the 2025 exam format. We have dedicated sections for all current question types, including the newest additions like Interactive Writing introduced in early 2024. Our team of specialists continuously monitors changes to the Duolingo English Test and promptly updates our course materials to ensure you're preparing with the most current and relevant content.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know which DET course section to start with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend beginning with our free diagnostic test to identify your strengths and weaknesses across all DET sections. Based on your results, our platform will suggest a personalized learning path, prioritizing areas that need the most improvement. However, if you already know your challenge areas, you can directly access specific modules such as Speaking, Writing, Reading, or Listening. For first-time test-takers, we suggest following the complete course in sequential order for a comprehensive understanding of the test format.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there sample answers included in the DET course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our DET course includes extensive sample answers for all question types. For Speaking and Writing sections, we provide model responses at different proficiency levels (from 85-145 score range) with detailed annotations explaining why each response would receive a particular score. These examples highlight both strong elements and areas for improvement, helping you understand exactly what evaluators look for. For Reading and Listening sections, we include comprehensive explanations for all practice questions, focusing on the reasoning behind correct answers.',
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
        name: 'Course',
        item: 'https://www.detpractice.com/courses',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Course',
        position: 1,
        name: 'Reading Course',
        description:
          'DET Reading section preparation course covering Read and Select, Fill in the Blanks, Interactive Reading, and Read and Complete question types.',
        provider: {
          '@type': 'Organization',
          name: 'DET Practice',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
        },
      },
      {
        '@type': 'Course',
        position: 2,
        name: 'Listening Course',
        description:
          'DET Listening section preparation course covering Listen and Type and Interactive Listening question types.',
        provider: {
          '@type': 'Organization',
          name: 'DET Practice',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
        },
      },
      {
        '@type': 'Course',
        position: 3,
        name: 'Speaking Course',
        description:
          'DET Speaking section preparation course covering Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, and Speaking Sample question types.',
        provider: {
          '@type': 'Organization',
          name: 'DET Practice',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
        },
      },
      {
        '@type': 'Course',
        position: 4,
        name: 'Writing Course',
        description:
          'DET Writing section preparation course covering Write About the Photo, Interactive Writing, and Writing Sample question types.',
        provider: {
          '@type': 'Organization',
          name: 'DET Practice',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
        },
      },
      {
        '@type': 'Course',
        position: 5,
        name: 'Vocabulary Course',
        description:
          'Comprehensive DET Vocabulary Courses targeting the most challenging aspects of DET vocabulary, designed to enhance language capabilities and maximize test success.',
        provider: {
          '@type': 'Organization',
          name: 'DET Practice',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Duolingo English Test Complete Preparation Course',
    description:
      'Comprehensive DET course covering all question types with integrated practice sets. Available in both video lessons and text format, fully aligned with the 2025 DET exam format.',
    provider: {
      '@type': 'Organization',
      name: 'DET Practice',
      sameAs: 'https://www.detpractice.com/',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'Self-paced',
    },
    courseCode: 'DET-COMPLETE',
    educationalLevel: 'Advanced',
    teaches: [
      'DET Reading skills',
      'DET Listening skills',
      'DET Speaking skills',
      'DET Writing skills',
      'Advanced vocabulary for DET',
      'Test-taking strategies',
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      validFrom: '2025-01-01',
      description: 'Free access for all DET Practice members, no additional fees',
    },
  },
];
