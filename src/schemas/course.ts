export default {
  en: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/courses#webpage',
          url: 'https://www.detpractice.com/courses',
          name: 'Free DET Course - Duolingo English Test Prep Courses | DET Practice',
          description:
            'Expert-Led DET Course with 95% Student Success Rate. Complete DET course covering all question types, integrated practice sets, available in video and text format.',
          inLanguage: 'en',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'View in other languages',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/courses#completeCourse',
          name: 'Duolingo English Test Complete Preparation Course',
          description:
            'Comprehensive DET course covering all question types with integrated practice sets. Available in both video lessons and text format, fully aligned with the latest DET exam format.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Advanced',
          learningResourceType: [
            'Video Lessons',
            'Text Materials',
            'Practice Sets',
            'Course Material',
            'Exam Preparation',
          ],
          teaches: [
            'DET Reading skills',
            'DET Listening skills',
            'DET Speaking skills',
            'DET Writing skills',
            'Advanced vocabulary for DET',
            'Test-taking strategies',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Free Course Access',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Free access for all DET Practice members, no additional fees',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/courses#reading' },
            { '@id': 'https://www.detpractice.com/courses#listening' },
            { '@id': 'https://www.detpractice.com/courses#speaking' },
            { '@id': 'https://www.detpractice.com/courses#writing' },
            { '@id': 'https://www.detpractice.com/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/courses#courseSections',
          name: 'DET Course Sections',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/courses#reading',
              position: 1,
              name: 'Reading Course',
              description:
                'DET Reading section preparation course covering Read and Select, Fill in the Blanks, Interactive Reading, and Read and Complete question types.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Test-takers are shown a series of words and must identify whether the ones are real English words. This task evaluates vocabulary recognition and the ability to distinguish between valid and invalid words, reflecting real-world word comprehension.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Candidates are presented with sentences containing missing words. They must select the correct words from a list to complete the sentences meaningfully. This task assesses grammar, vocabulary, and the ability to understand contextual clues.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: This component involves reading passages followed by various question types, such as completing sentences, selecting the appropriate sentence to fill a gap, highlighting answers within the text, identifying main ideas, and choosing suitable titles for passages. It gauges your comprehension, critical thinking, and ability to interpret written English in various contexts.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: This question type presents a passage with missing letters within words. Test-takers must deduce and restore the complete words. It focuses on spelling, contextual understanding, and vocabulary application.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/courses#listening',
              position: 2,
              name: 'Listening Course',
              description:
                'DET Listening section preparation course covering Listen and Type and Interactive Listening question types.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'In the Listen and Type question type, test-takers listen to spoken sentences and must accurately transcribe them. This format not only gauges the ability to understand spoken English but also evaluates spelling and punctuation skills, which are crucial for effective written communication. Typically, this question type appears 6 to 9 times throughout the test, reflecting its significance in assessing comprehension and conversation skills.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    "Conversely, the Interactive Listening section simulates real-life conversations, often set in academic contexts. Candidates engage in dialogues between peers or between a student and a faculty member, answering questions that test their understanding of the content. This section emphasizes active listening and the ability to synthesize information from discussions, essential for academic success. Overall, these question types collectively enhance the DET's goal of measuring a candidate's readiness for English-speaking environments in both academic and everyday settings.",
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/courses#speaking',
              position: 3,
              name: 'Speaking Course',
              description:
                'DET Speaking section preparation course covering Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, and Speaking Sample question types.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'In the Speak about the Photo task, candidates describe an image in detail, which tests their ability to articulate thoughts and use descriptive language. This question typically lasts up to 90 seconds and evaluates both fluency and vocabulary.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'The Read, then Speak and Listen, then Speak tasks require test-takers to respond to prompts based on written or spoken content, respectively. These formats assess comprehension and the ability to convey ideas clearly and coherently within a time limit.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'The Read Aloud question challenges candidates to read a provided text aloud, focusing on pronunciation and intonation.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Lastly, the Speaking Sample allows candidates to showcase their speaking skills, providing institutions with additional insight into their proficiency. Collectively, these question types ensure a comprehensive evaluation of speaking skills necessary for success in English-speaking environments.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/courses#writing',
              position: 4,
              name: 'Writing Course',
              description:
                'DET Writing section preparation course covering Write About the Photo, Interactive Writing, and Writing Sample question types.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo requires candidates to observe an image and compose a descriptive paragraph within a one-minute timeframe. This task assesses the ability to articulate visual details and express coherent thoughts, emphasizing vocabulary and grammatical accuracy.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, introduced in early 2024, presents a two-part challenge. Initially, test takers respond to a prompt for five minutes, followed by a second prompt generated based on their first response, requiring an additional three minutes of writing. This format tests not only creativity and coherence but also adaptability in writing, as candidates must build upon their initial ideas.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    "The Writing Sample question asks test takers to write a structured response to a given topic within a limited time. This task evaluates overall writing skills, including organization, clarity, and argumentation. Collectively, these question types ensure a comprehensive assessment of candidates' writing abilities in real-world contexts, reflecting their readiness for academic or professional environments.",
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/courses#vocabulary',
              position: 5,
              name: 'Vocabulary Course',
              description:
                'Comprehensive DET Vocabulary Courses targeting the most challenging aspects of DET vocabulary, including advanced photo description techniques and interactive listening scenario vocabulary, designed to enhance language capabilities and maximize test success.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/courses#breadcrumb',
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
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/courses#faq',
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
                text: 'Our DET course stands out with its adaptive learning approach that tailors content to different proficiency levels, integrated practice-as-you-learn methodology, focus on strategy rather than just content, comprehensive coverage of all question types (including the newest formats), and inclusion of exclusive speaking and writing guides created by test experts. Additionally, our course is continuously updated based on real-time feedback from successful test-takers, ensuring the most relevant and effective preparation resources.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the DET course cover the latest test format?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, our DET course is fully updated for the latest exam format. We have dedicated sections for all current question types, including the newest additions like Interactive Writing introduced in early 2024. Our team of specialists continuously monitors changes to the Duolingo English Test and promptly updates our course materials to ensure you're preparing with the most current and relevant content.",
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
      ],
    },
  ],
  de: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/de/courses#webpage',
          url: 'https://www.detpractice.com/de/courses',
          name: 'Kostenloser DET-Kurs - Duolingo English Test Vorbereitungskurse | DET Practice',
          description:
            'Von Experten geleiteter DET-Kurs mit 95% Erfolgsquote bei Studenten. Kompletter DET-Kurs, der alle Fragetypen abdeckt, integrierte Übungssätze, verfügbar im Video- und Textformat.',
          inLanguage: 'de',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/de/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/de/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/de/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/de/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'In anderen Sprachen anzeigen',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/de/courses#completeCourse',
          name: 'Duolingo English Test Kompletter Vorbereitungskurs',
          description:
            'Umfassender DET-Kurs, der alle Fragetypen mit integrierten Übungssätzen abdeckt. Verfügbar sowohl in Video-Lektionen als auch im Textformat, vollständig auf das neueste DET-Prüfungsformat abgestimmt.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/de/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Fortgeschritten',
          learningResourceType: [
            'Videolektionen',
            'Textmaterialien',
            'Übungssätze',
            'Kursmaterial',
            'Prüfungsvorbereitung',
          ],
          teaches: [
            'DET Lesefähigkeiten',
            'DET Hörfähigkeiten',
            'DET Sprechfähigkeiten',
            'DET Schreibfähigkeiten',
            'Fortgeschrittener Wortschatz für DET',
            'Teststrategien',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Kostenloser Kurszugang',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Kostenloser Zugang für alle DET Practice Mitglieder, keine zusätzlichen Gebühren',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/de/courses#reading' },
            { '@id': 'https://www.detpractice.com/de/courses#listening' },
            { '@id': 'https://www.detpractice.com/de/courses#speaking' },
            { '@id': 'https://www.detpractice.com/de/courses#writing' },
            { '@id': 'https://www.detpractice.com/de/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/de/courses#courseSections',
          name: 'DET Kursabschnitte',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/de/courses#reading',
              position: 1,
              name: 'Lesekurs',
              description:
                'DET Lesebereich Vorbereitungskurs, der die Fragetypen Read and Select, Fill in the Blanks, Interactive Reading und Read and Complete abdeckt.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/de/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Testteilnehmern wird eine Reihe von Wörtern gezeigt, und sie müssen identifizieren, welche davon echte englische Wörter sind. Diese Aufgabe bewertet die Worterkennung und die Fähigkeit, zwischen gültigen und ungültigen Wörtern zu unterscheiden, was das Wortverständnis in der realen Welt widerspiegelt.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Kandidaten werden Sätze mit fehlenden Wörtern präsentiert. Sie müssen die richtigen Wörter aus einer Liste auswählen, um die Sätze sinnvoll zu vervollständigen. Diese Aufgabe bewertet Grammatik, Wortschatz und die Fähigkeit, kontextuelle Hinweise zu verstehen.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Diese Komponente beinhaltet das Lesen von Passagen, gefolgt von verschiedenen Fragetypen, wie z.B. das Vervollständigen von Sätzen, die Auswahl des passenden Satzes zum Füllen einer Lücke, das Hervorheben von Antworten im Text, die Identifizierung von Hauptideen und die Auswahl geeigneter Titel für Passagen. Es misst Ihr Verständnis, kritisches Denken und die Fähigkeit, geschriebenes Englisch in verschiedenen Kontexten zu interpretieren.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Dieser Fragetyp präsentiert eine Passage mit fehlenden Buchstaben innerhalb von Wörtern. Testteilnehmer müssen die vollständigen Wörter ableiten und wiederherstellen. Es konzentriert sich auf Rechtschreibung, kontextuelles Verständnis und Wortschatzanwendung.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/de/courses#listening',
              position: 2,
              name: 'Hörkurs',
              description:
                'DET Hörbereich Vorbereitungskurs, der die Fragetypen Listen and Type und Interactive Listening abdeckt.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/de/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'Beim Fragetyp Listen and Type hören Testteilnehmer gesprochene Sätze und müssen diese korrekt transkribieren. Dieses Format misst nicht nur die Fähigkeit, gesprochenes Englisch zu verstehen, sondern bewertet auch Rechtschreib- und Zeichensetzungsfähigkeiten, die für eine effektive schriftliche Kommunikation entscheidend sind. Typischerweise erscheint dieser Fragetyp 6 bis 9 Mal im gesamten Test, was seine Bedeutung für die Bewertung des Verständnisses und der Konversationsfähigkeiten widerspiegelt.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'Im Gegensatz dazu simuliert der Abschnitt Interactive Listening reale Gespräche, oft in akademischen Kontexten. Kandidaten nehmen an Dialogen zwischen Kommilitonen oder zwischen einem Studenten und einem Fakultätsmitglied teil und beantworten Fragen, die ihr Verständnis des Inhalts testen. Dieser Abschnitt betont aktives Zuhören und die Fähigkeit, Informationen aus Diskussionen zu synthetisieren, was für den akademischen Erfolg unerlässlich ist. Insgesamt verbessern diese Fragetypen gemeinsam das Ziel des DET, die Bereitschaft eines Kandidaten für englischsprachige Umgebungen sowohl in akademischen als auch in alltäglichen Situationen zu messen.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/de/courses#speaking',
              position: 3,
              name: 'Sprechkurs',
              description:
                'DET Sprechbereich Vorbereitungskurs, der die Fragetypen Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud und Speaking Sample abdeckt.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/de/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Bei der Aufgabe Speak about the Photo beschreiben Kandidaten ein Bild detailliert, was ihre Fähigkeit testet, Gedanken zu artikulieren und beschreibende Sprache zu verwenden. Diese Frage dauert typischerweise bis zu 90 Sekunden und bewertet sowohl Flüssigkeit als auch Wortschatz.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Die Aufgaben Read, then Speak und Listen, then Speak erfordern, dass Testteilnehmer auf Aufforderungen reagieren, die jeweils auf schriftlichem oder gesprochenem Inhalt basieren. Diese Formate bewerten das Verständnis und die Fähigkeit, Ideen innerhalb einer Zeitbegrenzung klar und kohärent zu vermitteln.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Die Frage Read Aloud fordert Kandidaten heraus, einen bereitgestellten Text laut vorzulesen, wobei der Schwerpunkt auf Aussprache und Intonation liegt.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Schließlich ermöglicht das Speaking Sample den Kandidaten, ihre Sprechfähigkeiten zu präsentieren und Institutionen zusätzliche Einblicke in ihre Kompetenz zu geben. Gemeinsam gewährleisten diese Fragetypen eine umfassende Bewertung der Sprechfähigkeiten, die für den Erfolg in englischsprachigen Umgebungen erforderlich sind.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/de/courses#writing',
              position: 4,
              name: 'Schreibkurs',
              description:
                'DET Schreibbereich Vorbereitungskurs, der die Fragetypen Write About the Photo, Interactive Writing und Writing Sample abdeckt.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/de/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo erfordert von Kandidaten, ein Bild zu beobachten und innerhalb einer Minute einen beschreibenden Absatz zu verfassen. Diese Aufgabe bewertet die Fähigkeit, visuelle Details zu artikulieren und kohärente Gedanken auszudrücken, wobei Wortschatz und grammatikalische Genauigkeit betont werden.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, eingeführt Anfang 2024, stellt eine zweiteilige Herausforderung dar. Zunächst reagieren Testteilnehmer fünf Minuten lang auf eine Aufforderung, gefolgt von einer zweiten Aufforderung, die auf ihrer ersten Antwort basiert und zusätzliche drei Minuten Schreibzeit erfordert. Dieses Format testet nicht nur Kreativität und Kohärenz, sondern auch die Anpassungsfähigkeit beim Schreiben, da Kandidaten auf ihren anfänglichen Ideen aufbauen müssen.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Die Frage Writing Sample fordert Testteilnehmer auf, innerhalb einer begrenzten Zeit eine strukturierte Antwort auf ein gegebenes Thema zu schreiben. Diese Aufgabe bewertet allgemeine Schreibfähigkeiten, einschließlich Organisation, Klarheit und Argumentation. Gemeinsam gewährleisten diese Fragetypen eine umfassende Bewertung der Schreibfähigkeiten der Kandidaten in realen Kontexten, was ihre Bereitschaft für akademische oder berufliche Umgebungen widerspiegelt.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/de/courses#vocabulary',
              position: 5,
              name: 'Wortschatzkurs',
              description:
                'Umfassender DET-Wortschatzkurs, der auf die anspruchsvollsten Aspekte des DET-Wortschatzes abzielt, einschließlich fortgeschrittener Fotobeschreibungstechniken und Wortschatz für Interactive Listening-Szenarien, konzipiert zur Verbesserung der Sprachfähigkeiten und Maximierung des Testerfolgs.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/de/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/de/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Startseite',
              item: 'https://www.detpractice.com/de/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Kurs',
              item: 'https://www.detpractice.com/de/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/de/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Was ist im DET-Kurspaket enthalten?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Unser DET-Kurspaket umfasst umfassende Module, die alle Testabschnitte (Lesen, Hören, Sprechen und Schreiben) abdecken, spezialisiertes Vokabeltraining, in jede Lektion integrierte Übungsaufgaben, Optionen im Video- und Textformat, Leistungsanalysen, Expertentipps für jeden Fragetyp und regelmäßige Updates, die auf das neueste Prüfungsformat abgestimmt sind. Der Kurs ist darauf ausgelegt, eine vollständige Vorbereitungserfahrung mit sowohl theoretischem Wissen als auch praktischer Anwendung zu bieten.',
              },
            },
            {
              '@type': 'Question',
              name: 'Wie unterscheidet sich dieser DET-Kurs von anderen Vorbereitungsmaterialien?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Unser DET-Kurs zeichnet sich durch seinen adaptiven Lernansatz aus, der Inhalte an unterschiedliche Kompetenzniveaus anpasst, die integrierte Methodik des Übens während des Lernens, den Fokus auf Strategie statt nur auf Inhalte, die umfassende Abdeckung aller Fragetypen (einschließlich der neuesten Formate wie Interactive Writing) und die Einbeziehung exklusiver Sprech- und Schreibanleitungen, die von Testexperten erstellt wurden. Darüber hinaus wird unser Kurs kontinuierlich auf der Grundlage von Echtzeit-Feedback erfolgreicher Testteilnehmer aktualisiert, um die relevantesten und effektivsten Vorbereitungsressourcen zu gewährleisten.',
              },
            },
            {
              '@type': 'Question',
              name: 'Deckt der DET-Kurs das neueste Testformat ab?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, unser DET-Kurs ist vollständig für das neueste Prüfungsformat aktualisiert. Wir haben spezielle Abschnitte für alle aktuellen Fragetypen, einschließlich der neuesten Ergänzungen wie Interactive Writing, das Anfang 2024 eingeführt wurde. Unser Expertenteam überwacht kontinuierlich Änderungen am Duolingo English Test und aktualisiert unsere Kursmaterialien umgehend, um sicherzustellen, dass Sie sich mit den aktuellsten und relevantesten Inhalten vorbereiten.',
              },
            },
            {
              '@type': 'Question',
              name: 'Woher weiß ich, mit welchem DET-Kursabschnitt ich beginnen soll?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Wir empfehlen, mit unserem kostenlosen Diagnosetest zu beginnen, um Ihre Stärken und Schwächen in allen DET-Abschnitten zu identifizieren. Basierend auf Ihren Ergebnissen schlägt unsere Plattform einen personalisierten Lernpfad vor, der Bereiche priorisiert, die die meiste Verbesserung benötigen. Wenn Sie jedoch bereits Ihre Herausforderungsbereiche kennen, können Sie direkt auf bestimmte Module wie Sprechen, Schreiben, Lesen oder Hören zugreifen. Für erstmalige Testteilnehmer empfehlen wir, den vollständigen Kurs in sequentieller Reihenfolge zu absolvieren, um ein umfassendes Verständnis des Testformats zu erhalten.',
              },
            },
            {
              '@type': 'Question',
              name: 'Sind im DET-Kurs Beispielantworten enthalten?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, unser DET-Kurs enthält umfangreiche Beispielantworten für alle Fragetypen. Für die Abschnitte Sprechen und Schreiben stellen wir Modellantworten auf verschiedenen Kompetenzniveaus (von 85-145 Punkten) mit detaillierten Anmerkungen zur Verfügung, die erklären, warum jede Antwort eine bestimmte Punktzahl erhalten würde. Diese Beispiele heben sowohl starke Elemente als auch Verbesserungsbereiche hervor und helfen Ihnen zu verstehen, wonach Gutachter genau suchen. Für die Abschnitte Lesen und Hören enthalten wir umfassende Erklärungen für alle Übungsfragen, die sich auf die Begründung der richtigen Antworten konzentrieren.',
              },
            },
          ],
        },
      ],
    },
  ],
  es: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/es/courses#webpage',
          url: 'https://www.detpractice.com/es/courses',
          name: 'Curso DET Gratuito - Cursos de Preparación para el Duolingo English Test | DET Practice',
          description:
            'Curso DET dirigido por expertos con una tasa de éxito estudiantil del 95%. Curso DET completo que cubre todos los tipos de preguntas, conjuntos de práctica integrados, disponible en formato de video y texto.',
          inLanguage: 'es',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/es/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/es/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/es/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/es/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Ver en otros idiomas',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/es/courses#completeCourse',
          name: 'Curso Completo de Preparación para el Duolingo English Test',
          description:
            'Curso DET integral que cubre todos los tipos de preguntas con conjuntos de práctica integrados. Disponible tanto en lecciones de video como en formato de texto, totalmente alineado con el último formato del examen DET.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/es/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Avanzado',
          learningResourceType: [
            'Lecciones en video',
            'Materiales de texto',
            'Conjuntos de práctica',
            'Material del curso',
            'Preparación para exámenes',
          ],
          teaches: [
            'Habilidades de lectura DET',
            'Habilidades de escucha DET',
            'Habilidades de habla DET',
            'Habilidades de escritura DET',
            'Vocabulario avanzado para DET',
            'Estrategias para tomar exámenes',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Acceso gratuito al curso',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Acceso gratuito para todos los miembros de DET Practice, sin cargos adicionales',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/es/courses#reading' },
            { '@id': 'https://www.detpractice.com/es/courses#listening' },
            { '@id': 'https://www.detpractice.com/es/courses#speaking' },
            { '@id': 'https://www.detpractice.com/es/courses#writing' },
            { '@id': 'https://www.detpractice.com/es/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/es/courses#courseSections',
          name: 'Secciones del Curso DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/es/courses#reading',
              position: 1,
              name: 'Curso de Lectura',
              description:
                'Curso de preparación de la sección de Lectura del DET que cubre los tipos de preguntas Read and Select, Fill in the Blanks, Interactive Reading y Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/es/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: A los examinados se les muestra una serie de palabras y deben identificar cuáles son palabras reales en inglés. Esta tarea evalúa el reconocimiento de vocabulario y la capacidad de distinguir entre palabras válidas e inválidas, reflejando la comprensión de palabras en el mundo real.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: A los candidatos se les presentan oraciones que contienen palabras faltantes. Deben seleccionar las palabras correctas de una lista para completar las oraciones de manera significativa. Esta tarea evalúa la gramática, el vocabulario y la capacidad de comprender pistas contextuales.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Este componente implica leer pasajes seguidos de varios tipos de preguntas, como completar oraciones, seleccionar la oración apropiada para llenar un vacío, resaltar respuestas dentro del texto, identificar ideas principales y elegir títulos adecuados para los pasajes. Mide su comprensión, pensamiento crítico y capacidad para interpretar el inglés escrito en diversos contextos.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Este tipo de pregunta presenta un pasaje con letras faltantes dentro de las palabras. Los examinados deben deducir y restaurar las palabras completas. Se centra en la ortografía, la comprensión contextual y la aplicación del vocabulario.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/es/courses#listening',
              position: 2,
              name: 'Curso de Escucha',
              description:
                'Curso de preparación de la sección de Escucha del DET que cubre los tipos de preguntas Listen and Type e Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/es/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'En el tipo de pregunta Listen and Type, los examinados escuchan oraciones habladas y deben transcribirlas con precisión. Este formato no solo mide la capacidad de comprender el inglés hablado, sino que también evalúa las habilidades de ortografía y puntuación, que son cruciales para una comunicación escrita eficaz. Normalmente, este tipo de pregunta aparece de 6 a 9 veces a lo largo de la prueba, lo que refleja su importancia en la evaluación de la comprensión y las habilidades de conversación.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'Por el contrario, la sección Interactive Listening simula conversaciones de la vida real, a menudo ambientadas en contextos académicos. Los candidatos participan en diálogos entre compañeros o entre un estudiante y un miembro de la facultad, respondiendo preguntas que ponen a prueba su comprensión del contenido. Esta sección enfatiza la escucha activa y la capacidad de sintetizar información de las discusiones, esencial para el éxito académico. En general, estos tipos de preguntas mejoran colectivamente el objetivo del DET de medir la preparación de un candidato para entornos de habla inglesa tanto en entornos académicos como cotidianos.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/es/courses#speaking',
              position: 3,
              name: 'Curso de Habla',
              description:
                'Curso de preparación de la sección de Habla del DET que cubre los tipos de preguntas Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud y Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/es/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'En la tarea Speak about the Photo, los candidatos describen una imagen en detalle, lo que pone a prueba su capacidad para articular pensamientos y usar lenguaje descriptivo. Esta pregunta suele durar hasta 90 segundos y evalúa tanto la fluidez como el vocabulario.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Las tareas Read, then Speak y Listen, then Speak requieren que los examinados respondan a indicaciones basadas en contenido escrito o hablado, respectivamente. Estos formatos evalúan la comprensión y la capacidad de transmitir ideas de manera clara y coherente dentro de un límite de tiempo.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'La pregunta Read Aloud desafía a los candidatos a leer en voz alta un texto proporcionado, centrándose en la pronunciación y la entonación.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Por último, el Speaking Sample permite a los candidatos mostrar sus habilidades de habla, proporcionando a las instituciones información adicional sobre su competencia. En conjunto, estos tipos de preguntas aseguran una evaluación integral de las habilidades de habla necesarias para el éxito en entornos de habla inglesa.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/es/courses#writing',
              position: 4,
              name: 'Curso de Escritura',
              description:
                'Curso de preparación de la sección de Escritura del DET que cubre los tipos de preguntas Write About the Photo, Interactive Writing y Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/es/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo requiere que los candidatos observen una imagen y redacten un párrafo descriptivo en un plazo de un minuto. Esta tarea evalúa la capacidad de articular detalles visuales y expresar pensamientos coherentes, enfatizando el vocabulario y la precisión gramatical.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, introducido a principios de 2024, presenta un desafío de dos partes. Inicialmente, los examinados responden a una indicación durante cinco minutos, seguido de una segunda indicación generada en base a su primera respuesta, que requiere tres minutos adicionales de escritura. Este formato pone a prueba no solo la creatividad y la coherencia, sino también la adaptabilidad en la escritura, ya que los candidatos deben construir sobre sus ideas iniciales.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'La pregunta Writing Sample pide a los examinados que escriban una respuesta estructurada a un tema determinado en un tiempo limitado. Esta tarea evalúa las habilidades generales de escritura, incluida la organización, la claridad y la argumentación. En conjunto, estos tipos de preguntas aseguran una evaluación integral de las habilidades de escritura de los candidatos en contextos del mundo real, reflejando su preparación para entornos académicos o profesionales.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/es/courses#vocabulary',
              position: 5,
              name: 'Curso de Vocabulario',
              description:
                'Cursos de vocabulario DET completos dirigidos a los aspectos más desafiantes del vocabulario DET, incluidas técnicas avanzadas de descripción de fotos y vocabulario de escenarios de Interactive Listening, diseñados para mejorar las capacidades lingüísticas y maximizar el éxito en el examen.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/es/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/es/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: 'https://www.detpractice.com/es/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Curso',
              item: 'https://www.detpractice.com/es/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/es/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Qué incluye el paquete del curso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nuestro paquete de curso DET incluye módulos completos que cubren todas las secciones del examen (Lectura, Escucha, Habla y Escritura), entrenamiento de vocabulario especializado, ejercicios prácticos integrados con cada lección, opciones de formato de video y texto, análisis de rendimiento, consejos de expertos para cada tipo de pregunta y actualizaciones periódicas alineadas con el último formato del examen. El curso está diseñado para proporcionar una experiencia de preparación completa con conocimientos teóricos y aplicación práctica.',
              },
            },
            {
              '@type': 'Question',
              name: '¿En qué se diferencia este curso DET de otros materiales de preparación?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nuestro curso DET se destaca por su enfoque de aprendizaje adaptativo que adapta el contenido a diferentes niveles de competencia, metodología integrada de práctica mientras aprendes, enfoque en la estrategia en lugar de solo en el contenido, cobertura integral de todos los tipos de preguntas (incluidos los formatos más nuevos como Interactive Writing), e inclusión de guías exclusivas de habla y escritura creadas por expertos en exámenes. Además, nuestro curso se actualiza continuamente en función de los comentarios en tiempo real de los examinados exitosos, lo que garantiza los recursos de preparación más relevantes y efectivos.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cubre el curso DET el formato de examen más reciente?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, nuestro curso DET está completamente actualizado para el último formato de examen. Tenemos secciones dedicadas para todos los tipos de preguntas actuales, incluidas las adiciones más recientes como Interactive Writing, introducido a principios de 2024. Nuestro equipo de especialistas monitorea continuamente los cambios en el Duolingo English Test y actualiza rápidamente nuestros materiales del curso para garantizar que te prepares con el contenido más actual y relevante.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cómo sé con qué sección del curso DET debo comenzar?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Recomendamos comenzar con nuestra prueba de diagnóstico gratuita para identificar tus fortalezas y debilidades en todas las secciones del DET. Según tus resultados, nuestra plataforma sugerirá una ruta de aprendizaje personalizada, priorizando las áreas que necesitan más mejora. Sin embargo, si ya conoces tus áreas de desafío, puedes acceder directamente a módulos específicos como Habla, Escritura, Lectura o Escucha. Para los examinados por primera vez, sugerimos seguir el curso completo en orden secuencial para una comprensión integral del formato del examen.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Se incluyen respuestas de muestra en el curso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, nuestro curso DET incluye amplias respuestas de muestra para todos los tipos de preguntas. Para las secciones de Habla y Escritura, proporcionamos respuestas modelo en diferentes niveles de competencia (desde el rango de puntuación de 85-145) con anotaciones detalladas que explican por qué cada respuesta recibiría una puntuación particular. Estos ejemplos destacan tanto los elementos fuertes como las áreas de mejora, ayudándote a comprender exactamente qué buscan los evaluadores. Para las secciones de Lectura y Escucha, incluimos explicaciones completas para todas las preguntas de práctica, centrándonos en el razonamiento detrás de las respuestas correctas.',
              },
            },
          ],
        },
      ],
    },
  ],
  fr: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/fr/courses#webpage',
          url: 'https://www.detpractice.com/fr/courses',
          name: 'Cours DET gratuit - Cours de préparation au Duolingo English Test | DET Practice',
          description:
            "Cours DET dirigé par des experts avec un taux de réussite étudiant de 95 %. Cours DET complet couvrant tous les types de questions, ensembles d'exercices intégrés, disponible en format vidéo et texte.",
          inLanguage: 'fr',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/fr/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/fr/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/fr/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/fr/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: "Voir dans d'autres langues",
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
          name: 'Cours de préparation complet au Duolingo English Test',
          description:
            "Cours DET complet couvrant tous les types de questions avec des ensembles d'exercices intégrés. Disponible en leçons vidéo et en format texte, entièrement aligné sur le dernier format d'examen DET.",
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/fr/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Avancé',
          learningResourceType: [
            'Leçons vidéo',
            'Matériel texte',
            "Ensembles d'exercices",
            'Matériel de cours',
            "Préparation à l'examen",
          ],
          teaches: [
            'Compétences en lecture DET',
            'Compétences en écoute DET',
            'Compétences en expression orale DET',
            'Compétences en expression écrite DET',
            'Vocabulaire avancé pour le DET',
            'Stratégies de passage de test',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Accès gratuit au cours',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Accès gratuit pour tous les membres de DET Practice, sans frais supplémentaires',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/fr/courses#reading' },
            { '@id': 'https://www.detpractice.com/fr/courses#listening' },
            { '@id': 'https://www.detpractice.com/fr/courses#speaking' },
            { '@id': 'https://www.detpractice.com/fr/courses#writing' },
            { '@id': 'https://www.detpractice.com/fr/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/fr/courses#courseSections',
          name: 'Sections du cours DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/fr/courses#reading',
              position: 1,
              name: 'Cours de lecture',
              description:
                'Cours de préparation à la section Lecture du DET couvrant les types de questions Read and Select, Fill in the Blanks, Interactive Reading et Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Les candidats voient une série de mots et doivent identifier ceux qui sont de vrais mots anglais. Cette tâche évalue la reconnaissance du vocabulaire et la capacité à distinguer les mots valides des mots invalides, reflétant la compréhension des mots dans le monde réel.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Les candidats se voient présenter des phrases contenant des mots manquants. Ils doivent sélectionner les mots corrects dans une liste pour compléter les phrases de manière significative. Cette tâche évalue la grammaire, le vocabulaire et la capacité à comprendre les indices contextuels.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    "Interactive Reading: Ce composant implique la lecture de passages suivie de divers types de questions, telles que compléter des phrases, sélectionner la phrase appropriée pour combler une lacune, surligner les réponses dans le texte, identifier les idées principales et choisir des titres appropriés pour les passages. Il mesure votre compréhension, votre esprit critique et votre capacité à interpréter l'anglais écrit dans divers contextes.",
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    "Read and Complete: Ce type de question présente un passage avec des lettres manquantes dans les mots. Les candidats doivent déduire et restaurer les mots complets. Il se concentre sur l'orthographe, la compréhension contextuelle et l'application du vocabulaire.",
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/fr/courses#listening',
              position: 2,
              name: "Cours d'écoute",
              description:
                'Cours de préparation à la section Écoute du DET couvrant les types de questions Listen and Type et Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    "Dans le type de question Listen and Type, les candidats écoutent des phrases prononcées et doivent les transcrire avec précision. Ce format évalue non seulement la capacité à comprendre l'anglais parlé, mais aussi les compétences en orthographe et en ponctuation, cruciales pour une communication écrite efficace. Typiquement, ce type de question apparaît 6 à 9 fois tout au long du test, reflétant son importance dans l'évaluation de la compréhension et des compétences conversationnelles.",
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    "Inversement, la section Interactive Listening simule des conversations réelles, souvent dans des contextes académiques. Les candidats participent à des dialogues entre pairs ou entre un étudiant et un membre du corps professoral, répondant à des questions qui testent leur compréhension du contenu. Cette section met l'accent sur l'écoute active et la capacité à synthétiser l'information des discussions, essentielles à la réussite scolaire. Dans l'ensemble, ces types de questions renforcent collectivement l'objectif du DET de mesurer la préparation d'un candidat aux environnements anglophones dans les milieux académiques et quotidiens.",
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/fr/courses#speaking',
              position: 3,
              name: "Cours d'expression orale",
              description:
                'Cours de préparation à la section Expression orale du DET couvrant les types de questions Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud et Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    "Dans la tâche Speak about the Photo, les candidats décrivent une image en détail, ce qui teste leur capacité à articuler leurs pensées et à utiliser un langage descriptif. Cette question dure généralement jusqu'à 90 secondes et évalue à la fois la fluidité et le vocabulaire.",
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Les tâches Read, then Speak et Listen, then Speak exigent que les candidats répondent à des invites basées respectivement sur du contenu écrit ou parlé. Ces formats évaluent la compréhension et la capacité à transmettre des idées de manière claire et cohérente dans un délai imparti.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    "La question Read Aloud met les candidats au défi de lire à haute voix un texte fourni, en se concentrant sur la prononciation et l'intonation.",
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Enfin, le Speaking Sample permet aux candidats de montrer leurs compétences en expression orale, fournissant aux institutions des informations supplémentaires sur leur maîtrise. Collectivement, ces types de questions assurent une évaluation complète des compétences orales nécessaires pour réussir dans des environnements anglophones.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/fr/courses#writing',
              position: 4,
              name: "Cours d'expression écrite",
              description:
                'Cours de préparation à la section Expression écrite du DET couvrant les types de questions Write About the Photo, Interactive Writing et Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    "Write About the Photo demande aux candidats d'observer une image et de composer un paragraphe descriptif en une minute. Cette tâche évalue la capacité à articuler des détails visuels et à exprimer des pensées cohérentes, en mettant l'accent sur le vocabulaire et l'exactitude grammaticale.",
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    "Interactive Writing, introduit début 2024, présente un défi en deux parties. Initialement, les candidats répondent à une invite pendant cinq minutes, suivi d'une seconde invite générée sur la base de leur première réponse, nécessitant trois minutes d'écriture supplémentaires. Ce format teste non seulement la créativité et la cohérence, mais aussi l'adaptabilité à l'écriture, car les candidats doivent s'appuyer sur leurs idées initiales.",
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    "La question Writing Sample demande aux candidats d'écrire une réponse structurée à un sujet donné dans un temps limité. Cette tâche évalue les compétences générales en écriture, y compris l'organisation, la clarté et l'argumentation. Collectivement, ces types de questions assurent une évaluation complète des capacités d'écriture des candidats dans des contextes réels, reflétant leur préparation pour des environnements académiques ou professionnels.",
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/fr/courses#vocabulary',
              position: 5,
              name: 'Cours de vocabulaire',
              description:
                "Cours complets de vocabulaire DET ciblant les aspects les plus difficiles du vocabulaire DET, y compris les techniques avancées de description de photos et le vocabulaire des scénarios d'Interactive Listening, conçus pour améliorer les capacités linguistiques et maximiser la réussite au test.",
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/fr/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/fr/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://www.detpractice.com/fr/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Cours',
              item: 'https://www.detpractice.com/fr/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/fr/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Qu'est-ce qui est inclus dans le pack du cours DET ?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Notre pack de cours DET comprend des modules complets couvrant toutes les sections du test (Lecture, Écoute, Expression orale et Expression écrite), une formation spécialisée en vocabulaire, des exercices pratiques intégrés à chaque leçon, des options de format vidéo et texte, des analyses de performance, des conseils d'experts pour chaque type de question et des mises à jour régulières alignées sur le dernier format d'examen. Le cours est conçu pour fournir une expérience de préparation complète avec à la fois des connaissances théoriques et une application pratique.",
              },
            },
            {
              '@type': 'Question',
              name: 'En quoi ce cours DET diffère-t-il des autres supports de préparation ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Notre cours DET se distingue par son approche d'apprentissage adaptatif qui adapte le contenu à différents niveaux de compétence, sa méthodologie intégrée de pratique au fur et à mesure de l'apprentissage, son accent sur la stratégie plutôt que sur le simple contenu, sa couverture complète de tous les types de questions (y compris les formats les plus récents comme Interactive Writing), et l'inclusion de guides exclusifs d'expression orale et écrite créés par des experts du test. De plus, notre cours est continuellement mis à jour en fonction des commentaires en temps réel des candidats ayant réussi, garantissant ainsi les ressources de préparation les plus pertinentes et efficaces.",
              },
            },
            {
              '@type': 'Question',
              name: 'Le cours DET couvre-t-il le dernier format de test ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Oui, notre cours DET est entièrement mis à jour pour le dernier format d'examen. Nous avons des sections dédiées pour tous les types de questions actuels, y compris les ajouts les plus récents comme Interactive Writing introduit début 2024. Notre équipe de spécialistes surveille en permanence les changements apportés au Duolingo English Test et met rapidement à jour nos supports de cours pour garantir que vous vous préparez avec le contenu le plus actuel et pertinent.",
              },
            },
            {
              '@type': 'Question',
              name: 'Comment savoir par quelle section du cours DET commencer ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Nous recommandons de commencer par notre test de diagnostic gratuit pour identifier vos forces et faiblesses dans toutes les sections du DET. En fonction de vos résultats, notre plateforme suggérera un parcours d'apprentissage personnalisé, en priorisant les domaines qui nécessitent le plus d'amélioration. Cependant, si vous connaissez déjà vos domaines de défi, vous pouvez accéder directement à des modules spécifiques tels que l'Expression orale, l'Expression écrite, la Lecture ou l'Écoute. Pour les candidats qui passent le test pour la première fois, nous suggérons de suivre le cours complet dans l'ordre séquentiel pour une compréhension globale du format du test.",
              },
            },
            {
              '@type': 'Question',
              name: 'Des exemples de réponses sont-ils inclus dans le cours DET ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Oui, notre cours DET comprend de nombreux exemples de réponses pour tous les types de questions. Pour les sections Expression orale et Expression écrite, nous fournissons des réponses modèles à différents niveaux de compétence (de la plage de scores 85 à 145) avec des annotations détaillées expliquant pourquoi chaque réponse recevrait une note particulière. Ces exemples mettent en évidence à la fois les points forts et les domaines d'amélioration, vous aidant à comprendre exactement ce que recherchent les évaluateurs. Pour les sections Lecture et Écoute, nous incluons des explications complètes pour toutes les questions pratiques, en nous concentrant sur le raisonnement derrière les bonnes réponses.",
              },
            },
          ],
        },
      ],
    },
  ],
  id: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/id/courses#webpage',
          url: 'https://www.detpractice.com/id/courses',
          name: 'Kursus DET Gratis - Kursus Persiapan Duolingo English Test | DET Practice',
          description:
            'Kursus DET yang Dipimpin Ahli dengan Tingkat Keberhasilan Siswa 95%. Kursus DET lengkap mencakup semua jenis pertanyaan, set latihan terintegrasi, tersedia dalam format video dan teks.',
          inLanguage: 'id',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/id/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/id/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/id/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/id/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Lihat dalam bahasa lain',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/id/courses#completeCourse',
          name: 'Kursus Persiapan Lengkap Duolingo English Test',
          description:
            'Kursus DET komprehensif mencakup semua jenis pertanyaan dengan set latihan terintegrasi. Tersedia dalam format pelajaran video dan teks, sepenuhnya selaras dengan format ujian DET terbaru.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/id/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Tingkat Lanjut',
          learningResourceType: ['Pelajaran Video', 'Materi Teks', 'Set Latihan', 'Materi Kursus', 'Persiapan Ujian'],
          teaches: [
            'Keterampilan Membaca DET',
            'Keterampilan Mendengarkan DET',
            'Keterampilan Berbicara DET',
            'Keterampilan Menulis DET',
            'Kosakata tingkat lanjut untuk DET',
            'Strategi mengikuti tes',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Akses Kursus Gratis',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Akses gratis untuk semua anggota DET Practice, tidak ada biaya tambahan',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/id/courses#reading' },
            { '@id': 'https://www.detpractice.com/id/courses#listening' },
            { '@id': 'https://www.detpractice.com/id/courses#speaking' },
            { '@id': 'https://www.detpractice.com/id/courses#writing' },
            { '@id': 'https://www.detpractice.com/id/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/id/courses#courseSections',
          name: 'Bagian Kursus DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/id/courses#reading',
              position: 1,
              name: 'Kursus Membaca',
              description:
                'Kursus persiapan bagian Membaca DET yang mencakup jenis pertanyaan Read and Select, Fill in the Blanks, Interactive Reading, dan Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/id/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Peserta tes diperlihatkan serangkaian kata dan harus mengidentifikasi mana yang merupakan kata bahasa Inggris asli. Tugas ini mengevaluasi pengenalan kosakata dan kemampuan untuk membedakan antara kata yang valid dan tidak valid, mencerminkan pemahaman kata di dunia nyata.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Kandidat disajikan dengan kalimat yang mengandung kata-kata yang hilang. Mereka harus memilih kata yang benar dari daftar untuk melengkapi kalimat secara bermakna. Tugas ini menilai tata bahasa, kosakata, dan kemampuan untuk memahami petunjuk kontekstual.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Komponen ini melibatkan membaca bagian-bagian diikuti oleh berbagai jenis pertanyaan, seperti melengkapi kalimat, memilih kalimat yang sesuai untuk mengisi celah, menyorot jawaban dalam teks, mengidentifikasi ide utama, dan memilih judul yang cocok untuk bagian-bagian tersebut. Ini mengukur pemahaman Anda, pemikiran kritis, dan kemampuan untuk menafsirkan bahasa Inggris tertulis dalam berbagai konteks.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Jenis pertanyaan ini menyajikan sebuah bagian dengan huruf yang hilang di dalam kata-kata. Peserta tes harus menyimpulkan dan mengembalikan kata-kata lengkap. Ini berfokus pada ejaan, pemahaman kontekstual, dan aplikasi kosakata.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/id/courses#listening',
              position: 2,
              name: 'Kursus Mendengarkan',
              description:
                'Kursus persiapan bagian Mendengarkan DET yang mencakup jenis pertanyaan Listen and Type dan Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/id/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'Dalam jenis pertanyaan Listen and Type, peserta tes mendengarkan kalimat yang diucapkan dan harus mentranskripsikannya secara akurat. Format ini tidak hanya mengukur kemampuan untuk memahami bahasa Inggris lisan tetapi juga mengevaluasi keterampilan ejaan dan tanda baca, yang sangat penting untuk komunikasi tertulis yang efektif. Biasanya, jenis pertanyaan ini muncul 6 hingga 9 kali sepanjang tes, mencerminkan signifikansinya dalam menilai pemahaman dan keterampilan percakapan.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'Sebaliknya, bagian Interactive Listening mensimulasikan percakapan kehidupan nyata, seringkali berlatar belakang akademis. Kandidat terlibat dalam dialog antara rekan sejawat atau antara mahasiswa dan anggota fakultas, menjawab pertanyaan yang menguji pemahaman mereka tentang konten. Bagian ini menekankan pendengaran aktif dan kemampuan untuk mensintesis informasi dari diskusi, yang penting untuk keberhasilan akademis. Secara keseluruhan, jenis pertanyaan ini secara kolektif meningkatkan tujuan DET untuk mengukur kesiapan kandidat untuk lingkungan berbahasa Inggris baik dalam pengaturan akademis maupun sehari-hari.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/id/courses#speaking',
              position: 3,
              name: 'Kursus Berbicara',
              description:
                'Kursus persiapan bagian Berbicara DET yang mencakup jenis pertanyaan Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, dan Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/id/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Dalam tugas Speak about the Photo, kandidat mendeskripsikan gambar secara detail, yang menguji kemampuan mereka untuk mengartikulasikan pikiran dan menggunakan bahasa deskriptif. Pertanyaan ini biasanya berlangsung hingga 90 detik dan mengevaluasi kefasihan dan kosakata.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Tugas Read, then Speak dan Listen, then Speak mengharuskan peserta tes untuk menanggapi prompt berdasarkan konten tertulis atau lisan, masing-masing. Format ini menilai pemahaman dan kemampuan untuk menyampaikan ide secara jelas dan koheren dalam batas waktu.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Pertanyaan Read Aloud menantang kandidat untuk membaca teks yang disediakan dengan keras, berfokus pada pengucapan dan intonasi.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Terakhir, Speaking Sample memungkinkan kandidat untuk menunjukkan keterampilan berbicara mereka, memberikan institusi wawasan tambahan tentang kemahiran mereka. Secara kolektif, jenis pertanyaan ini memastikan evaluasi komprehensif keterampilan berbicara yang diperlukan untuk sukses di lingkungan berbahasa Inggris.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/id/courses#writing',
              position: 4,
              name: 'Kursus Menulis',
              description:
                'Kursus persiapan bagian Menulis DET yang mencakup jenis pertanyaan Write About the Photo, Interactive Writing, dan Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/id/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo mengharuskan kandidat untuk mengamati gambar dan menyusun paragraf deskriptif dalam jangka waktu satu menit. Tugas ini menilai kemampuan untuk mengartikulasikan detail visual dan mengekspresikan pikiran yang koheren, menekankan kosakata dan akurasi tata bahasa.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, diperkenalkan pada awal 2024, menyajikan tantangan dua bagian. Awalnya, peserta tes menanggapi prompt selama lima menit, diikuti oleh prompt kedua yang dihasilkan berdasarkan respons pertama mereka, yang membutuhkan tambahan tiga menit penulisan. Format ini menguji tidak hanya kreativitas dan koherensi tetapi juga kemampuan beradaptasi dalam menulis, karena kandidat harus membangun ide awal mereka.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Pertanyaan Writing Sample meminta peserta tes untuk menulis respons terstruktur terhadap topik yang diberikan dalam waktu terbatas. Tugas ini mengevaluasi keterampilan menulis secara keseluruhan, termasuk organisasi, kejelasan, dan argumentasi. Secara kolektif, jenis pertanyaan ini memastikan penilaian komprehensif kemampuan menulis kandidat dalam konteks dunia nyata, mencerminkan kesiapan mereka untuk lingkungan akademis atau profesional.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/id/courses#vocabulary',
              position: 5,
              name: 'Kursus Kosakata',
              description:
                'Kursus Kosakata DET komprehensif yang menargetkan aspek kosakata DET yang paling menantang, termasuk teknik deskripsi foto tingkat lanjut dan kosakata skenario Interactive Listening, dirancang untuk meningkatkan kemampuan bahasa dan memaksimalkan keberhasilan tes.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/id/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/id/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Beranda',
              item: 'https://www.detpractice.com/id/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Kursus',
              item: 'https://www.detpractice.com/id/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/id/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Apa saja yang termasuk dalam paket kursus DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Paket kursus DET kami mencakup modul komprehensif yang mencakup semua bagian tes (Membaca, Mendengarkan, Berbicara, dan Menulis), pelatihan kosakata khusus, latihan praktik yang terintegrasi dengan setiap pelajaran, pilihan format video dan teks, analitik kinerja, tips ahli untuk setiap jenis pertanyaan, dan pembaruan rutin yang selaras dengan format ujian terbaru. Kursus ini dirancang untuk memberikan pengalaman persiapan lengkap dengan pengetahuan teoretis dan aplikasi praktis.',
              },
            },
            {
              '@type': 'Question',
              name: 'Bagaimana kursus DET ini berbeda dari materi persiapan lainnya?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Kursus DET kami menonjol dengan pendekatan pembelajaran adaptif yang menyesuaikan konten dengan tingkat kemahiran yang berbeda, metodologi latihan-saat-belajar terintegrasi, fokus pada strategi daripada hanya konten, cakupan komprehensif semua jenis pertanyaan (termasuk format terbaru seperti Interactive Writing), dan penyertaan panduan berbicara dan menulis eksklusif yang dibuat oleh ahli tes. Selain itu, kursus kami terus diperbarui berdasarkan umpan balik waktu nyata dari peserta tes yang berhasil, memastikan sumber daya persiapan yang paling relevan dan efektif.',
              },
            },
            {
              '@type': 'Question',
              name: 'Apakah kursus DET mencakup format tes terbaru?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, kursus DET kami sepenuhnya diperbarui untuk format ujian terbaru. Kami memiliki bagian khusus untuk semua jenis pertanyaan saat ini, termasuk penambahan terbaru seperti Interactive Writing yang diperkenalkan pada awal 2024. Tim spesialis kami terus memantau perubahan pada Duolingo English Test dan segera memperbarui materi kursus kami untuk memastikan Anda mempersiapkan diri dengan konten terkini dan relevan.',
              },
            },
            {
              '@type': 'Question',
              name: 'Bagaimana saya tahu bagian kursus DET mana yang harus dimulai?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Kami merekomendasikan untuk memulai dengan tes diagnostik gratis kami untuk mengidentifikasi kekuatan dan kelemahan Anda di semua bagian DET. Berdasarkan hasil Anda, platform kami akan menyarankan jalur pembelajaran yang dipersonalisasi, memprioritaskan area yang paling membutuhkan peningkatan. Namun, jika Anda sudah mengetahui area tantangan Anda, Anda dapat langsung mengakses modul spesifik seperti Berbicara, Menulis, Membaca, atau Mendengarkan. Untuk peserta tes pertama kali, kami menyarankan mengikuti kursus lengkap secara berurutan untuk pemahaman komprehensif tentang format tes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Apakah ada contoh jawaban yang disertakan dalam kursus DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ya, kursus DET kami mencakup contoh jawaban ekstensif untuk semua jenis pertanyaan. Untuk bagian Berbicara dan Menulis, kami menyediakan respons model pada tingkat kemahiran yang berbeda (dari rentang skor 85-145) dengan anotasi terperinci yang menjelaskan mengapa setiap respons akan menerima skor tertentu. Contoh-contoh ini menyoroti elemen kuat dan area untuk perbaikan, membantu Anda memahami dengan tepat apa yang dicari evaluator. Untuk bagian Membaca dan Mendengarkan, kami menyertakan penjelasan komprehensif untuk semua pertanyaan latihan, berfokus pada alasan di balik jawaban yang benar.',
              },
            },
          ],
        },
      ],
    },
  ],
  it: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/it/courses#webpage',
          url: 'https://www.detpractice.com/it/courses',
          name: 'Corso DET Gratuito - Corsi di Preparazione al Duolingo English Test | DET Practice',
          description:
            'Corso DET Guidato da Esperti con Tasso di Successo Studentesco del 95%. Corso DET completo che copre tutti i tipi di domande, set di pratica integrati, disponibile in formato video e testo.',
          inLanguage: 'it',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/it/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/it/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/it/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/it/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Visualizza in altre lingue',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/it/courses#completeCourse',
          name: 'Corso Completo di Preparazione al Duolingo English Test',
          description:
            "Corso DET completo che copre tutti i tipi di domande con set di pratica integrati. Disponibile sia in lezioni video che in formato testo, completamente allineato all'ultimo formato dell'esame DET.",
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/it/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Avanzato',
          learningResourceType: [
            'Lezioni Video',
            'Materiali di Testo',
            'Set di Pratica',
            'Materiale del Corso',
            "Preparazione all'Esame",
          ],
          teaches: [
            'Competenze di Lettura DET',
            'Competenze di Ascolto DET',
            'Competenze di Parlato DET',
            'Competenze di Scrittura DET',
            'Vocabolario avanzato per il DET',
            'Strategie per sostenere il test',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Accesso Gratuito al Corso',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Accesso gratuito per tutti i membri di DET Practice, senza costi aggiuntivi',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/it/courses#reading' },
            { '@id': 'https://www.detpractice.com/it/courses#listening' },
            { '@id': 'https://www.detpractice.com/it/courses#speaking' },
            { '@id': 'https://www.detpractice.com/it/courses#writing' },
            { '@id': 'https://www.detpractice.com/it/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/it/courses#courseSections',
          name: 'Sezioni del Corso DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/it/courses#reading',
              position: 1,
              name: 'Corso di Lettura',
              description:
                'Corso di preparazione alla sezione Lettura del DET che copre i tipi di domande Read and Select, Fill in the Blanks, Interactive Reading e Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/it/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Ai partecipanti al test viene mostrata una serie di parole e devono identificare quali sono vere parole inglesi. Questo compito valuta il riconoscimento del vocabolario e la capacità di distinguere tra parole valide e non valide, riflettendo la comprensione delle parole nel mondo reale.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Ai candidati vengono presentate frasi contenenti parole mancanti. Devono selezionare le parole corrette da un elenco per completare le frasi in modo significativo. Questo compito valuta la grammatica, il vocabolario e la capacità di comprendere indizi contestuali.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    "Interactive Reading: Questa componente comporta la lettura di brani seguita da vari tipi di domande, come completare frasi, selezionare la frase appropriata per riempire uno spazio vuoto, evidenziare le risposte all'interno del testo, identificare le idee principali e scegliere titoli adatti per i brani. Misura la tua comprensione, il pensiero critico e la capacità di interpretare l'inglese scritto in vari contesti.",
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    "Read and Complete: Questo tipo di domanda presenta un brano con lettere mancanti all'interno delle parole. I partecipanti al test devono dedurre e ripristinare le parole complete. Si concentra sull'ortografia, sulla comprensione contestuale e sull'applicazione del vocabolario.",
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/it/courses#listening',
              position: 2,
              name: 'Corso di Ascolto',
              description:
                'Corso di preparazione alla sezione Ascolto del DET che copre i tipi di domande Listen and Type e Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/it/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    "Nel tipo di domanda Listen and Type, i partecipanti al test ascoltano frasi parlate e devono trascriverle accuratamente. Questo formato non solo misura la capacità di comprendere l'inglese parlato, ma valuta anche le competenze di ortografia e punteggiatura, cruciali per una comunicazione scritta efficace. Tipicamente, questo tipo di domanda appare da 6 a 9 volte durante il test, riflettendo la sua importanza nella valutazione della comprensione e delle capacità di conversazione.",
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    "Al contrario, la sezione Interactive Listening simula conversazioni della vita reale, spesso ambientate in contesti accademici. I candidati partecipano a dialoghi tra pari o tra uno studente e un membro della facoltà, rispondendo a domande che testano la loro comprensione del contenuto. Questa sezione enfatizza l'ascolto attivo e la capacità di sintetizzare informazioni dalle discussioni, essenziale per il successo accademico. Nel complesso, questi tipi di domande migliorano collettivamente l'obiettivo del DET di misurare la preparazione di un candidato per ambienti di lingua inglese sia in contesti accademici che quotidiani.",
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/it/courses#speaking',
              position: 3,
              name: 'Corso di Parlato',
              description:
                'Corso di preparazione alla sezione Parlato del DET che copre i tipi di domande Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud e Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/it/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    "Nel compito Speak about the Photo, i candidati descrivono un'immagine in dettaglio, il che testa la loro capacità di articolare pensieri e usare un linguaggio descrittivo. Questa domanda dura tipicamente fino a 90 secondi e valuta sia la fluidità che il vocabolario.",
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'I compiti Read, then Speak e Listen, then Speak richiedono ai partecipanti al test di rispondere a suggerimenti basati rispettivamente su contenuti scritti o parlati. Questi formati valutano la comprensione e la capacità di trasmettere idee in modo chiaro e coerente entro un limite di tempo.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    "La domanda Read Aloud sfida i candidati a leggere ad alta voce un testo fornito, concentrandosi sulla pronuncia e sull'intonazione.",
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Infine, lo Speaking Sample consente ai candidati di mostrare le loro abilità di parlato, fornendo alle istituzioni ulteriori informazioni sulla loro competenza. Collettivamente, questi tipi di domande assicurano una valutazione completa delle abilità di parlato necessarie per il successo in ambienti di lingua inglese.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/it/courses#writing',
              position: 4,
              name: 'Corso di Scrittura',
              description:
                'Corso di preparazione alla sezione Scrittura del DET che copre i tipi di domande Write About the Photo, Interactive Writing e Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/it/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    "Write About the Photo richiede ai candidati di osservare un'immagine e comporre un paragrafo descrittivo entro un minuto. Questo compito valuta la capacità di articolare dettagli visivi ed esprimere pensieri coerenti, enfatizzando il vocabolario e l'accuratezza grammaticale.",
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    "Interactive Writing, introdotto all'inizio del 2024, presenta una sfida in due parti. Inizialmente, i partecipanti al test rispondono a un suggerimento per cinque minuti, seguito da un secondo suggerimento generato sulla base della loro prima risposta, che richiede altri tre minuti di scrittura. Questo formato testa non solo la creatività e la coerenza, ma anche l'adattabilità nella scrittura, poiché i candidati devono costruire sulle loro idee iniziali.",
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'La domanda Writing Sample chiede ai partecipanti al test di scrivere una risposta strutturata a un dato argomento entro un tempo limitato. Questo compito valuta le competenze generali di scrittura, tra cui organizzazione, chiarezza e argomentazione. Collettivamente, questi tipi di domande assicurano una valutazione completa delle capacità di scrittura dei candidati in contesti reali, riflettendo la loro preparazione per ambienti accademici o professionali.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/it/courses#vocabulary',
              position: 5,
              name: 'Corso di Vocabolario',
              description:
                'Corsi completi di Vocabolario DET mirati agli aspetti più impegnativi del vocabolario DET, incluse tecniche avanzate di descrizione di foto e vocabolario per scenari di Interactive Listening, progettati per migliorare le capacità linguistiche e massimizzare il successo nel test.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/it/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/it/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.detpractice.com/it/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Corso',
              item: 'https://www.detpractice.com/it/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/it/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Cosa include il pacchetto del corso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Il nostro pacchetto del corso DET include moduli completi che coprono tutte le sezioni del test (Lettura, Ascolto, Parlato e Scrittura), formazione specializzata sul vocabolario, esercizi pratici integrati con ogni lezione, opzioni in formato video e testo, analisi delle prestazioni, consigli degli esperti per ogni tipo di domanda e aggiornamenti regolari allineati all'ultimo formato dell'esame. Il corso è progettato per fornire un'esperienza di preparazione completa con conoscenze teoriche e applicazione pratica.",
              },
            },
            {
              '@type': 'Question',
              name: 'In cosa si differenzia questo corso DET da altri materiali di preparazione?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Il nostro corso DET si distingue per il suo approccio all'apprendimento adattivo che adatta i contenuti a diversi livelli di competenza, la metodologia integrata di pratica-mentre-si-impara, l'attenzione alla strategia piuttosto che solo al contenuto, la copertura completa di tutti i tipi di domande (inclusi i formati più recenti come Interactive Writing) e l'inclusione di guide esclusive per parlato e scrittura create da esperti del test. Inoltre, il nostro corso viene continuamente aggiornato sulla base del feedback in tempo reale dei partecipanti al test che hanno avuto successo, garantendo le risorse di preparazione più pertinenti ed efficaci.",
              },
            },
            {
              '@type': 'Question',
              name: "Il corso DET copre l'ultimo formato del test?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Sì, il nostro corso DET è completamente aggiornato per l'ultimo formato dell'esame. Abbiamo sezioni dedicate per tutti i tipi di domande attuali, comprese le aggiunte più recenti come Interactive Writing introdotto all'inizio del 2024. Il nostro team di specialisti monitora continuamente le modifiche al Duolingo English Test e aggiorna prontamente i nostri materiali del corso per garantire che ti prepari con i contenuti più attuali e pertinenti.",
              },
            },
            {
              '@type': 'Question',
              name: 'Come faccio a sapere con quale sezione del corso DET iniziare?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Consigliamo di iniziare con il nostro test diagnostico gratuito per identificare i tuoi punti di forza e di debolezza in tutte le sezioni del DET. Sulla base dei tuoi risultati, la nostra piattaforma suggerirà un percorso di apprendimento personalizzato, dando priorità alle aree che necessitano di maggiore miglioramento. Tuttavia, se conosci già le tue aree di sfida, puoi accedere direttamente a moduli specifici come Parlato, Scrittura, Lettura o Ascolto. Per i partecipanti al test per la prima volta, suggeriamo di seguire il corso completo in ordine sequenziale per una comprensione completa del formato del test.',
              },
            },
            {
              '@type': 'Question',
              name: 'Sono incluse risposte di esempio nel corso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sì, il nostro corso DET include ampie risposte di esempio per tutti i tipi di domande. Per le sezioni Parlato e Scrittura, forniamo risposte modello a diversi livelli di competenza (dalla gamma di punteggio 85-145) con annotazioni dettagliate che spiegano perché ogni risposta riceverebbe un punteggio particolare. Questi esempi evidenziano sia gli elementi forti che le aree di miglioramento, aiutandoti a capire esattamente cosa cercano i valutatori. Per le sezioni Lettura e Ascolto, includiamo spiegazioni complete per tutte le domande di pratica, concentrandoci sul ragionamento alla base delle risposte corrette.',
              },
            },
          ],
        },
      ],
    },
  ],
  ja: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/ja/courses#webpage',
          url: 'https://www.detpractice.com/ja/courses',
          name: '無料DETコース - Duolingo English Test対策講座 | DET Practice',
          description:
            '専門家主導のDETコース、受講生成功率95%。全問題形式を網羅し、統合された練習セット付き、ビデオおよびテキスト形式で利用可能な完全なDETコース。',
          inLanguage: 'ja',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/ja/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/ja/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/ja/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/ja/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: '他の言語で表示',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
          name: 'Duolingo English Test 完全対策コース',
          description:
            '全問題形式を網羅し、統合された練習セットを含む包括的なDETコース。ビデオレッスンとテキスト形式の両方で利用可能、最新のDET試験形式に完全準拠。',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/ja/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: '上級',
          learningResourceType: ['ビデオレッスン', 'テキスト教材', '練習セット', 'コース教材', '試験対策'],
          teaches: [
            'DETリーディングスキル',
            'DETリスニングスキル',
            'DETスピーキングスキル',
            'DETライティングスキル',
            'DET向け上級語彙',
            '受験戦略',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: '無料コースアクセス',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: '全DET Practiceメンバーは無料アクセス、追加料金なし',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/ja/courses#reading' },
            { '@id': 'https://www.detpractice.com/ja/courses#listening' },
            { '@id': 'https://www.detpractice.com/ja/courses#speaking' },
            { '@id': 'https://www.detpractice.com/ja/courses#writing' },
            { '@id': 'https://www.detpractice.com/ja/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/ja/courses#courseSections',
          name: 'DETコースセクション',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ja/courses#reading',
              position: 1,
              name: 'リーディングコース',
              description:
                'Read and Select, Fill in the Blanks, Interactive Reading, Read and Complete の問題形式をカバーするDETリーディングセクション対策コース。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: 受験者は一連の単語を提示され、その中から実際の英単語を識別しなければなりません。このタスクは、語彙認識能力と、有効な単語と無効な単語を区別する能力を評価し、現実世界の単語理解を反映します。',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: 受験者には、単語が欠落した文が提示されます。文が意味を持つように、リストから正しい単語を選択する必要があります。このタスクは、文法、語彙、文脈上の手がかりを理解する能力を評価します。',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: このコンポーネントには、文章を読んだ後、文の完成、ギャップを埋める適切な文の選択、テキスト内の回答のハイライト、主要なアイデアの特定、文章に適したタイトルの選択など、さまざまな種類の質問が含まれます。読解力、批判的思考力、さまざまな文脈で書かれた英語を解釈する能力を測定します。',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: この問題形式では、単語内に文字が欠落した文章が提示されます。受験者は完全な単語を推測して復元する必要があります。スペル、文脈理解、語彙の応用力に焦点を当てています。',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ja/courses#listening',
              position: 2,
              name: 'リスニングコース',
              description:
                'Listen and Type および Interactive Listening の問題形式をカバーするDETリスニングセクション対策コース。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'Listen and Type の問題形式では、受験者は話された文を聞き、正確に書き起こす必要があります。この形式は、話し言葉の英語を理解する能力だけでなく、効果的な書面コミュニケーションに不可欠なスペルと句読点のスキルも評価します。通常、この問題形式はテスト全体で6〜9回出現し、理解力と会話スキルを評価する上での重要性を反映しています。',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    '一方、Interactive Listening セクションは、しばしば学術的な文脈で行われる実生活の会話をシミュレートします。受験者は、同級生間または学生と教員間の対話に参加し、内容の理解度をテストする質問に答えます。このセクションは、積極的なリスニングと議論から情報を統合する能力を重視しており、学術的な成功に不可欠です。全体として、これらの問題形式は、学術的および日常的な設定の両方で、受験者の英語圏環境への準備度を測定するというDETの目標を総合的に強化します。',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ja/courses#speaking',
              position: 3,
              name: 'スピーキングコース',
              description:
                'Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, Speaking Sample の問題形式をカバーするDETスピーキングセクション対策コース。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Speak about the Photo タスクでは、受験者は画像を詳細に説明します。これは、思考を明確に表現し、描写的な言語を使用する能力をテストします。この質問は通常、最大90秒続き、流暢さと語彙の両方を評価します。',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Read, then Speak および Listen, then Speak タスクでは、受験者はそれぞれ書かれた内容または話された内容に基づいてプロンプトに応答する必要があります。これらの形式は、理解力と、制限時間内にアイデアを明確かつ首尾一貫して伝える能力を評価します。',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Read Aloud 問題は、提供されたテキストを発音とイントネーションに焦点を当てて音読するよう受験者に挑戦します。',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    '最後に、Speaking Sample は、受験者がスピーキングスキルを披露する機会を提供し、教育機関に彼らの習熟度に関する追加の洞察を与えます。総合的に、これらの問題形式は、英語圏の環境での成功に必要なスピーキングスキルの包括的な評価を保証します。',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ja/courses#writing',
              position: 4,
              name: 'ライティングコース',
              description:
                'Write About the Photo, Interactive Writing, Writing Sample の問題形式をカバーするDETライティングセクション対策コース。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo は、受験者が画像を観察し、1分間の時間枠内で描写的な段落を作成する必要があります。このタスクは、視覚的な詳細を明確に表現し、一貫した思考を表現する能力を評価し、語彙と文法の正確さを強調します。',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    '2024年初頭に導入された Interactive Writing は、2部構成の課題を提示します。最初に、受験者はプロンプトに対して5分間で応答し、次に最初の応答に基づいて生成された2番目のプロンプトに対して、さらに3分間のライティングが必要です。この形式は、創造性と一貫性だけでなく、受験者が最初のアイデアに基づいて構築する必要があるため、ライティングにおける適応性もテストします。',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Writing Sample 問題は、与えられたトピックに対して、限られた時間内に構造化された応答を書くよう受験者に求めます。このタスクは、構成、明瞭さ、論証を含む全体的なライティングスキルを評価します。総合的に、これらの問題形式は、現実世界の文脈における受験者のライティング能力の包括的な評価を保証し、学術的または専門的な環境への準備度を反映します。',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ja/courses#vocabulary',
              position: 5,
              name: '語彙コース',
              description:
                'DET語彙の最も困難な側面、高度な写真描写テクニックや Interactive Listening シナリオの語彙などを対象とした包括的なDET語彙コース。言語能力を高め、テストの成功を最大化するように設計されています。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ja/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/ja/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'ホーム',
              item: 'https://www.detpractice.com/ja/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'コース',
              item: 'https://www.detpractice.com/ja/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/ja/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DETコースパッケージには何が含まれていますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '当社のDETコースパッケージには、全テストセクション（リーディング、リスニング、スピーキング、ライティング）を網羅する包括的なモジュール、専門的な語彙トレーニング、各レッスンに統合された練習問題、ビデオおよびテキスト形式のオプション、パフォーマンス分析、各問題タイプに対する専門家のアドバイス、最新の試験形式に合わせた定期的な更新が含まれています。このコースは、理論的な知識と実践的な応用の両方を提供する完全な準備体験を提供するように設計されています。',
              },
            },
            {
              '@type': 'Question',
              name: 'このDETコースは他の準備教材とどう違いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '当社のDETコースは、異なる習熟度レベルに合わせてコンテンツを調整する適応学習アプローチ、学習しながら練習する統合された方法論、単なるコンテンツではなく戦略に焦点を当てること、すべての問題タイプ（2024年初頭に導入された Interactive Writing などの最新形式を含む）の包括的なカバレッジ、テスト専門家によって作成された独自のスピ​​ーキングおよびライティングガイドの包含によって際立っています。さらに、当社のコースは、成功した受験者からのリアルタイムのフィードバックに基づいて継続的に更新され、最も関連性が高く効果的な準備リソースを保証します。',
              },
            },
            {
              '@type': 'Question',
              name: 'DETコースは最新のテスト形式をカバーしていますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、当社のDETコースは最新の試験形式に完全に更新されています。2024年初頭に導入された Interactive Writing などの最新の追加を含む、現在のすべての問題タイプに対応する専用セクションがあります。当社の専門家チームは、Duolingo English Testへの変更を継続的に監視し、最も最新で関連性の高いコンテンツで準備できるよう、コース教材を迅速に更新しています。',
              },
            },
            {
              '@type': 'Question',
              name: 'どのDETコースセクションから始めればよいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '無料の診断テストから始めて、すべてのDETセクションにわたるあなたの長所と短所を特定することをお勧めします。結果に基づいて、当社のプラットフォームは、最も改善が必要な領域を優先するパーソナライズされた学習パスを提案します。ただし、すでに課題領域がわかっている場合は、スピーキング、ライティング、リーディング、リスニングなどの特定のモジュールに直接アクセスできます。初めての受験者には、テスト形式の包括的な理解のために、完全なコースを順番に追うことをお勧めします。',
              },
            },
            {
              '@type': 'Question',
              name: 'DETコースにはサンプル解答が含まれていますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、当社のDETコースには、すべての問題タイプに対する広範なサンプル解答が含まれています。スピーキングおよびライティングセクションについては、異なる習熟度レベル（85〜145点範囲）の模範解答を、各解答が特定のスコアを受け取る理由を説明する詳細な注釈付きで提供します。これらの例は、強力な要素と改善点の両方を強調し、評価者が何を探しているかを正確に理解するのに役立ちます。リーディングおよびリスニングセクションについては、正解の背後にある推論に焦点を当てた、すべての練習問題に対する包括的な説明を含んでいます。',
              },
            },
          ],
        },
      ],
    },
  ],
  ko: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/ko/courses#webpage',
          url: 'https://www.detpractice.com/ko/courses',
          name: '무료 DET 코스 - 듀오링고 영어 시험 준비 과정 | DET Practice',
          description:
            '전문가 주도 DET 코스, 학생 성공률 95%. 모든 문제 유형을 다루고 통합 연습 세트 포함, 비디오 및 텍스트 형식으로 제공되는 완전한 DET 코스.',
          inLanguage: 'ko',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/ko/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/ko/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/ko/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/ko/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: '다른 언어로 보기',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
          name: '듀오링고 영어 시험 완전 대비 코스',
          description:
            '모든 문제 유형을 다루고 통합 연습 세트를 포함하는 종합적인 DET 코스. 비디오 강의 및 텍스트 형식으로 제공되며 최신 DET 시험 형식에 완벽하게 부합합니다.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/ko/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: '고급',
          learningResourceType: ['비디오 강의', '텍스트 자료', '연습 세트', '코스 자료', '시험 대비'],
          teaches: [
            'DET 읽기 기술',
            'DET 듣기 기술',
            'DET 말하기 기술',
            'DET 쓰기 기술',
            'DET용 고급 어휘',
            '시험 응시 전략',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: '무료 코스 이용',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: '모든 DET Practice 회원은 무료 이용, 추가 비용 없음',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/ko/courses#reading' },
            { '@id': 'https://www.detpractice.com/ko/courses#listening' },
            { '@id': 'https://www.detpractice.com/ko/courses#speaking' },
            { '@id': 'https://www.detpractice.com/ko/courses#writing' },
            { '@id': 'https://www.detpractice.com/ko/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/ko/courses#courseSections',
          name: 'DET 코스 섹션',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ko/courses#reading',
              position: 1,
              name: '읽기 코스',
              description:
                'Read and Select, Fill in the Blanks, Interactive Reading, Read and Complete 문제 유형을 다루는 DET 읽기 섹션 준비 코스.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: 응시자에게 일련의 단어가 제시되며, 그중 실제 영어 단어를 식별해야 합니다. 이 과제는 어휘 인식 능력과 유효한 단어와 유효하지 않은 단어를 구별하는 능력을 평가하며, 실제 단어 이해를 반영합니다.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: 응시자에게 단어가 빠진 문장이 제시됩니다. 의미가 통하도록 목록에서 올바른 단어를 선택해야 합니다. 이 과제는 문법, 어휘, 문맥 단서 이해 능력을 평가합니다.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: 이 구성 요소는 지문을 읽은 후 문장 완성, 빈칸에 적절한 문장 선택, 텍스트 내 답변 강조 표시, 주요 아이디어 식별, 지문에 적합한 제목 선택 등 다양한 유형의 질문에 답하는 것을 포함합니다. 다양한 맥락에서 쓰여진 영어를 이해하고 비판적으로 사고하며 해석하는 능력을 측정합니다.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: 이 문제 유형은 단어 내 글자가 빠진 지문을 제시합니다. 응시자는 완전한 단어를 추론하고 복원해야 합니다. 철자법, 문맥 이해, 어휘 적용 능력에 중점을 둡니다.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ko/courses#listening',
              position: 2,
              name: '듣기 코스',
              description: 'Listen and Type 및 Interactive Listening 문제 유형을 다루는 DET 듣기 섹션 준비 코스.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'Listen and Type 문제 유형에서 응시자는 음성 문장을 듣고 정확하게 받아 적어야 합니다. 이 형식은 구어체 영어를 이해하는 능력뿐만 아니라 효과적인 서면 의사소통에 중요한 철자법과 구두점 기술도 평가합니다. 일반적으로 이 문제 유형은 시험 전체에서 6~9회 나타나며 이해력과 대화 기술 평가에서의 중요성을 반영합니다.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    '반대로 Interactive Listening 섹션은 종종 학문적 맥락에서 설정되는 실제 대화를 시뮬레이션합니다. 응시자는 동료 간 또는 학생과 교수진 간의 대화에 참여하여 내용 이해도를 테스트하는 질문에 답합니다. 이 섹션은 토론에서 정보를 종합하는 능력과 적극적인 듣기를 강조하며, 이는 학업 성공에 필수적입니다. 전반적으로 이러한 문제 유형은 학문적 및 일상 환경 모두에서 영어 사용 환경에 대한 응시자의 준비도를 측정하는 DET의 목표를 종합적으로 강화합니다.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ko/courses#speaking',
              position: 3,
              name: '말하기 코스',
              description:
                'Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, Speaking Sample 문제 유형을 다루는 DET 말하기 섹션 준비 코스.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Speak about the Photo 과제에서 응시자는 이미지를 자세히 설명하며, 이는 생각을 명확하게 표현하고 묘사적인 언어를 사용하는 능력을 테스트합니다. 이 질문은 일반적으로 최대 90초 동안 진행되며 유창성과 어휘력을 모두 평가합니다.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Read, then Speak 및 Listen, then Speak 과제는 응시자가 각각 쓰여진 내용이나 음성 내용을 기반으로 한 프롬프트에 응답하도록 요구합니다. 이러한 형식은 이해력과 제한 시간 내에 아이디어를 명확하고 일관성 있게 전달하는 능력을 평가합니다.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Read Aloud 질문은 응시자에게 제공된 텍스트를 발음과 억양에 초점을 맞춰 소리 내어 읽도록 요구합니다.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    '마지막으로, Speaking Sample은 응시자가 자신의 말하기 능력을 보여줄 기회를 제공하여 기관에 그들의 숙련도에 대한 추가적인 통찰력을 제공합니다. 종합적으로, 이러한 문제 유형은 영어 사용 환경에서의 성공에 필요한 말하기 능력에 대한 포괄적인 평가를 보장합니다.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ko/courses#writing',
              position: 4,
              name: '쓰기 코스',
              description:
                'Write About the Photo, Interactive Writing, Writing Sample 문제 유형을 다루는 DET 쓰기 섹션 준비 코스.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo는 응시자가 이미지를 관찰하고 1분 이내에 묘사적인 단락을 작성하도록 요구합니다. 이 과제는 시각적 세부 정보를 명확하게 표현하고 일관된 생각을 표현하는 능력을 평가하며 어휘력과 문법적 정확성을 강조합니다.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    '2024년 초에 도입된 Interactive Writing은 두 부분으로 구성된 과제를 제시합니다. 처음에 응시자는 프롬프트에 대해 5분 동안 응답하고, 그런 다음 첫 번째 응답을 기반으로 생성된 두 번째 프롬프트에 대해 추가로 3분 동안 글을 작성해야 합니다. 이 형식은 창의성과 일관성뿐만 아니라 응시자가 초기 아이디어를 바탕으로 글을 작성해야 하므로 쓰기 적응력도 테스트합니다.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Writing Sample 문제는 응시자에게 주어진 주제에 대해 제한된 시간 내에 구조화된 응답을 작성하도록 요청합니다. 이 과제는 구성, 명확성, 논증을 포함한 전반적인 쓰기 능력을 평가합니다. 종합적으로, 이러한 문제 유형은 실제 상황에서 응시자의 쓰기 능력에 대한 포괄적인 평가를 보장하며 학문적 또는 전문적 환경에 대한 준비도를 반영합니다.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ko/courses#vocabulary',
              position: 5,
              name: '어휘 코스',
              description:
                '고급 사진 묘사 기법 및 Interactive Listening 시나리오 어휘 등 DET 어휘의 가장 어려운 측면을 목표로 하는 종합적인 DET 어휘 코스. 언어 능력을 향상시키고 시험 성공을 극대화하도록 설계되었습니다.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ko/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/ko/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '홈',
              item: 'https://www.detpractice.com/ko/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '코스',
              item: 'https://www.detpractice.com/ko/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/ko/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DET 코스 패키지에는 무엇이 포함되어 있나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '저희 DET 코스 패키지에는 모든 시험 섹션(읽기, 듣기, 말하기, 쓰기)을 다루는 포괄적인 모듈, 전문 어휘 훈련, 각 강의와 통합된 연습 문제, 비디오 및 텍스트 형식 옵션, 성과 분석, 각 문제 유형에 대한 전문가 팁, 최신 시험 형식에 맞춘 정기적인 업데이트가 포함되어 있습니다. 이 코스는 이론적 지식과 실제 적용 능력을 모두 제공하는 완전한 준비 경험을 제공하도록 설계되었습니다.',
              },
            },
            {
              '@type': 'Question',
              name: '이 DET 코스는 다른 준비 자료와 어떻게 다른가요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '저희 DET 코스는 다양한 숙련도 수준에 맞춰 콘텐츠를 조정하는 적응형 학습 접근 방식, 학습과 동시에 연습하는 통합 방법론, 단순한 콘텐츠가 아닌 전략에 초점을 맞추는 방식, 모든 문제 유형(2024년 초에 도입된 Interactive Writing과 같은 최신 형식 포함)에 대한 포괄적인 커버리지, 시험 전문가가 만든 독점적인 말하기 및 쓰기 가이드 포함 등으로 차별화됩니다. 또한, 저희 코스는 성공적인 응시자들의 실시간 피드백을 바탕으로 지속적으로 업데이트되어 가장 관련성 높고 효과적인 준비 자료를 보장합니다.',
              },
            },
            {
              '@type': 'Question',
              name: 'DET 코스는 최신 시험 형식을 다루나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '네, 저희 DET 코스는 최신 시험 형식에 맞춰 완전히 업데이트되었습니다. 2024년 초에 도입된 Interactive Writing과 같은 최신 추가 사항을 포함하여 현재 모든 문제 유형에 대한 전용 섹션이 있습니다. 저희 전문가 팀은 듀오링고 영어 시험의 변경 사항을 지속적으로 모니터링하고 가장 최신의 관련성 있는 콘텐츠로 준비할 수 있도록 코스 자료를 신속하게 업데이트합니다.',
              },
            },
            {
              '@type': 'Question',
              name: '어떤 DET 코스 섹션부터 시작해야 할지 어떻게 알 수 있나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '모든 DET 섹션에 걸쳐 자신의 강점과 약점을 파악하기 위해 무료 진단 테스트부터 시작하는 것을 권장합니다. 결과에 따라 저희 플랫폼은 가장 개선이 필요한 영역을 우선시하는 개인화된 학습 경로를 제안할 것입니다. 그러나 이미 어려운 영역을 알고 있다면 말하기, 쓰기, 읽기 또는 듣기와 같은 특정 모듈에 직접 접근할 수 있습니다. 처음 시험을 치르는 응시자에게는 시험 형식에 대한 포괄적인 이해를 위해 전체 코스를 순서대로 따라가는 것이 좋습니다.',
              },
            },
            {
              '@type': 'Question',
              name: 'DET 코스에 샘플 답변이 포함되어 있나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '네, 저희 DET 코스에는 모든 문제 유형에 대한 광범위한 샘플 답변이 포함되어 있습니다. 말하기 및 쓰기 섹션의 경우, 각 답변이 특정 점수를 받는 이유를 설명하는 상세한 주석과 함께 다양한 숙련도 수준(85-145점 범위)의 모범 답안을 제공합니다. 이러한 예시는 강점과 개선 영역을 모두 강조하여 평가자가 무엇을 찾는지 정확하게 이해하는 데 도움이 됩니다. 읽기 및 듣기 섹션의 경우, 정답의 근거에 초점을 맞춘 모든 연습 문제에 대한 포괄적인 설명을 포함합니다.',
              },
            },
          ],
        },
      ],
    },
  ],
  pt: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/pt/courses#webpage',
          url: 'https://www.detpractice.com/pt/courses',
          name: 'Curso DET Gratuito - Cursos de Preparação para o Duolingo English Test | DET Practice',
          description:
            'Curso DET liderado por especialistas com taxa de sucesso de 95% dos alunos. Curso DET completo cobrindo todos os tipos de perguntas, conjuntos de prática integrados, disponível em formato de vídeo e texto.',
          inLanguage: 'pt',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/pt/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/pt/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/pt/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/pt/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Ver em outros idiomas',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
          name: 'Curso Completo de Preparação para o Duolingo English Test',
          description:
            'Curso DET abrangente cobrindo todos os tipos de perguntas com conjuntos de prática integrados. Disponível em lições de vídeo e formato de texto, totalmente alinhado com o formato mais recente do exame DET.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/pt/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Avançado',
          learningResourceType: [
            'Lições em Vídeo',
            'Materiais em Texto',
            'Conjuntos de Prática',
            'Material do Curso',
            'Preparação para Exame',
          ],
          teaches: [
            'Habilidades de Leitura DET',
            'Habilidades de Audição DET',
            'Habilidades de Fala DET',
            'Habilidades de Escrita DET',
            'Vocabulário avançado para DET',
            'Estratégias de realização de testes',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Acesso Gratuito ao Curso',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Acesso gratuito para todos os membros DET Practice, sem taxas adicionais',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/pt/courses#reading' },
            { '@id': 'https://www.detpractice.com/pt/courses#listening' },
            { '@id': 'https://www.detpractice.com/pt/courses#speaking' },
            { '@id': 'https://www.detpractice.com/pt/courses#writing' },
            { '@id': 'https://www.detpractice.com/pt/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/pt/courses#courseSections',
          name: 'Seções do Curso DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/pt/courses#reading',
              position: 1,
              name: 'Curso de Leitura',
              description:
                'Curso de preparação da seção de Leitura DET cobrindo os tipos de pergunta Read and Select, Fill in the Blanks, Interactive Reading e Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Os participantes do teste veem uma série de palavras e devem identificar quais são palavras reais em inglês. Esta tarefa avalia o reconhecimento de vocabulário e a capacidade de distinguir entre palavras válidas e inválidas, refletindo a compreensão de palavras no mundo real.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Os candidatos recebem frases contendo palavras em falta. Eles devem selecionar as palavras corretas de uma lista para completar as frases de forma significativa. Esta tarefa avalia gramática, vocabulário e a capacidade de compreender pistas contextuais.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Este componente envolve a leitura de passagens seguida por vários tipos de perguntas, como completar frases, selecionar a frase apropriada para preencher uma lacuna, destacar respostas dentro do texto, identificar ideias principais e escolher títulos adequados para as passagens. Avalia a sua compreensão, pensamento crítico e capacidade de interpretar inglês escrito em vários contextos.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Este tipo de pergunta apresenta uma passagem com letras em falta dentro das palavras. Os participantes do teste devem deduzir e restaurar as palavras completas. Foca-se na ortografia, compreensão contextual e aplicação de vocabulário.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/pt/courses#listening',
              position: 2,
              name: 'Curso de Audição',
              description:
                'Curso de preparação da seção de Audição DET cobrindo os tipos de pergunta Listen and Type e Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'No tipo de pergunta Listen and Type, os participantes do teste ouvem frases faladas e devem transcrevê-las com precisão. Este formato não só mede a capacidade de compreender inglês falado, mas também avalia as habilidades de ortografia e pontuação, cruciais para uma comunicação escrita eficaz. Normalmente, este tipo de pergunta aparece 6 a 9 vezes ao longo do teste, refletindo a sua importância na avaliação da compreensão e das habilidades de conversação.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'Em contraste, a seção Interactive Listening simula conversas da vida real, frequentemente ambientadas em contextos acadêmicos. Os candidatos participam em diálogos entre colegas ou entre um estudante e um membro do corpo docente, respondendo a perguntas que testam a sua compreensão do conteúdo. Esta seção enfatiza a escuta ativa e a capacidade de sintetizar informações de discussões, essencial para o sucesso acadêmico. No geral, estes tipos de perguntas melhoram coletivamente o objetivo do DET de medir a prontidão de um candidato para ambientes de língua inglesa, tanto em contextos acadêmicos como quotidianos.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/pt/courses#speaking',
              position: 3,
              name: 'Curso de Fala',
              description:
                'Curso de preparação da seção de Fala DET cobrindo os tipos de pergunta Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud e Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Na tarefa Speak about the Photo, os candidatos descrevem uma imagem em detalhe, o que testa a sua capacidade de articular pensamentos e usar linguagem descritiva. Esta pergunta dura tipicamente até 90 segundos e avalia tanto a fluência como o vocabulário.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'As tarefas Read, then Speak e Listen, then Speak exigem que os participantes do teste respondam a prompts baseados em conteúdo escrito ou falado, respetivamente. Estes formatos avaliam a compreensão e a capacidade de transmitir ideias de forma clara e coerente dentro de um limite de tempo.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'A pergunta Read Aloud desafia os candidatos a ler um texto fornecido em voz alta, focando-se na pronúncia e entoação.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Por último, o Speaking Sample permite aos candidatos mostrar as suas habilidades de fala, fornecendo às instituições informações adicionais sobre a sua proficiência. Coletivamente, estes tipos de perguntas garantem uma avaliação abrangente das habilidades de fala necessárias para o sucesso em ambientes de língua inglesa.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/pt/courses#writing',
              position: 4,
              name: 'Curso de Escrita',
              description:
                'Curso de preparação da seção de Escrita DET cobrindo os tipos de pergunta Write About the Photo, Interactive Writing e Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo exige que os candidatos observem uma imagem e componham um parágrafo descritivo dentro de um minuto. Esta tarefa avalia a capacidade de articular detalhes visuais e expressar pensamentos coerentes, enfatizando o vocabulário e a precisão gramatical.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, introduzido no início de 2024, apresenta um desafio em duas partes. Inicialmente, os participantes do teste respondem a um prompt durante cinco minutos, seguido por um segundo prompt gerado com base na sua primeira resposta, exigindo três minutos adicionais de escrita. Este formato testa não só a criatividade e a coerência, mas também a adaptabilidade na escrita, uma vez que os candidatos devem construir sobre as suas ideias iniciais.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'A pergunta Writing Sample pede aos participantes do teste que escrevam uma resposta estruturada a um tópico dado dentro de um tempo limitado. Esta tarefa avalia as habilidades gerais de escrita, incluindo organização, clareza e argumentação. Coletivamente, estes tipos de perguntas garantem uma avaliação abrangente das habilidades de escrita dos candidatos em contextos do mundo real, refletindo a sua prontidão para ambientes acadêmicos ou profissionais.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/pt/courses#vocabulary',
              position: 5,
              name: 'Curso de Vocabulário',
              description:
                'Cursos abrangentes de Vocabulário DET visando os aspetos mais desafiadores do vocabulário DET, incluindo técnicas avançadas de descrição de fotos e vocabulário de cenários de Interactive Listening, concebidos para melhorar as capacidades linguísticas e maximizar o sucesso no teste.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/pt/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/pt/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: 'https://www.detpractice.com/pt/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Curso',
              item: 'https://www.detpractice.com/pt/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/pt/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'O que está incluído no pacote do curso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'O nosso pacote do curso DET inclui módulos abrangentes cobrindo todas as seções do teste (Leitura, Audição, Fala e Escrita), treino de vocabulário especializado, exercícios práticos integrados em cada lição, opções de formato de vídeo e texto, análise de desempenho, dicas de especialistas para cada tipo de pergunta e atualizações regulares alinhadas com o formato mais recente do exame. O curso é projetado para fornecer uma experiência de preparação completa com conhecimento teórico e aplicação prática.',
              },
            },
            {
              '@type': 'Question',
              name: 'Como este curso DET difere de outros materiais de preparação?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'O nosso curso DET destaca-se pela sua abordagem de aprendizagem adaptativa que adapta o conteúdo a diferentes níveis de proficiência, metodologia integrada de prática-enquanto-aprende, foco na estratégia em vez de apenas no conteúdo, cobertura abrangente de todos os tipos de perguntas (incluindo os formatos mais recentes como Interactive Writing), e inclusão de guias exclusivos de fala e escrita criados por especialistas em testes. Adicionalmente, o nosso curso é continuamente atualizado com base no feedback em tempo real de participantes bem-sucedidos no teste, garantindo os recursos de preparação mais relevantes e eficazes.',
              },
            },
            {
              '@type': 'Question',
              name: 'O curso DET cobre o formato de teste mais recente?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, o nosso curso DET está totalmente atualizado para o formato de exame mais recente. Temos seções dedicadas para todos os tipos de perguntas atuais, incluindo as adições mais recentes como Interactive Writing, introduzido no início de 2024. A nossa equipa de especialistas monitoriza continuamente as alterações ao Duolingo English Test e atualiza prontamente os nossos materiais do curso para garantir que se prepara com o conteúdo mais atual e relevante.',
              },
            },
            {
              '@type': 'Question',
              name: 'Como sei por qual seção do curso DET começar?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Recomendamos começar com o nosso teste de diagnóstico gratuito para identificar os seus pontos fortes e fracos em todas as seções do DET. Com base nos seus resultados, a nossa plataforma sugerirá um caminho de aprendizagem personalizado, priorizando as áreas que necessitam de mais melhoria. No entanto, se já conhece as suas áreas de desafio, pode aceder diretamente a módulos específicos como Fala, Escrita, Leitura ou Audição. Para participantes do teste pela primeira vez, sugerimos seguir o curso completo em ordem sequencial para uma compreensão abrangente do formato do teste.',
              },
            },
            {
              '@type': 'Question',
              name: 'Existem respostas de exemplo incluídas no curso DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, o nosso curso DET inclui extensas respostas de exemplo para todos os tipos de perguntas. Para as seções de Fala e Escrita, fornecemos respostas modelo em diferentes níveis de proficiência (da faixa de pontuação 85-145) com anotações detalhadas explicando por que cada resposta receberia uma pontuação específica. Estes exemplos destacam tanto elementos fortes como áreas para melhoria, ajudando-o a entender exatamente o que os avaliadores procuram. Para as seções de Leitura e Audição, incluímos explicações abrangentes para todas as perguntas de prática, focando no raciocínio por trás das respostas corretas.',
              },
            },
          ],
        },
      ],
    },
  ],
  ru: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/ru/courses#webpage',
          url: 'https://www.detpractice.com/ru/courses',
          name: 'Бесплатный курс DET - Курсы подготовки к Duolingo English Test | DET Practice',
          description:
            'Курс DET под руководством экспертов с 95% успеваемостью студентов. Полный курс DET, охватывающий все типы вопросов, с интегрированными практическими заданиями, доступен в видео и текстовом формате.',
          inLanguage: 'ru',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/ru/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/ru/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/ru/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/ru/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Просмотреть на других языках',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
          name: 'Полный подготовительный курс к Duolingo English Test',
          description:
            'Комплексный курс DET, охватывающий все типы вопросов с интегрированными практическими заданиями. Доступен как в формате видеоуроков, так и в текстовом формате, полностью соответствует последнему формату экзамена DET.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/ru/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'Продвинутый',
          learningResourceType: [
            'Видеоуроки',
            'Текстовые материалы',
            'Практические задания',
            'Материалы курса',
            'Подготовка к экзамену',
          ],
          teaches: [
            'Навыки чтения DET',
            'Навыки аудирования DET',
            'Навыки говорения DET',
            'Навыки письма DET',
            'Продвинутая лексика для DET',
            'Стратегии сдачи теста',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Бесплатный доступ к курсу',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Бесплатный доступ для всех участников DET Practice, без дополнительных сборов',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/ru/courses#reading' },
            { '@id': 'https://www.detpractice.com/ru/courses#listening' },
            { '@id': 'https://www.detpractice.com/ru/courses#speaking' },
            { '@id': 'https://www.detpractice.com/ru/courses#writing' },
            { '@id': 'https://www.detpractice.com/ru/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/ru/courses#courseSections',
          name: 'Разделы курса DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ru/courses#reading',
              position: 1,
              name: 'Курс по чтению',
              description:
                'Курс подготовки к разделу чтения DET, охватывающий типы вопросов Read and Select, Fill in the Blanks, Interactive Reading и Read and Complete.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Тестируемым показывают ряд слов, и они должны определить, какие из них являются реальными английскими словами. Это задание оценивает распознавание словарного запаса и способность различать действительные и недействительные слова, отражая понимание слов в реальном мире.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Кандидатам предлагаются предложения с пропущенными словами. Они должны выбрать правильные слова из списка, чтобы осмысленно завершить предложения. Это задание оценивает грамматику, словарный запас и способность понимать контекстуальные подсказки.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Этот компонент включает чтение отрывков, за которыми следуют различные типы вопросов, такие как завершение предложений, выбор подходящего предложения для заполнения пропуска, выделение ответов в тексте, определение основных идей и выбор подходящих заголовков для отрывков. Он оценивает ваше понимание, критическое мышление и способность интерпретировать письменный английский язык в различных контекстах.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Этот тип вопроса представляет отрывок с пропущенными буквами в словах. Тестируемые должны вывести и восстановить полные слова. Он фокусируется на правописании, понимании контекста и применении словарного запаса.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ru/courses#listening',
              position: 2,
              name: 'Курс по аудированию',
              description:
                'Курс подготовки к разделу аудирования DET, охватывающий типы вопросов Listen and Type и Interactive Listening.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'В вопросе типа Listen and Type тестируемые слушают произносимые предложения и должны точно их записать. Этот формат не только оценивает способность понимать устную английскую речь, но и оценивает навыки правописания и пунктуации, которые имеют решающее значение для эффективного письменного общения. Обычно этот тип вопроса появляется от 6 до 9 раз на протяжении всего теста, что отражает его значимость в оценке понимания и навыков беседы.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'Напротив, раздел Interactive Listening имитирует реальные разговоры, часто происходящие в академическом контексте. Кандидаты участвуют в диалогах между сверстниками или между студентом и преподавателем, отвечая на вопросы, проверяющие их понимание содержания. Этот раздел подчеркивает активное слушание и способность синтезировать информацию из обсуждений, что необходимо для академического успеха. В целом, эти типы вопросов в совокупности усиливают цель DET по измерению готовности кандидата к англоязычной среде как в академических, так и в повседневных условиях.',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ru/courses#speaking',
              position: 3,
              name: 'Курс по говорению',
              description:
                'Курс подготовки к разделу говорения DET, охватывающий типы вопросов Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud и Speaking Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'В задании Speak about the Photo кандидаты подробно описывают изображение, что проверяет их способность формулировать мысли и использовать описательный язык. Этот вопрос обычно длится до 90 секунд и оценивает как беглость речи, так и словарный запас.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Задания Read, then Speak и Listen, then Speak требуют от тестируемых ответа на подсказки, основанные соответственно на письменном или устном содержании. Эти форматы оценивают понимание и способность четко и связно передавать идеи в установленные сроки.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Вопрос Read Aloud бросает вызов кандидатам прочитать предоставленный текст вслух, сосредоточившись на произношении и интонации.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Наконец, Speaking Sample позволяет кандидатам продемонстрировать свои навыки говорения, предоставляя учебным заведениям дополнительное представление об их уровне владения языком. В совокупности эти типы вопросов обеспечивают всестороннюю оценку навыков говорения, необходимых для успеха в англоязычной среде.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ru/courses#writing',
              position: 4,
              name: 'Курс по письму',
              description:
                'Курс подготовки к разделу письма DET, охватывающий типы вопросов Write About the Photo, Interactive Writing и Writing Sample.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo требует от кандидатов наблюдения за изображением и составления описательного абзаца в течение одной минуты. Это задание оценивает способность формулировать визуальные детали и выражать связные мысли, подчеркивая словарный запас и грамматическую точность.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing, введенный в начале 2024 года, представляет собой двухчастную задачу. Сначала тестируемые отвечают на подсказку в течение пяти минут, после чего следует вторая подсказка, сгенерированная на основе их первого ответа, требующая дополнительных трех минут письма. Этот формат проверяет не только креативность и связность, но и адаптивность в письме, поскольку кандидаты должны развивать свои первоначальные идеи.',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Вопрос Writing Sample просит тестируемых написать структурированный ответ на заданную тему в течение ограниченного времени. Это задание оценивает общие навыки письма, включая организацию, ясность и аргументацию. В совокупности эти типы вопросов обеспечивают всестороннюю оценку письменных способностей кандидатов в реальных контекстах, отражая их готовность к академической или профессиональной среде.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/ru/courses#vocabulary',
              position: 5,
              name: 'Курс по лексике',
              description:
                'Комплексный курс лексики DET, нацеленный на самые сложные аспекты словарного запаса DET, включая продвинутые методы описания фотографий и лексику для сценариев Interactive Listening, разработанный для улучшения языковых способностей и максимизации успеха на тесте.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/ru/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/ru/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Главная',
              item: 'https://www.detpractice.com/ru/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Курс',
              item: 'https://www.detpractice.com/ru/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/ru/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Что включено в пакет курса DET?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Наш пакет курса DET включает комплексные модули, охватывающие все разделы теста (чтение, аудирование, говорение и письмо), специализированную подготовку по лексике, практические упражнения, интегрированные в каждый урок, варианты в видео и текстовом формате, аналитику успеваемости, советы экспертов по каждому типу вопросов и регулярные обновления в соответствии с последним форматом экзамена. Курс разработан для предоставления полного опыта подготовки как с теоретическими знаниями, так и с практическим применением.',
              },
            },
            {
              '@type': 'Question',
              name: 'Чем этот курс DET отличается от других подготовительных материалов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Наш курс DET выделяется своим адаптивным подходом к обучению, который адаптирует контент к разным уровням владения языком, интегрированной методологией практики по мере обучения, фокусом на стратегии, а не только на содержании, всесторонним охватом всех типов вопросов (включая новейшие форматы, такие как Interactive Writing), а также включением эксклюзивных руководств по говорению и письму, созданных экспертами по тестам. Кроме того, наш курс постоянно обновляется на основе отзывов успешных тестируемых в режиме реального времени, обеспечивая наиболее актуальные и эффективные ресурсы для подготовки.',
              },
            },
            {
              '@type': 'Question',
              name: 'Охватывает ли курс DET последний формат теста?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, наш курс DET полностью обновлен для последнего формата экзамена. У нас есть специальные разделы для всех текущих типов вопросов, включая новейшие дополнения, такие как Interactive Writing, введенный в начале 2024 года. Наша команда специалистов постоянно отслеживает изменения в Duolingo English Test и оперативно обновляет наши учебные материалы, чтобы вы готовились с использованием самого актуального и релевантного контента.',
              },
            },
            {
              '@type': 'Question',
              name: 'Как мне узнать, с какого раздела курса DET начать?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Мы рекомендуем начать с нашего бесплатного диагностического теста, чтобы определить ваши сильные и слабые стороны во всех разделах DET. На основе ваших результатов наша платформа предложит персонализированный путь обучения, отдавая приоритет областям, требующим наибольшего улучшения. Однако, если вы уже знаете свои проблемные области, вы можете напрямую получить доступ к конкретным модулям, таким как Говорение, Письмо, Чтение или Аудирование. Для тех, кто сдает тест впервые, мы предлагаем пройти полный курс последовательно для всестороннего понимания формата теста.',
              },
            },
            {
              '@type': 'Question',
              name: 'Включены ли в курс DET примеры ответов?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да, наш курс DET включает обширные примеры ответов для всех типов вопросов. Для разделов Говорения и Письма мы предоставляем образцовые ответы на разных уровнях владения (от 85 до 145 баллов) с подробными аннотациями, объясняющими, почему каждый ответ получит определенный балл. Эти примеры выделяют как сильные элементы, так и области для улучшения, помогая вам точно понять, что ищут оценщики. Для разделов Чтения и Аудирования мы включаем исчерпывающие объяснения ко всем практическим вопросам, сосредотачиваясь на обосновании правильных ответов.',
              },
            },
          ],
        },
      ],
    },
  ],
  th: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/th/courses#webpage',
          url: 'https://www.detpractice.com/th/courses',
          name: 'คอร์ส DET ฟรี - คอร์สเตรียมสอบ Duolingo English Test | DET Practice',
          description:
            'คอร์ส DET นำโดยผู้เชี่ยวชาญพร้อมอัตราความสำเร็จของนักเรียน 95% คอร์ส DET ฉบับสมบูรณ์ครอบคลุมคำถามทุกประเภท ชุดฝึกหัดแบบบูรณาการ มีให้ในรูปแบบวิดีโอและข้อความ',
          inLanguage: 'th',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/th/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/th/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/th/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/th/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'ดูในภาษาอื่น',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/th/courses#completeCourse',
          name: 'คอร์สเตรียมสอบ Duolingo English Test ฉบับสมบูรณ์',
          description:
            'คอร์ส DET ที่ครอบคลุมทุกประเภทคำถามพร้อมชุดฝึกหัดแบบบูรณาการ มีให้ในรูปแบบบทเรียนวิดีโอและข้อความ สอดคล้องกับรูปแบบการสอบ DET ล่าสุดอย่างสมบูรณ์',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/th/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'ขั้นสูง',
          learningResourceType: ['บทเรียนวิดีโอ', 'เอกสารข้อความ', 'ชุดฝึกหัด', 'เนื้อหาหลักสูตร', 'การเตรียมสอบ'],
          teaches: [
            'ทักษะการอ่าน DET',
            'ทักษะการฟัง DET',
            'ทักษะการพูด DET',
            'ทักษะการเขียน DET',
            'คำศัพท์ขั้นสูงสำหรับ DET',
            'กลยุทธ์การทำข้อสอบ',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'การเข้าถึงคอร์สฟรี',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'เข้าถึงฟรีสำหรับสมาชิก DET Practice ทุกคน ไม่มีค่าธรรมเนียมเพิ่มเติม',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/th/courses#reading' },
            { '@id': 'https://www.detpractice.com/th/courses#listening' },
            { '@id': 'https://www.detpractice.com/th/courses#speaking' },
            { '@id': 'https://www.detpractice.com/th/courses#writing' },
            { '@id': 'https://www.detpractice.com/th/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/th/courses#courseSections',
          name: 'ส่วนต่างๆ ของคอร์ส DET',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/th/courses#reading',
              position: 1,
              name: 'คอร์สการอ่าน',
              description:
                'คอร์สเตรียมสอบส่วนการอ่าน DET ครอบคลุมประเภทคำถาม Read and Select, Fill in the Blanks, Interactive Reading และ Read and Complete',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/th/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: ผู้เข้าสอบจะเห็นชุดคำศัพท์และต้องระบุว่าคำใดเป็นคำศัพท์ภาษาอังกฤษจริง งานนี้ประเมินการรู้จำคำศัพท์และความสามารถในการแยกแยะระหว่างคำที่ถูกต้องและไม่ถูกต้อง ซึ่งสะท้อนถึงความเข้าใจคำศัพท์ในโลกแห่งความเป็นจริง',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: ผู้สมัครจะได้รับประโยคที่มีคำศัพท์หายไป พวกเขาต้องเลือกคำที่ถูกต้องจากรายการเพื่อเติมประโยคให้มีความหมายสมบูรณ์ งานนี้ประเมินไวยากรณ์ คำศัพท์ และความสามารถในการเข้าใจเบาะแสตามบริบท',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: ส่วนนี้เกี่ยวข้องกับการอ่านข้อความตามด้วยคำถามประเภทต่างๆ เช่น การเติมประโยค การเลือกประโยคที่เหมาะสมเพื่อเติมช่องว่าง การเน้นคำตอบภายในข้อความ การระบุแนวคิดหลัก และการเลือกชื่อเรื่องที่เหมาะสมสำหรับข้อความ เป็นการวัดความเข้าใจ การคิดเชิงวิพากษ์ และความสามารถในการตีความภาษาอังกฤษที่เขียนในบริบทต่างๆ',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: คำถามประเภทนี้นำเสนอข้อความที่มีตัวอักษรหายไปภายในคำ ผู้เข้าสอบต้องอนุมานและเติมคำให้สมบูรณ์ เน้นที่การสะกดคำ ความเข้าใจบริบท และการประยุกต์ใช้คำศัพท์',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/th/courses#listening',
              position: 2,
              name: 'คอร์สการฟัง',
              description: 'คอร์สเตรียมสอบส่วนการฟัง DET ครอบคลุมประเภทคำถาม Listen and Type และ Interactive Listening',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/th/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'ในคำถามประเภท Listen and Type ผู้เข้าสอบฟังประโยคที่พูดและต้องถอดความอย่างถูกต้อง รูปแบบนี้ไม่เพียงแต่วัดความสามารถในการเข้าใจภาษาอังกฤษที่พูดเท่านั้น แต่ยังประเมินทักษะการสะกดคำและเครื่องหมายวรรคตอน ซึ่งมีความสำคัญต่อการสื่อสารด้วยการเขียนที่มีประสิทธิภาพ โดยทั่วไป คำถามประเภทนี้จะปรากฏ 6 ถึง 9 ครั้งตลอดการทดสอบ ซึ่งสะท้อนถึงความสำคัญในการประเมินความเข้าใจและทักษะการสนทนา',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    'ในทางตรงกันข้าม ส่วน Interactive Listening จำลองการสนทนาในชีวิตจริง ซึ่งมักเกิดขึ้นในบริบททางวิชาการ ผู้สมัครเข้าร่วมบทสนทนาระหว่างเพื่อนร่วมงานหรือระหว่างนักเรียนและคณาจารย์ ตอบคำถามที่ทดสอบความเข้าใจในเนื้อหา ส่วนนี้เน้นการฟังอย่างตั้งใจและความสามารถในการสังเคราะห์ข้อมูลจากการสนทนา ซึ่งจำเป็นต่อความสำเร็จทางวิชาการ โดยรวมแล้ว คำถามประเภทเหล่านี้จะช่วยเพิ่มเป้าหมายของ DET ในการวัดความพร้อมของผู้สมัครสำหรับสภาพแวดล้อมที่ใช้ภาษาอังกฤษทั้งในเชิงวิชาการและในชีวิตประจำวัน',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/th/courses#speaking',
              position: 3,
              name: 'คอร์สการพูด',
              description:
                'คอร์สเตรียมสอบส่วนการพูด DET ครอบคลุมประเภทคำถาม Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud และ Speaking Sample',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/th/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'ในงาน Speak about the Photo ผู้สมัครอธิบายภาพโดยละเอียด ซึ่งทดสอบความสามารถในการแสดงความคิดเห็นและใช้ภาษาเชิงพรรณนา คำถามนี้มักใช้เวลาถึง 90 วินาทีและประเมินทั้งความคล่องแคล่วและคำศัพท์',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'งาน Read, then Speak และ Listen, then Speak กำหนดให้ผู้เข้าสอบตอบสนองต่อข้อความแจ้งตามเนื้อหาที่เขียนหรือพูดตามลำดับ รูปแบบเหล่านี้ประเมินความเข้าใจและความสามารถในการถ่ายทอดความคิดอย่างชัดเจนและสอดคล้องกันภายในเวลาที่กำหนด',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'คำถาม Read Aloud ท้าทายผู้สมัครให้อ่านออกเสียงข้อความที่ให้มา โดยเน้นที่การออกเสียงและน้ำเสียง',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'สุดท้าย Speaking Sample ช่วยให้ผู้สมัครแสดงทักษะการพูดของตนเอง ทำให้สถาบันต่างๆ ได้รับข้อมูลเชิงลึกเพิ่มเติมเกี่ยวกับความสามารถของพวกเขา โดยรวมแล้ว คำถามประเภทเหล่านี้ช่วยให้มั่นใจได้ถึงการประเมินทักษะการพูดที่ครอบคลุมซึ่งจำเป็นต่อความสำเร็จในสภาพแวดล้อมที่ใช้ภาษาอังกฤษ',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/th/courses#writing',
              position: 4,
              name: 'คอร์สการเขียน',
              description:
                'คอร์สเตรียมสอบส่วนการเขียน DET ครอบคลุมประเภทคำถาม Write About the Photo, Interactive Writing และ Writing Sample',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/th/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo กำหนดให้ผู้สมัครสังเกตภาพและเขียนย่อหน้าเชิงพรรณนาภายในกรอบเวลาหนึ่งนาที งานนี้ประเมินความสามารถในการแสดงรายละเอียดทางสายตาและแสดงความคิดที่สอดคล้องกัน โดยเน้นคำศัพท์และความถูกต้องทางไวยากรณ์',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing ซึ่งเปิดตัวเมื่อต้นปี 2024 นำเสนอความท้าทายสองส่วน ในตอนแรก ผู้เข้าสอบตอบสนองต่อข้อความแจ้งเป็นเวลาห้านาที ตามด้วยข้อความแจ้งที่สองซึ่งสร้างขึ้นจากการตอบสนองครั้งแรกของพวกเขา ซึ่งต้องใช้เวลาเขียนเพิ่มเติมอีกสามนาที รูปแบบนี้ไม่เพียงแต่ทดสอบความคิดสร้างสรรค์และความสอดคล้องกันเท่านั้น แต่ยังทดสอบความสามารถในการปรับตัวในการเขียนด้วย เนื่องจากผู้สมัครต้องต่อยอดจากแนวคิดเริ่มต้นของตน',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'คำถาม Writing Sample ขอให้ผู้เข้าสอบเขียนคำตอบที่มีโครงสร้างสำหรับหัวข้อที่กำหนดภายในเวลาจำกัด งานนี้ประเมินทักษะการเขียนโดยรวม รวมถึงการจัดระเบียบ ความชัดเจน และการให้เหตุผล โดยรวมแล้ว คำถามประเภทเหล่านี้ช่วยให้มั่นใจได้ถึงการประเมินความสามารถในการเขียนของผู้สมัครอย่างครอบคลุมในบริบทของโลกแห่งความเป็นจริง ซึ่งสะท้อนถึงความพร้อมสำหรับสภาพแวดล้อมทางวิชาการหรือวิชาชีพ',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/th/courses#vocabulary',
              position: 5,
              name: 'คอร์สคำศัพท์',
              description:
                'คอร์สคำศัพท์ DET ที่ครอบคลุมซึ่งมุ่งเน้นไปที่แง่มุมที่ท้าทายที่สุดของคำศัพท์ DET รวมถึงเทคนิคการบรรยายภาพขั้นสูงและคำศัพท์สำหรับสถานการณ์ Interactive Listening ออกแบบมาเพื่อเพิ่มความสามารถทางภาษาและเพิ่มความสำเร็จในการทดสอบให้สูงสุด',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/th/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/th/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'หน้าแรก',
              item: 'https://www.detpractice.com/th/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'คอร์ส',
              item: 'https://www.detpractice.com/th/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/th/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'แพ็คเกจคอร์ส DET ประกอบด้วยอะไรบ้าง',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'แพ็คเกจคอร์ส DET ของเราประกอบด้วยโมดูลที่ครอบคลุมทุกส่วนของการทดสอบ (การอ่าน การฟัง การพูด และการเขียน) การฝึกอบรมคำศัพท์เฉพาะทาง แบบฝึกหัดที่รวมอยู่ในแต่ละบทเรียน ตัวเลือกรูปแบบวิดีโอและข้อความ การวิเคราะห์ประสิทธิภาพ เคล็ดลับจากผู้เชี่ยวชาญสำหรับคำถามแต่ละประเภท และการอัปเดตเป็นประจำเพื่อให้สอดคล้องกับรูปแบบการสอบล่าสุด คอร์สนี้ออกแบบมาเพื่อมอบประสบการณ์การเตรียมตัวที่สมบูรณ์แบบทั้งความรู้ทางทฤษฎีและการประยุกต์ใช้จริง',
              },
            },
            {
              '@type': 'Question',
              name: 'คอร์ส DET นี้แตกต่างจากสื่อการเตรียมสอบอื่นอย่างไร',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'คอร์ส DET ของเราโดดเด่นด้วยแนวทางการเรียนรู้แบบปรับเปลี่ยนได้ซึ่งปรับเนื้อหาให้เข้ากับระดับความสามารถที่แตกต่างกัน วิธีการฝึกฝนไปพร้อมกับการเรียนรู้แบบบูรณาการ การมุ่งเน้นไปที่กลยุทธ์แทนที่จะเป็นเพียงเนื้อหา การครอบคลุมคำถามทุกประเภทอย่างครอบคลุม (รวมถึงรูปแบบใหม่ล่าสุด เช่น Interactive Writing) และการรวมคู่มือการพูดและการเขียนสุดพิเศษที่สร้างขึ้นโดยผู้เชี่ยวชาญด้านการทดสอบ นอกจากนี้ คอร์สของเรายังได้รับการอัปเดตอย่างต่อเนื่องตามความคิดเห็นแบบเรียลไทม์จากผู้เข้าสอบที่ประสบความสำเร็จ เพื่อให้มั่นใจว่าทรัพยากรการเตรียมตัวมีความเกี่ยวข้องและมีประสิทธิภาพมากที่สุด',
              },
            },
            {
              '@type': 'Question',
              name: 'คอร์ส DET ครอบคลุมรูปแบบการทดสอบล่าสุดหรือไม่',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ใช่ คอร์ส DET ของเราได้รับการอัปเดตอย่างสมบูรณ์สำหรับรูปแบบการสอบล่าสุด เรามีส่วนเฉพาะสำหรับคำถามประเภทปัจจุบันทั้งหมด รวมถึงส่วนเพิ่มเติมใหม่ล่าสุด เช่น Interactive Writing ที่เปิดตัวเมื่อต้นปี 2024 ทีมผู้เชี่ยวชาญของเราคอยติดตามการเปลี่ยนแปลงของ Duolingo English Test อย่างต่อเนื่องและอัปเดตเนื้อหาหลักสูตรของเราทันทีเพื่อให้แน่ใจว่าคุณกำลังเตรียมตัวด้วยเนื้อหาที่ทันสมัยและเกี่ยวข้องมากที่สุด',
              },
            },
            {
              '@type': 'Question',
              name: 'ฉันจะรู้ได้อย่างไรว่าควรเริ่มเรียนส่วนไหนของคอร์ส DET ก่อน',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'เราแนะนำให้เริ่มต้นด้วยการทดสอบวินิจฉัยฟรีของเราเพื่อระบุจุดแข็งและจุดอ่อนของคุณในทุกส่วนของ DET จากผลลัพธ์ของคุณ แพลตฟอร์มของเราจะแนะนำเส้นทางการเรียนรู้ส่วนบุคคล โดยให้ความสำคัญกับส่วนที่ต้องการการปรับปรุงมากที่สุด อย่างไรก็ตาม หากคุณทราบส่วนที่เป็นปัญหาของคุณอยู่แล้ว คุณสามารถเข้าถึงโมดูลเฉพาะได้โดยตรง เช่น การพูด การเขียน การอ่าน หรือการฟัง สำหรับผู้เข้าสอบครั้งแรก เราแนะนำให้เรียนตามลำดับของคอร์สฉบับสมบูรณ์เพื่อความเข้าใจที่ครอบคลุมเกี่ยวกับรูปแบบการทดสอบ',
              },
            },
            {
              '@type': 'Question',
              name: 'มีตัวอย่างคำตอบรวมอยู่ในคอร์ส DET หรือไม่',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ใช่ คอร์ส DET ของเรามีตัวอย่างคำตอบมากมายสำหรับคำถามทุกประเภท สำหรับส่วนการพูดและการเขียน เรามีคำตอบตัวอย่างในระดับความสามารถที่แตกต่างกัน (ตั้งแต่ช่วงคะแนน 85-145) พร้อมคำอธิบายโดยละเอียดว่าทำไมแต่ละคำตอบจึงได้รับคะแนนนั้นๆ ตัวอย่างเหล่านี้เน้นทั้งองค์ประกอบที่แข็งแกร่งและส่วนที่ต้องปรับปรุง ช่วยให้คุณเข้าใจได้อย่างชัดเจนว่าผู้ประเมินมองหาอะไร สำหรับส่วนการอ่านและการฟัง เรามีคำอธิบายที่ครอบคลุมสำหรับคำถามฝึกหัดทั้งหมด โดยเน้นที่เหตุผลเบื้องหลังคำตอบที่ถูกต้อง',
              },
            },
          ],
        },
      ],
    },
  ],
  tr: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/tr/courses#webpage',
          url: 'https://www.detpractice.com/tr/courses',
          name: 'Ücretsiz DET Kursu - Duolingo İngilizce Testi Hazırlık Kursları | DET Practice',
          description:
            'Uzman Liderliğinde DET Kursu, %95 Öğrenci Başarı Oranı. Tüm soru tiplerini kapsayan, entegre pratik setleri içeren, video ve metin formatında mevcut eksiksiz DET kursu.',
          inLanguage: 'tr',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/tr/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/tr/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/tr/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/tr/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: 'Diğer dillerde görüntüle',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
          name: 'Duolingo İngilizce Testi Eksiksiz Hazırlık Kursu',
          description:
            'Tüm soru tiplerini ve entegre pratik setlerini kapsayan kapsamlı DET kursu. Hem video dersleri hem de metin formatında mevcuttur, en son DET sınav formatıyla tamamen uyumludur.',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/tr/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: 'İleri Seviye',
          learningResourceType: [
            'Video Dersleri',
            'Metin Materyalleri',
            'Pratik Setleri',
            'Kurs Materyali',
            'Sınav Hazırlığı',
          ],
          teaches: [
            'DET Okuma becerileri',
            'DET Dinleme becerileri',
            'DET Konuşma becerileri',
            'DET Yazma becerileri',
            'DET için ileri seviye kelime bilgisi',
            'Test çözme stratejileri',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: 'Ücretsiz Kurs Erişimi',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: 'Tüm DET Practice üyeleri için ücretsiz erişim, ek ücret yok',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/tr/courses#reading' },
            { '@id': 'https://www.detpractice.com/tr/courses#listening' },
            { '@id': 'https://www.detpractice.com/tr/courses#speaking' },
            { '@id': 'https://www.detpractice.com/tr/courses#writing' },
            { '@id': 'https://www.detpractice.com/tr/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/tr/courses#courseSections',
          name: 'DET Kurs Bölümleri',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/tr/courses#reading',
              position: 1,
              name: 'Okuma Kursu',
              description:
                'Read and Select, Fill in the Blanks, Interactive Reading ve Read and Complete soru tiplerini kapsayan DET Okuma bölümü hazırlık kursu.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: Test katılımcılarına bir dizi kelime gösterilir ve hangilerinin gerçek İngilizce kelimeler olduğunu belirlemeleri gerekir. Bu görev, kelime tanıma ve geçerli ile geçersiz kelimeler arasında ayrım yapma yeteneğini değerlendirir, gerçek dünya kelime anlama becerisini yansıtır.',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: Adaylara eksik kelimeler içeren cümleler sunulur. Cümleleri anlamlı bir şekilde tamamlamak için listeden doğru kelimeleri seçmeleri gerekir. Bu görev, dilbilgisi, kelime bilgisi ve bağlamsal ipuçlarını anlama yeteneğini değerlendirir.',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: Bu bileşen, pasajları okumayı ve ardından cümleleri tamamlama, boşluğu doldurmak için uygun cümleyi seçme, metin içindeki cevapları vurgulama, ana fikirleri belirleme ve pasajlar için uygun başlıkları seçme gibi çeşitli soru türlerini içerir. Anlama, eleştirel düşünme ve çeşitli bağlamlarda yazılı İngilizceyi yorumlama yeteneğinizi ölçer.',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: Bu soru tipi, kelimeler içinde eksik harfler bulunan bir pasaj sunar. Test katılımcıları tam kelimeleri çıkarmalı ve geri yüklemelidir. Yazım, bağlamsal anlama ve kelime bilgisi uygulamasına odaklanır.',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/tr/courses#listening',
              position: 2,
              name: 'Dinleme Kursu',
              description:
                'Listen and Type ve Interactive Listening soru tiplerini kapsayan DET Dinleme bölümü hazırlık kursu.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    'Listen and Type soru tipinde, test katılımcıları konuşulan cümleleri dinler ve doğru bir şekilde yazıya dökmelidir. Bu format sadece konuşulan İngilizceyi anlama yeteneğini ölçmekle kalmaz, aynı zamanda etkili yazılı iletişim için hayati önem taşıyan yazım ve noktalama becerilerini de değerlendirir. Tipik olarak, bu soru tipi test boyunca 6 ila 9 kez görünür, bu da anlama ve konuşma becerilerini değerlendirmedeki önemini yansıtır.',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    "Tersine, Interactive Listening bölümü, genellikle akademik bağlamlarda geçen gerçek hayat konuşmalarını simüle eder. Adaylar, akranlar arasında veya bir öğrenci ile bir öğretim üyesi arasındaki diyaloglara katılır ve içerik anlayışlarını test eden soruları yanıtlarlar. Bu bölüm, akademik başarı için gerekli olan aktif dinleme ve tartışmalardan bilgi sentezleme yeteneğini vurgular. Genel olarak, bu soru tipleri topluca, DET'in bir adayın hem akademik hem de günlük ortamlarda İngilizce konuşulan ortamlara hazır olup olmadığını ölçme hedefini geliştirir.",
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/tr/courses#speaking',
              position: 3,
              name: 'Konuşma Kursu',
              description:
                'Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud ve Speaking Sample soru tiplerini kapsayan DET Konuşma bölümü hazırlık kursu.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    'Speak about the Photo görevinde, adaylar bir resmi ayrıntılı olarak tanımlar, bu da düşüncelerini ifade etme ve betimleyici dil kullanma yeteneklerini test eder. Bu soru tipik olarak 90 saniyeye kadar sürer ve hem akıcılığı hem de kelime bilgisini değerlendirir.',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Read, then Speak ve Listen, then Speak görevleri, test katılımcılarının sırasıyla yazılı veya sözlü içeriğe dayalı istemlere yanıt vermesini gerektirir. Bu formatlar, anlama ve fikirleri bir zaman sınırı içinde açık ve tutarlı bir şekilde iletme yeteneğini değerlendirir.',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description:
                    'Read Aloud sorusu, adayları sağlanan bir metni telaffuz ve tonlamaya odaklanarak yüksek sesle okumaya zorlar.',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    'Son olarak, Speaking Sample adaylara konuşma becerilerini sergileme imkanı tanır ve kurumlara yeterlilikleri hakkında ek bilgiler sağlar. Topluca, bu soru tipleri İngilizce konuşulan ortamlarda başarı için gerekli konuşma becerilerinin kapsamlı bir değerlendirmesini sağlar.',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/tr/courses#writing',
              position: 4,
              name: 'Yazma Kursu',
              description:
                'Write About the Photo, Interactive Writing ve Writing Sample soru tiplerini kapsayan DET Yazma bölümü hazırlık kursu.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo, adayların bir resmi gözlemlemesini ve bir dakikalık zaman dilimi içinde betimleyici bir paragraf yazmasını gerektirir. Bu görev, görsel ayrıntıları ifade etme ve tutarlı düşünceler ifade etme yeteneğini değerlendirir, kelime bilgisi ve dilbilgisel doğruluğu vurgular.',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    "2024'ün başlarında tanıtılan Interactive Writing, iki bölümlü bir meydan okuma sunar. Başlangıçta, test katılımcıları bir isteme beş dakika boyunca yanıt verir, ardından ilk yanıtlarına göre oluşturulan ikinci bir isteme ek üç dakikalık yazma süresi gerekir. Bu format sadece yaratıcılığı ve tutarlılığı değil, aynı zamanda adayların ilk fikirleri üzerine inşa etmeleri gerektiğinden yazmada uyum sağlama yeteneğini de test eder.",
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Writing Sample sorusu, test katılımcılarından belirli bir konu hakkında sınırlı bir süre içinde yapılandırılmış bir yanıt yazmalarını ister. Bu görev, organizasyon, açıklık ve argümantasyon dahil olmak üzere genel yazma becerilerini değerlendirir. Topluca, bu soru tipleri, adayların gerçek dünya bağlamlarındaki yazma yeteneklerinin kapsamlı bir değerlendirmesini sağlar ve akademik veya profesyonel ortamlara hazır olup olmadıklarını yansıtır.',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/tr/courses#vocabulary',
              position: 5,
              name: 'Kelime Bilgisi Kursu',
              description:
                'DET kelime bilgisinin en zorlu yönlerini hedefleyen, ileri düzey fotoğraf tanımlama teknikleri ve Interactive Listening senaryo kelime bilgisi dahil olmak üzere kapsamlı DET Kelime Bilgisi Kursları, dil yeteneklerini geliştirmek ve test başarısını en üst düzeye çıkarmak için tasarlanmıştır.',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/tr/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/tr/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Ana Sayfa',
              item: 'https://www.detpractice.com/tr/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Kurs',
              item: 'https://www.detpractice.com/tr/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/tr/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DET kurs paketine neler dahildir?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DET kurs paketimiz, tüm test bölümlerini (Okuma, Dinleme, Konuşma ve Yazma) kapsayan kapsamlı modüller, özel kelime bilgisi eğitimi, her dersle entegre pratik alıştırmaları, video ve metin formatı seçenekleri, performans analizi, her soru tipi için uzman ipuçları ve en son sınav formatıyla uyumlu düzenli güncellemeler içerir. Kurs, hem teorik bilgi hem de pratik uygulama ile eksiksiz bir hazırlık deneyimi sağlamak üzere tasarlanmıştır.',
              },
            },
            {
              '@type': 'Question',
              name: 'Bu DET kursu diğer hazırlık materyallerinden nasıl farklıdır?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "DET kursumuz, içeriği farklı yeterlilik seviyelerine göre uyarlayan uyarlanabilir öğrenme yaklaşımı, öğrenirken pratik yapma entegre metodolojisi, sadece içeriğe değil stratejiye odaklanması, tüm soru tiplerini (2024'ün başlarında tanıtılan Interactive Writing gibi en yeni formatlar dahil) kapsamlı bir şekilde ele alması ve test uzmanları tarafından oluşturulan özel konuşma ve yazma kılavuzlarını içermesiyle öne çıkar. Ek olarak, kursumuz başarılı test katılımcılarından alınan gerçek zamanlı geri bildirimlere dayanarak sürekli güncellenir ve en alakalı ve etkili hazırlık kaynaklarını sağlar.",
              },
            },
            {
              '@type': 'Question',
              name: 'DET kursu en son test formatını kapsıyor mu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Evet, DET kursumuz en son sınav formatı için tamamen güncellenmiştir. 2024'ün başlarında tanıtılan Interactive Writing gibi en yeni eklemeler dahil olmak üzere mevcut tüm soru tipleri için özel bölümlerimiz bulunmaktadır. Uzman ekibimiz, Duolingo İngilizce Testi'ndeki değişiklikleri sürekli olarak izler ve en güncel ve alakalı içerikle hazırlanmanızı sağlamak için kurs materyallerimizi derhal günceller.",
              },
            },
            {
              '@type': 'Question',
              name: 'Hangi DET kurs bölümüyle başlamam gerektiğini nasıl bilebilirim?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tüm DET bölümlerindeki güçlü ve zayıf yönlerinizi belirlemek için ücretsiz teşhis testimizle başlamanızı öneririz. Sonuçlarınıza dayanarak, platformumuz en çok iyileştirme gerektiren alanlara öncelik veren kişiselleştirilmiş bir öğrenme yolu önerecektir. Ancak, zorlandığınız alanları zaten biliyorsanız, Konuşma, Yazma, Okuma veya Dinleme gibi belirli modüllere doğrudan erişebilirsiniz. İlk kez sınava girecekler için, test formatını kapsamlı bir şekilde anlamak amacıyla tam kursu sırayla takip etmelerini öneririz.',
              },
            },
            {
              '@type': 'Question',
              name: 'DET kursunda örnek cevaplar bulunuyor mu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Evet, DET kursumuz tüm soru tipleri için kapsamlı örnek cevaplar içerir. Konuşma ve Yazma bölümleri için, farklı yeterlilik seviyelerinde (85-145 puan aralığından) model yanıtları, her yanıtın neden belirli bir puan alacağını açıklayan ayrıntılı açıklamalarla birlikte sunuyoruz. Bu örnekler hem güçlü unsurları hem de iyileştirme alanlarını vurgulayarak değerlendiricilerin tam olarak ne aradığını anlamanıza yardımcı olur. Okuma ve Dinleme bölümleri için, doğru cevapların arkasındaki mantığa odaklanan tüm pratik sorular için kapsamlı açıklamalar içeriyoruz.',
              },
            },
          ],
        },
      ],
    },
  ],
  zh: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.detpractice.com/#organization',
          name: 'DET Practice',
          url: 'https://www.detpractice.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.detpractice.com/img/footer/small_logo.svg',
          },
          sameAs: 'https://www.detpractice.com/',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.detpractice.com/zh/courses#webpage',
          url: 'https://www.detpractice.com/zh/courses',
          name: '免费DET课程 - 多邻国英语测试备考课程 | DET Practice',
          description:
            '专家制作的DET课程，学生成功率高达95%。完整的DET课程，涵盖所有题型，集成练习集，提供视频和文字版课程。',
          inLanguage: 'zh',
          availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: '2025-03-18T16:00:00Z',
          publisher: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.detpractice.com/zh/courses#breadcrumb',
          },
          mainEntity: [
            { '@id': 'https://www.detpractice.com/zh/courses#completeCourse' },
            { '@id': 'https://www.detpractice.com/zh/courses#courseSections' },
            { '@id': 'https://www.detpractice.com/zh/courses#faq' },
          ],
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: '以其他语言查看',
              target: [
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/courses',
                  inLanguage: 'en',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/id/courses',
                  inLanguage: 'id',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ja/courses',
                  inLanguage: 'ja',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ko/courses',
                  inLanguage: 'ko',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/ru/courses',
                  inLanguage: 'ru',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/tr/courses',
                  inLanguage: 'tr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/de/courses',
                  inLanguage: 'de',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/es/courses',
                  inLanguage: 'es',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/fr/courses',
                  inLanguage: 'fr',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/it/courses',
                  inLanguage: 'it',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/th/courses',
                  inLanguage: 'th',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/zh/courses',
                  inLanguage: 'zh',
                },
                {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.detpractice.com/pt/courses',
                  inLanguage: 'pt',
                },
              ],
            },
          ],
        },
        {
          '@type': 'Course',
          '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
          name: '多邻国英语测试完整备考课程',
          description:
            '全面的DET课程，涵盖所有题型并配有综合练习集。提供视频课程和文字版两种形式，完全符合最新的DET考试格式。',
          provider: {
            '@id': 'https://www.detpractice.com/#organization',
          },
          url: 'https://www.detpractice.com/zh/courses',
          courseCode: 'DET-COMPLETE',
          educationalLevel: '高级',
          learningResourceType: ['视频课程', '文本材料', '练习集', '课程资料', '备考'],
          teaches: ['DET 阅读技巧', 'DET 听力技巧', 'DET 口语技巧', 'DET 写作技巧', 'DET 高级词汇', '应试策略'],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'P14D',
          },
          offers: {
            '@type': 'Offer',
            category: '免费课程访问',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
            validFrom: '2025-01-01',
            description: '所有DET Practice会员均可免费访问，无额外费用',
          },
          hasPart: [
            { '@id': 'https://www.detpractice.com/zh/courses#reading' },
            { '@id': 'https://www.detpractice.com/zh/courses#listening' },
            { '@id': 'https://www.detpractice.com/zh/courses#speaking' },
            { '@id': 'https://www.detpractice.com/zh/courses#writing' },
            { '@id': 'https://www.detpractice.com/zh/courses#vocabulary' },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': 'https://www.detpractice.com/zh/courses#courseSections',
          name: 'DET 课程章节',
          itemListElement: [
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/zh/courses#reading',
              position: 1,
              name: '阅读课程',
              description:
                'DET 阅读部分备考课程，涵盖 Read and Select, Fill in the Blanks, Interactive Reading, 和 Read and Complete 题型。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Read and Select',
                  description:
                    'Read and Select: 考生会看到一系列单词，必须识别出哪些是真实的英语单词。此任务评估词汇识别能力以及区分有效和无效单词的能力，反映了现实世界中的单词理解能力。',
                  embedUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8UYh_8Co2vo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Fill in the Blanks',
                  description:
                    'Fill in the Blanks: 考生会看到包含缺失单词的句子。他们必须从列表中选择正确的单词，以使句子意义完整。此任务评估语法、词汇以及理解上下文线索的能力。',
                  embedUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
                  thumbnailUrl: 'https://i.ytimg.com/vi/k7kIedxU9og/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Reading',
                  description:
                    'Interactive Reading: 此部分涉及阅读段落，然后回答各种类型的问题，例如完成句子、选择合适的句子填补空白、在文本中突出显示答案、识别主要思想以及为段落选择合适的标题。它衡量您的理解力、批判性思维能力以及在各种情境下解读书面英语的能力。',
                  embedUrl: 'https://www.youtube.com/embed/J7ymVabfTJk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/J7ymVabfTJk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read and Complete',
                  description:
                    'Read and Complete: 这种题型呈现一段文字，其中单词内缺少字母。考生必须推断并还原完整的单词。它侧重于拼写、语境理解和词汇应用。',
                  embedUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/YpDzyBUeOUk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/zh/courses#listening',
              position: 2,
              name: '听力课程',
              description: 'DET 听力部分备考课程，涵盖 Listen and Type 和 Interactive Listening 题型。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Listen and Type',
                  description:
                    '在 Listen and Type 题型中，考生听取口语句子，必须准确地将其转录下来。这种形式不仅衡量理解口语英语的能力，还评估拼写和标点符号技能，这对于有效的书面沟通至关重要。通常，这种题型在整个测试中出现 6 到 9 次，反映了其在评估理解和会话技能方面的重要性。',
                  embedUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
                  thumbnailUrl: 'https://i.ytimg.com/vi/8vbJAoDrIx0/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Listening',
                  description:
                    '相反，Interactive Listening 部分模拟现实生活中的对话，通常设置在学术背景下。考生参与同伴之间或学生与教职员工之间的对话，回答测试他们对内容理解的问题。本部分强调积极倾听和从讨论中综合信息的能力，这对于学术成功至关重要。总的来说，这些题型共同加强了 DET 衡量考生在学术和日常环境中对英语环境准备程度的目标。',
                  embedUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
                  thumbnailUrl: 'https://i.ytimg.com/vi/ptt8E7DNyFw/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/zh/courses#speaking',
              position: 3,
              name: '口语课程',
              description:
                'DET 口语部分备考课程，涵盖 Speak about the Photo, Read then Speak, Listen then Speak, Read Aloud, 和 Speaking Sample 题型。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Speak About the Photo',
                  description:
                    '在 Speak about the Photo 任务中，考生详细描述一幅图像，这测试了他们阐述思想和使用描述性语言的能力。这个问题通常持续长达 90 秒，评估流利度和词汇量。',
                  embedUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
                  thumbnailUrl: 'https://i.ytimg.com/vi/oTyjWsblbYk/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read, Then Speak & Listen, Then Speak',
                  description:
                    'Read, then Speak 和 Listen, then Speak 任务要求考生分别根据书面或口头内容对提示做出回应。这些形式评估理解能力以及在时限内清晰连贯地传达思想的能力。',
                  embedUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/2bj3ViAPkMY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Read Aloud',
                  description: 'Read Aloud 题目要求考生大声朗读提供的文本，重点考察发音和语调。',
                  embedUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo',
                  thumbnailUrl: 'https://i.ytimg.com/vi/rqPV8cP9EPo/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Speaking Sample',
                  description:
                    '最后，Speaking Sample 让考生展示他们的口语技能，为院校提供关于他们熟练程度的额外见解。总的来说，这些题型确保了对在英语环境中取得成功所必需的口语技能的全面评估。',
                  embedUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
                  thumbnailUrl: 'https://i.ytimg.com/vi/sf8FN3GAuHI/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/zh/courses#writing',
              position: 4,
              name: '写作课程',
              description:
                'DET 写作部分备考课程，涵盖 Write About the Photo, Interactive Writing, 和 Writing Sample 题型。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
              },
              hasPart: [
                {
                  '@type': 'VideoObject',
                  name: 'Write About the Photo',
                  description:
                    'Write About the Photo 要求考生观察一幅图像，并在限定的一分钟时间内撰写一段描述性文字。此任务评估阐述视觉细节和表达连贯思想的能力，强调词汇和语法准确性。',
                  embedUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
                  thumbnailUrl: 'https://i.ytimg.com/vi/4FMRfkIKsvQ/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Interactive Writing',
                  description:
                    'Interactive Writing 于 2024 年初推出，提出了一个分为两部分的挑战。首先，考生在五分钟内回应一个提示，然后根据他们的第一个回应生成第二个提示，需要额外的三分钟写作时间。这种形式不仅测试创造力和连贯性，还测试写作的适应性，因为考生必须在他们最初的想法基础上进行构建。',
                  embedUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
                  thumbnailUrl: 'https://i.ytimg.com/vi/BgQ5dxC72WY/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
                {
                  '@type': 'VideoObject',
                  name: 'Writing Sample',
                  description:
                    'Writing Sample 题目要求考生在有限的时间内就给定主题写出结构化的回应。此任务评估整体写作技能，包括组织、清晰度和论证。总的来说，这些题型确保了对考生在现实世界情境中写作能力的全面评估，反映了他们对学术或专业环境的准备程度。',
                  embedUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
                  thumbnailUrl: 'https://i.ytimg.com/vi/hJpe-FvLH9I/hqdefault.jpg',
                  uploadDate: '2025-03-01T00:00:00Z',
                  inLanguage: 'en',
                  publisher: {
                    '@id': 'https://www.detpractice.com/#organization',
                  },
                },
              ],
            },
            {
              '@type': 'Course',
              '@id': 'https://www.detpractice.com/zh/courses#vocabulary',
              position: 5,
              name: '词汇课程',
              description:
                '全面的DET词汇课程，针对DET词汇中最具挑战性的方面，包括高级图片描述技巧和Interactive Listening场景词汇，旨在提高语言能力并最大化考试成功率。',
              provider: { '@id': 'https://www.detpractice.com/#organization' },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
              },
              isPartOf: {
                '@id': 'https://www.detpractice.com/zh/courses#completeCourse',
              },
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.detpractice.com/zh/courses#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '首页',
              item: 'https://www.detpractice.com/zh/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '课程',
              item: 'https://www.detpractice.com/zh/courses',
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.detpractice.com/zh/courses#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DET课程套餐包含哪些内容？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们的DET课程套餐包括涵盖所有考试部分（阅读、听力、口语和写作）的综合模块、专门的词汇训练、与每节课结合的练习题、视频和文本、表现分析、针对每种题型的专家提示以及根据最新考试格式定期更新的内容。该课程旨在提供完整的备考体验，兼具理论知识和实际应用。',
              },
            },
            {
              '@type': 'Question',
              name: '这个DET课程与其他备考材料有何不同？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们的DET课程以其自适应学习方法脱颖而出，该方法根据不同熟练程度调整内容；采用边学边练的综合方法；注重策略而非仅仅是内容；全面覆盖所有题型（包括2024年初推出的 Interactive Writing 等最新题型）；并包含由考试专家创建的独家口语和写作指南。此外，我们的课程根据成功考生的实时反馈持续更新，确保提供最相关、最有效的备考资源。',
              },
            },
            {
              '@type': 'Question',
              name: 'DET课程是否涵盖最新的考试格式？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '是的，我们的DET课程已针对最新的考试格式进行了全面更新。我们为所有当前的题型设置了专门的章节，包括2024年初推出的 Interactive Writing 等最新题型。我们的专家团队持续监控多邻国英语测试的变化，并及时更新我们的课程材料，以确保您使用最新、最相关的内容进行备考。',
              },
            },
            {
              '@type': 'Question',
              name: '我该如何知道从哪个DET课程章节开始学习？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '我们建议从我们的免费诊断测试开始，以确定您在所有DET部分的优势和劣势。根据您的结果，我们的平台将推荐个性化的学习路径，优先考虑最需要改进的领域。但是，如果您已经了解自己的薄弱环节，您可以直接访问特定模块，例如口语、写作、阅读或听力。对于首次参加考试的考生，我们建议按顺序学习完整课程，以全面了解考试格式。',
              },
            },
            {
              '@type': 'Question',
              name: 'DET课程中是否包含范例答案？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '是的，我们的DET课程包含所有题型的广泛范例答案。对于口语和写作部分，我们提供不同级别的回答样例，并附有详细注释，解释每个回答为何会获得特定分数。这些示例突出了优点和需要改进的地方，帮助您准确理解评估者关注的要点。对于阅读和听力部分，我们包含所有练习题的全面解释，重点关注正确答案背后的推理过程。',
              },
            },
          ],
        },
      ],
    },
  ],
};
