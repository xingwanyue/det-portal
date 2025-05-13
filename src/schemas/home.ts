export default {
  en: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Ace the Duolingo English Test',
      description:
        'All-in-one Duolingo English Test Learning Platform with 18,000+ practice questions, 40,000+ mock tests, AI correction for writing and speaking.',
      url: 'https://www.detpractice.com/',
      inLanguage: 'en',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: 'Trusted by over 400,000 users worldwide for Duolingo English Test preparation.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Our product has no connection with Duolingo,Inc',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET Question Bank',
          applicationCategory: 'EducationalApplication',
          description: 'The Largest Question Bank 18,000+ Practice Questions. Continuously updated every day.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'subscription',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pricing',
          },
          featureList: [
            '18,000+ Practice Questions',
            'Continuously updated every day',
            'Provide high-scoring answers and detailed explanations',
            'AI Scoring for Read Aloud',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Full-Length Mock Test',
          applicationCategory: 'EducationalApplication',
          description:
            'The Most Powerful Mock Test, Close to Real DET Exam. Feels Like the Real DET. 40,000+ mock tests taken.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'subscription',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pricing',
          },
          featureList: [
            'The Most Powerful Mock Test, Close to Real DET Exam',
            'Adaptive Exams, and AI Scoring',
            'Accurate Assessment Scores, Detailed Evaluation Report',
            'Results will be available within 1-30 minutes',
            'Full-Length mock tests',
            'Similar to real DET test',
            'Test at any time within 90 days',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Writing AI Correction',
          applicationCategory: 'EducationalApplication',
          description:
            'Get accurate scores and detailed reports so that you can improve your writing skills faster. Support all writing questions!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'subscription',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pricing',
          },
          featureList: [
            "Support 'Write about the Photo', 'Interactive Writing', 'Writing Sample'",
            'AI Scoring, AI Correction, Teacher Guidance',
            'Accurate Assessment Scores, Detailed Evaluation Report',
            'Results will be available within 1-5 minutes',
            'Over 300,000+ reports scored',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Speaking AI Correction',
          applicationCategory: 'EducationalApplication',
          description:
            'Leverage powerful AI to improve your DET speaking score in a targeted manner. Support all speaking questions!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'subscription',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pricing',
          },
          featureList: [
            "Support 'Listen, Then Speak', 'Speak About the Photo', 'Read, then Speak', 'Speaking Sample'",
            'AI Scoring, AI Evaluation Results, Teacher Guidance',
            'Accurate Assessment Scores, Detailed Evaluation Report',
            'Results will be available within 1-5 minutes',
            'Over 300,000+ reports scored',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET AI Tutor',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'A professional Duolingo English Test AI Tutor that helps test takers prepare for their exam through interactive chat',
          offers: {
            '@type': 'Offer',
            category: 'subscription',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pricing',
          },
          featureList: [
            'Interactive chat with AI tutor specialized in DET preparation',
            'Multiple AI model options',
            'Standard chat mode and DET Tutor specific mode',
          ],
        },
        {
          '@type': 'Course',
          name: 'Duolingo English Test Course',
          description:
            'Understand all DET question types in depth and prepare easily and efficiently with our detailed guide.',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'free course',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Achieve Comprehensive Mastery',
            'Learn from ESL Experts',
            'Stay Informed and Ahead',
            'All courses are free',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice Platform',
          description:
            'Duolingo English Test preparation platform with 18,000+ questions, 40,000+ mock tests taken, and AI correction. Trusted by 400,000+ users worldwide.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Total Users',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Practice Questions',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Mock Tests Taken',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                "I've been using this DET practice platform for a few weeks now, and I'm thoroughly impressed with the quality of the practice questions.",
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'As someone preparing for the Duolingo English test, I appreciate having access to model exams on this platform.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com',
      },
      breadcrumb: {
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
            name: 'Duolingo English Test Practice',
            item: 'https://www.detpractice.com/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET Full-Length Mock Test',
            item: 'https://www.detpractice.com/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET Writing AI Correction',
            item: 'https://www.detpractice.com/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET Speaking AI Correction',
            item: 'https://www.detpractice.com/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why Choose DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice offers the largest question bank with 18,000+ practice questions, authentic mock tests that feel like the real DET with 40,000+ tests taken, accurate AI assessment with over 300,000+ reports scored, and free DET courses from ESL experts.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Start Your Path to Top Scores',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Available Languages',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  de: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Meistern Sie den Duolingo English Test',
      description:
        'Die All-in-One Lernplattform für den Duolingo English Test mit über 18.000 Übungsfragen, über 40.000 absolvierten Probetests und KI-Korrektur für Schreiben und Sprechen.',
      url: 'https://www.detpractice.com/de/',
      inLanguage: 'de',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          'Weltweit vertrauen über 400.000 Nutzer auf uns bei der Vorbereitung auf den Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Unser Produkt steht in keiner Verbindung zu Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET Fragenbank',
          applicationCategory: 'EducationalApplication',
          description: 'Die größte Fragenbank mit über 18.000 Übungsfragen. Wird täglich kontinuierlich aktualisiert.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'Abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/de/pricing',
          },
          featureList: [
            '18.000+ Übungsfragen',
            'Wird täglich kontinuierlich aktualisiert',
            'Bietet Antworten für hohe Punktzahlen und detaillierte Erklärungen',
            'KI-Bewertung für Read Aloud (Vorlesen)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Vollständiger Probetest',
          applicationCategory: 'EducationalApplication',
          description:
            'Der leistungsstärkste Probetest, nah am echten DET-Examen. Fühlt sich an wie der echte DET. Über 40.000 absolvierte Probetests.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'Abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/de/pricing',
          },
          featureList: [
            'Der leistungsstärkste Probetest, nah am echten DET-Examen',
            'Adaptive Prüfungen und KI-Bewertung',
            'Genaue Bewertungsergebnisse, detaillierter Bewertungsbericht',
            'Ergebnisse sind innerhalb von 1-30 Minuten verfügbar',
            'Vollständige Probetests',
            'Ähnlich dem echten DET-Test',
            'Test jederzeit innerhalb von 90 Tagen',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Schreiben KI-Korrektur',
          applicationCategory: 'EducationalApplication',
          description:
            'Erhalten Sie genaue Punktzahlen und detaillierte Berichte, um Ihre Schreibfähigkeiten schneller zu verbessern. Unterstützt alle Schreibfragen!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'Abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/de/pricing',
          },
          featureList: [
            "Unterstützt 'Über das Foto schreiben', 'Interaktives Schreiben', 'Schreibprobe'",
            'KI-Bewertung, KI-Korrektur, Lehreranleitung',
            'Genaue Bewertungsergebnisse, detaillierter Bewertungsbericht',
            'Ergebnisse sind innerhalb von 1-5 Minuten verfügbar',
            'Über 300.000+ bewertete Berichte',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Sprechen KI-Korrektur',
          applicationCategory: 'EducationalApplication',
          description:
            'Nutzen Sie leistungsstarke KI, um Ihre DET-Sprechpunktzahl gezielt zu verbessern. Unterstützt alle Sprechfragen!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'Abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/de/pricing',
          },
          featureList: [
            "Unterstützt 'Zuhören, dann sprechen', 'Über das Foto sprechen', 'Lesen, dann sprechen', 'Sprechprobe'",
            'KI-Bewertung, KI-Evaluationsergebnisse, Lehreranleitung',
            'Genaue Bewertungsergebnisse, detaillierter Bewertungsbericht',
            'Ergebnisse sind innerhalb von 1-5 Minuten verfügbar',
            'Über 300.000+ bewertete Berichte',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET KI-Tutor',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Ein professioneller Duolingo English Test KI-Tutor, der Testteilnehmern durch interaktiven Chat bei der Prüfungsvorbereitung hilft.',
          offers: {
            '@type': 'Offer',
            category: 'Abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/de/pricing',
          },
          featureList: [
            'Interaktiver Chat mit einem auf DET-Vorbereitung spezialisierten KI-Tutor',
            'Mehrere KI-Modelloptionen',
            'Standard-Chat-Modus und spezifischer DET-Tutor-Modus',
          ],
        },
        {
          '@type': 'Course',
          name: 'Duolingo English Test Kurs',
          description:
            'Entwickeln Sie mit unseren detaillierten Leitfäden ein tiefgreifendes Verständnis der DET-Sprech- und Schreibabschnitte.',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'kostenloser Kurs',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Umfassende Meisterschaft erreichen',
            'Von ESL-Experten lernen',
            'Informiert bleiben und voraus sein',
            'Alle Kurse sind kostenlos',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice Plattform',
          description:
            'Vorbereitungsplattform für den Duolingo English Test mit 18.000+ Fragen, 40.000+ absolvierten Probetests und KI-Korrektur. Vertraut von 400.000+ Nutzern weltweit.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/de/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Nutzer gesamt',
              value: '400.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Übungsfragen',
              value: '18.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Absolvierte Probetests',
              value: '40.000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'Ich nutze diese DET-Übungsplattform nun seit einigen Wochen und bin von der Qualität der Übungsfragen restlos begeistert.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'Als jemand, der sich auf den Duolingo English Test vorbereitet, schätze ich den Zugang zu Musterprüfungen auf dieser Plattform.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/de/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Duolingo English Test Übung',
            item: 'https://www.detpractice.com/de/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET Vollständiger Probetest',
            item: 'https://www.detpractice.com/de/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET Schreiben KI-Korrektur',
            item: 'https://www.detpractice.com/de/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET Sprechen KI-Korrektur',
            item: 'https://www.detpractice.com/de/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Warum DET Practice wählen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice bietet die größte Fragenbank mit über 18.000 Übungsfragen, authentische Probetests, die sich wie der echte DET anfühlen (über 40.000 absolvierte Tests), genaue KI-Bewertung mit über 300.000 bewerteten Berichten und kostenlose DET-Kurse von ESL-Experten.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Starten Sie Ihren Weg zu Top-Ergebnissen',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Verfügbare Sprachen',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  es: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Domina el Duolingo English Test',
      description:
        'Plataforma todo en uno para aprender el Duolingo English Test con más de 18.000 preguntas de práctica, más de 40.000 pruebas simuladas realizadas y corrección por IA para escritura y expresión oral.',
      url: 'https://www.detpractice.com/es/',
      inLanguage: 'es',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          'Con la confianza de más de 400.000 usuarios en todo el mundo para la preparación del Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Nuestro producto no tiene conexión con Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Banco de Preguntas DET',
          applicationCategory: 'EducationalApplication',
          description:
            'El Banco de Preguntas Más Grande con más de 18.000 Preguntas de Práctica. Actualizado continuamente todos los días.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'suscripción',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/es/pricing',
          },
          featureList: [
            'Más de 18.000 Preguntas de Práctica',
            'Actualizado continuamente todos los días',
            'Proporciona respuestas de alta puntuación y explicaciones detalladas',
            'Puntuación por IA para Leer en Voz Alta (Read Aloud)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Prueba Simulada Completa DET',
          applicationCategory: 'EducationalApplication',
          description:
            'La Prueba Simulada Más Potente, Cercana al Examen DET Real. Se Siente Como el DET Real. Más de 40.000 pruebas simuladas realizadas.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'suscripción',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/es/pricing',
          },
          featureList: [
            'La Prueba Simulada Más Potente, Cercana al Examen DET Real',
            'Exámenes Adaptativos y Puntuación por IA',
            'Puntuaciones de Evaluación Precisas, Informe de Evaluación Detallado',
            'Los resultados estarán disponibles en 1-30 minutos',
            'Pruebas simuladas completas',
            'Similar al examen DET real',
            'Realiza la prueba en cualquier momento dentro de 90 días',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Corrección de Escritura por IA DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Obtén puntuaciones precisas e informes detallados para que puedas mejorar tus habilidades de escritura más rápido. ¡Soporta todas las preguntas de escritura!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'suscripción',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/es/pricing',
          },
          featureList: [
            "Soporta 'Escribir sobre la Foto', 'Escritura Interactiva', 'Muestra de Escritura'",
            'Puntuación por IA, Corrección por IA, Orientación del Profesor',
            'Puntuaciones de Evaluación Precisas, Informe de Evaluación Detallado',
            'Los resultados estarán disponibles en 1-5 minutos',
            'Más de 300.000 informes puntuados',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Corrección de Expresión Oral por IA DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Aprovecha la potente IA para mejorar tu puntuación de expresión oral DET de manera específica. ¡Soporta todas las preguntas de expresión oral!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'suscripción',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/es/pricing',
          },
          featureList: [
            "Soporta 'Escuchar, Luego Hablar', 'Hablar sobre la Foto', 'Leer, Luego Hablar', 'Muestra de Expresión Oral'",
            'Puntuación por IA, Resultados de Evaluación por IA, Orientación del Profesor',
            'Puntuaciones de Evaluación Precisas, Informe de Evaluación Detallado',
            'Los resultados estarán disponibles en 1-5 minutos',
            'Más de 300.000 informes puntuados',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tutor IA DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Un tutor profesional de IA para el Duolingo English Test que ayuda a los examinados a prepararse para su examen a través de chat interactivo.',
          offers: {
            '@type': 'Offer',
            category: 'suscripción',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/es/pricing',
          },
          featureList: [
            'Chat interactivo con tutor IA especializado en preparación DET',
            'Múltiples opciones de modelos de IA',
            'Modo de chat estándar y modo específico Tutor DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Curso Duolingo English Test',
          description:
            'Desarrolla una comprensión profunda de las secciones de expresión oral y escritura del DET con nuestras guías detalladas.',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'curso gratuito',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Alcanza el Dominio Integral',
            'Aprende de Expertos en ESL',
            'Mantente Informado y Adelantado',
            'Todos los cursos son gratuitos',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Plataforma DET Practice',
          description:
            'Plataforma de preparación para el Duolingo English Test con más de 18.000 preguntas, más de 40.000 pruebas simuladas realizadas y corrección por IA. Con la confianza de más de 400.000 usuarios en todo el mundo.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/es/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Usuarios Totales',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Preguntas de Práctica',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Pruebas Simuladas Realizadas',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'He estado usando esta plataforma de práctica DET durante algunas semanas y estoy completamente impresionada con la calidad de las preguntas de práctica.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'Como alguien que se prepara para el examen Duolingo English, agradezco tener acceso a exámenes modelo en esta plataforma.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/es/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Práctica Duolingo English Test',
            item: 'https://www.detpractice.com/es/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Prueba Simulada Completa DET',
            item: 'https://www.detpractice.com/es/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Corrección de Escritura por IA DET',
            item: 'https://www.detpractice.com/es/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Corrección de Expresión Oral por IA DET',
            item: 'https://www.detpractice.com/es/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Por qué elegir DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice ofrece el banco de preguntas más grande con más de 18.000 preguntas de práctica, pruebas simuladas auténticas que se sienten como el DET real con más de 40.000 pruebas realizadas, evaluación precisa por IA con más de 300.000 informes puntuados y cursos DET gratuitos de expertos en ESL.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Inicia Tu Camino Hacia las Mejores Puntuaciones',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Idiomas Disponibles',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  fr: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Réussissez le Duolingo English Test',
      description:
        "Plateforme d'apprentissage tout-en-un pour le Duolingo English Test avec plus de 18 000 questions d'entraînement, plus de 40 000 tests blancs réalisés, correction IA pour l'écriture et l'expression orale.",
      url: 'https://www.detpractice.com/fr/',
      inLanguage: 'fr',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          'Approuvé par plus de 400 000 utilisateurs dans le monde pour la préparation au Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: "Notre produit n'a aucun lien avec Duolingo, Inc.",
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Banque de Questions DET',
          applicationCategory: 'EducationalApplication',
          description:
            "La Plus Grande Banque de Questions avec plus de 18 000 Questions d'Entraînement. Mise à jour continue chaque jour.",
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          featureList: [
            "Plus de 18 000 Questions d'Entraînement",
            'Mise à jour continue chaque jour',
            'Fournit des réponses à score élevé et des explications détaillées',
            'Notation IA pour Read Aloud (Lire à voix haute)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Test Blanc Complet DET',
          applicationCategory: 'EducationalApplication',
          description:
            "Le Test Blanc le Plus Puissant, Proche de l'Examen DET Réel. Ressenti Comme le Vrai DET. Plus de 40 000 tests blancs réalisés.",
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          featureList: [
            "Le Test Blanc le Plus Puissant, Proche de l'Examen DET Réel",
            'Examens Adaptatifs et Notation IA',
            "Scores d'Évaluation Précis, Rapport d'Évaluation Détaillé",
            'Résultats disponibles en 1 à 30 minutes',
            'Tests blancs complets',
            'Similaire au vrai test DET',
            'Test à tout moment sous 90 jours',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correction IA Écriture DET',
          applicationCategory: 'EducationalApplication',
          description:
            "Obtenez des scores précis et des rapports détaillés pour améliorer plus rapidement vos compétences en écriture. Supporte toutes les questions d'écriture !",
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          featureList: [
            "Supporte 'Écrire sur la Photo', 'Écriture Interactive', 'Exemple d'Écriture'",
            'Notation IA, Correction IA, Conseils Pédagogiques',
            "Scores d'Évaluation Précis, Rapport d'Évaluation Détaillé",
            'Résultats disponibles en 1 à 5 minutes',
            'Plus de 300 000 rapports notés',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correction IA Expression Orale DET',
          applicationCategory: 'EducationalApplication',
          description:
            "Tirez parti d'une IA puissante pour améliorer de manière ciblée votre score d'expression orale DET. Supporte toutes les questions d'expression orale !",
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          featureList: [
            "Supporte 'Écouter, Puis Parler', 'Parler de la Photo', 'Lire, Puis Parler', 'Exemple d'Expression Orale'",
            "Notation IA, Résultats d'Évaluation IA, Conseils Pédagogiques",
            "Scores d'Évaluation Précis, Rapport d'Évaluation Détaillé",
            'Résultats disponibles en 1 à 5 minutes',
            'Plus de 300 000 rapports notés',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tuteur IA DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Un tuteur IA professionnel pour le Duolingo English Test qui aide les candidats à se préparer à leur examen via un chat interactif.',
          offers: {
            '@type': 'Offer',
            category: 'abonnement',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          featureList: [
            'Chat interactif avec un tuteur IA spécialisé dans la préparation DET',
            'Options de modèles IA multiples',
            'Mode chat standard et mode spécifique Tuteur DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Cours Duolingo English Test',
          description:
            "Développez une compréhension approfondie des sections d'expression orale et écrite du DET avec nos guides détaillés.",
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'cours gratuit',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Atteindre la Maîtrise Complète',
            'Apprendre des Experts ESL',
            'Restez Informé et en Avance',
            'Tous les cours sont gratuits',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Plateforme DET Practice',
          description:
            'Plateforme de préparation au Duolingo English Test avec plus de 18 000 questions, plus de 40 000 tests blancs réalisés et correction IA. Approuvée par plus de 400 000 utilisateurs dans le monde.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/fr/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Utilisateurs Totaux',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: "Questions d'Entraînement",
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Tests Blancs Réalisés',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                "J'utilise cette plateforme d'entraînement DET depuis quelques semaines maintenant, et je suis profondément impressionnée par la qualité des questions d'entraînement.",
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                "En tant que personne préparant le test Duolingo English, j'apprécie d'avoir accès à des examens modèles sur cette plateforme.",
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/fr/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Entraînement Duolingo English Test',
            item: 'https://www.detpractice.com/fr/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Test Blanc Complet DET',
            item: 'https://www.detpractice.com/fr/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Correction IA Écriture DET',
            item: 'https://www.detpractice.com/fr/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Correction IA Expression Orale DET',
            item: 'https://www.detpractice.com/fr/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi choisir DET Practice ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "DET Practice offre la plus grande banque de questions avec plus de 18 000 questions d'entraînement, des tests blancs authentiques qui ressemblent au vrai DET avec plus de 40 000 tests réalisés, une évaluation IA précise avec plus de 300 000 rapports notés, et des cours DET gratuits dispensés par des experts ESL.",
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Commencez Votre Parcours Vers les Meilleurs Scores',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Langues Disponibles',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  id: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Sukses dalam Tes Bahasa Inggris Duolingo',
      description:
        'Platform Pembelajaran Tes Bahasa Inggris Duolingo lengkap dengan 18.000+ soal latihan, 40.000+ tes simulasi, koreksi AI untuk menulis dan berbicara.',
      url: 'https://www.detpractice.com/id/',
      inLanguage: 'id',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          'Dipercaya oleh lebih dari 400.000 pengguna di seluruh dunia untuk persiapan Tes Bahasa Inggris Duolingo.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Produk kami tidak memiliki hubungan dengan Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Bank Soal DET',
          applicationCategory: 'EducationalApplication',
          description: 'Bank Soal Terbesar 18.000+ Soal Latihan. Terus diperbarui setiap hari.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'langganan',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/id/pricing',
          },
          featureList: [
            '18.000+ Soal Latihan',
            'Terus diperbarui setiap hari',
            'Menyediakan jawaban skor tinggi dan penjelasan rinci',
            'Penilaian AI untuk Read Aloud (Membaca Nyaring)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tes Simulasi Panjang Penuh DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Tes Simulasi Paling Kuat, Mendekati Ujian DET Asli. Terasa Seperti DET Asli. 40.000+ tes simulasi telah diambil.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'langganan',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/id/pricing',
          },
          featureList: [
            'Tes Simulasi Paling Kuat, Mendekati Ujian DET Asli',
            'Ujian Adaptif, dan Penilaian AI',
            'Skor Penilaian Akurat, Laporan Evaluasi Rinci',
            'Hasil akan tersedia dalam 1-30 menit',
            'Tes simulasi panjang penuh',
            'Mirip dengan tes DET asli',
            'Tes kapan saja dalam 90 hari',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Koreksi AI Menulis DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Dapatkan skor akurat dan laporan rinci sehingga Anda dapat meningkatkan keterampilan menulis Anda lebih cepat. Mendukung semua soal menulis!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'langganan',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/id/pricing',
          },
          featureList: [
            "Mendukung 'Menulis tentang Foto', 'Menulis Interaktif', 'Contoh Tulisan'",
            'Penilaian AI, Koreksi AI, Panduan Guru',
            'Skor Penilaian Akurat, Laporan Evaluasi Rinci',
            'Hasil akan tersedia dalam 1-5 menit',
            'Lebih dari 300.000+ laporan telah dinilai',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Koreksi AI Berbicara DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Manfaatkan AI yang kuat untuk meningkatkan skor berbicara DET Anda secara terarah. Mendukung semua soal berbicara!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'langganan',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/id/pricing',
          },
          featureList: [
            "Mendukung 'Dengarkan, Lalu Bicara', 'Bicara Tentang Foto', 'Baca, lalu Bicara', 'Contoh Berbicara'",
            'Penilaian AI, Hasil Evaluasi AI, Panduan Guru',
            'Skor Penilaian Akurat, Laporan Evaluasi Rinci',
            'Hasil akan tersedia dalam 1-5 menit',
            'Lebih dari 300.000+ laporan telah dinilai',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tutor AI DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Tutor AI Tes Bahasa Inggris Duolingo profesional yang membantu peserta tes mempersiapkan ujian mereka melalui obrolan interaktif',
          offers: {
            '@type': 'Offer',
            category: 'langganan',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/id/pricing',
          },
          featureList: [
            'Obrolan interaktif dengan tutor AI yang berspesialisasi dalam persiapan DET',
            'Opsi model AI ganda',
            'Mode obrolan standar dan mode khusus Tutor DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Kursus Tes Bahasa Inggris Duolingo',
          description:
            'Kembangkan pemahaman mendalam tentang bagian berbicara dan menulis DET dengan panduan rinci kami',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'kursus gratis',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Capai Penguasaan Komprehensif',
            'Belajar dari Pakar ESL',
            'Tetap Terinformasi dan Terdepan',
            'Semua kursus gratis',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Platform DET Practice',
          description:
            'Platform persiapan Tes Bahasa Inggris Duolingo dengan 18.000+ soal, 40.000+ tes simulasi diambil, dan koreksi AI. Dipercaya oleh 400.000+ pengguna di seluruh dunia.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/id/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Total Pengguna',
              value: '400.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Soal Latihan',
              value: '18.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Tes Simulasi Diambil',
              value: '40.000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'Saya telah menggunakan platform latihan DET ini selama beberapa minggu sekarang, dan saya sangat terkesan dengan kualitas soal latihannya.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'Sebagai seseorang yang mempersiapkan tes Duolingo English, saya menghargai memiliki akses ke ujian model di platform ini.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/id/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Latihan Tes Bahasa Inggris Duolingo',
            item: 'https://www.detpractice.com/id/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Tes Simulasi Panjang Penuh DET',
            item: 'https://www.detpractice.com/id/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Koreksi AI Menulis DET',
            item: 'https://www.detpractice.com/id/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Koreksi AI Berbicara DET',
            item: 'https://www.detpractice.com/id/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Mengapa Memilih DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice menawarkan bank soal terbesar dengan 18.000+ soal latihan, tes simulasi otentik yang terasa seperti DET asli dengan 40.000+ tes diambil, penilaian AI akurat dengan lebih dari 300.000+ laporan dinilai, dan kursus DET gratis dari pakar ESL.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Mulai Jalan Anda Menuju Skor Tertinggi',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Bahasa yang Tersedia',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  it: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Supera il Duolingo English Test',
      description:
        'Piattaforma di apprendimento all-in-one per il Duolingo English Test con oltre 18.000 domande di pratica, più di 40.000 test di simulazione svolti, correzione AI per scrittura e conversazione.',
      url: 'https://www.detpractice.com/it/',
      inLanguage: 'it',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: 'Scelto da oltre 400.000 utenti in tutto il mondo per la preparazione al Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Il nostro prodotto non ha alcun legame con Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Banca Domande DET',
          applicationCategory: 'EducationalApplication',
          description:
            'La Più Grande Banca Domande con oltre 18.000 Domande di Pratica. Aggiornata continuamente ogni giorno.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abbonamento',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/it/pricing',
          },
          featureList: [
            'Oltre 18.000 Domande di Pratica',
            'Aggiornata continuamente ogni giorno',
            'Fornisce risposte ad alto punteggio e spiegazioni dettagliate',
            'Punteggio AI per Read Aloud (Lettura ad alta voce)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Test di Simulazione Completo DET',
          applicationCategory: 'EducationalApplication',
          description:
            "Il Test di Simulazione Più Potente, Vicino all'Esame DET Reale. Sembra il Vero DET. Oltre 40.000 test di simulazione svolti.",
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abbonamento',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/it/pricing',
          },
          featureList: [
            "Il Test di Simulazione Più Potente, Vicino all'Esame DET Reale",
            'Esami Adattivi e Punteggio AI',
            'Punteggi di Valutazione Accurati, Rapporto di Valutazione Dettagliato',
            'Risultati disponibili entro 1-30 minuti',
            'Test di simulazione completi',
            'Simile al test DET reale',
            'Fai il test in qualsiasi momento entro 90 giorni',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correzione AI Scrittura DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Ottieni punteggi accurati e rapporti dettagliati per migliorare più velocemente le tue abilità di scrittura. Supporta tutte le domande di scrittura!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abbonamento',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/it/pricing',
          },
          featureList: [
            "Supporta 'Scrivi della Foto', 'Scrittura Interattiva', 'Esempio di Scrittura'",
            'Punteggio AI, Correzione AI, Guida Insegnante',
            'Punteggi di Valutazione Accurati, Rapporto di Valutazione Dettagliato',
            'Risultati disponibili entro 1-5 minuti',
            'Oltre 300.000+ rapporti valutati',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correzione AI Conversazione DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Sfrutta la potente AI per migliorare in modo mirato il tuo punteggio di conversazione DET. Supporta tutte le domande di conversazione!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abbonamento',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/it/pricing',
          },
          featureList: [
            "Supporta 'Ascolta, Poi Parla', 'Parla della Foto', 'Leggi, Poi Parla', 'Esempio di Conversazione'",
            'Punteggio AI, Risultati Valutazione AI, Guida Insegnante',
            'Punteggi di Valutazione Accurati, Rapporto di Valutazione Dettagliato',
            'Risultati disponibili entro 1-5 minuti',
            'Oltre 300.000+ rapporti valutati',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tutor AI DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            "Un tutor AI professionale per il Duolingo English Test che aiuta i candidati a prepararsi per l'esame tramite chat interattiva.",
          offers: {
            '@type': 'Offer',
            category: 'abbonamento',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/it/pricing',
          },
          featureList: [
            'Chat interattiva con tutor AI specializzato nella preparazione DET',
            'Molteplici opzioni di modelli AI',
            'Modalità chat standard e modalità specifica Tutor DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Corso Duolingo English Test',
          description:
            'Sviluppa una comprensione approfondita delle sezioni di conversazione e scrittura del DET con le nostre guide dettagliate.',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'corso gratuito',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Raggiungi la Padronanza Completa',
            'Impara da Esperti ESL',
            "Rimani Informato e all'Avanguardia",
            'Tutti i corsi sono gratuiti',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Piattaforma DET Practice',
          description:
            'Piattaforma di preparazione per il Duolingo English Test con 18.000+ domande, 40.000+ test di simulazione svolti e correzione AI. Scelto da 400.000+ utenti in tutto il mondo.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/it/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Utenti Totali',
              value: '400.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Domande di Pratica',
              value: '18.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Test di Simulazione Svolti',
              value: '40.000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'Sto usando questa piattaforma di pratica DET da qualche settimana e sono davvero impressionata dalla qualità delle domande di pratica.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                "Come persona che si prepara per il test Duolingo English, apprezzo l'accesso a esami modello su questa piattaforma.",
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/it/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Pratica Duolingo English Test',
            item: 'https://www.detpractice.com/it/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Test di Simulazione Completo DET',
            item: 'https://www.detpractice.com/it/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Correzione AI Scrittura DET',
            item: 'https://www.detpractice.com/it/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Correzione AI Conversazione DET',
            item: 'https://www.detpractice.com/it/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Perché scegliere DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice offre la più grande banca domande con oltre 18.000 domande di pratica, test di simulazione autentici che sembrano il vero DET con oltre 40.000 test svolti, valutazione AI accurata con oltre 300.000 rapporti valutati e corsi DET gratuiti da esperti ESL.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Inizia il Tuo Percorso Verso i Punteggi Migliori',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Lingue Disponibili',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  ja: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Duolingo English Test 完全攻略',
      description:
        '18,000以上の練習問題、40,000以上の模擬テスト、AIによるライティング・スピーキング添削機能を備えた、オールインワンのDuolingo English Test学習プラットフォーム。',
      url: 'https://www.detpractice.com/ja/',
      inLanguage: 'ja',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: 'Duolingo English Test対策で世界中の40万人以上のユーザーから信頼されています。',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: '当社の製品はDuolingo, Inc.とは一切関係ありません。',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET 問題バンク',
          applicationCategory: 'EducationalApplication',
          description: '最大の質問バンク 18,000以上の練習問題。毎日継続的に更新。',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'サブスクリプション',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          featureList: [
            '18,000以上の練習問題',
            '毎日継続的に更新',
            '高得点解答と詳細な解説を提供',
            'Read Aloud（音読）のAI採点',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET 完全模擬テスト',
          applicationCategory: 'EducationalApplication',
          description: '最も強力な模擬テスト、実際のDET試験に近い。本番さながらの体験。40,000回以上の模擬テスト実施。',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'サブスクリプション',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          featureList: [
            '最も強力な模擬テスト、実際のDET試験に近い',
            'アダプティブ試験、AI採点',
            '正確な評価スコア、詳細な評価レポート',
            '結果は1～30分以内に利用可能',
            '完全模擬テスト',
            '実際のDETテストに類似',
            '90日以内ならいつでも受験可能',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET ライティング AI添削',
          applicationCategory: 'EducationalApplication',
          description:
            '正確なスコアと詳細なレポートで、ライティングスキルをより速く向上させます。全てのライティング問題に対応！',
          applicationSubCategory: 'AI教育ツール',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'サブスクリプション',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          featureList: [
            '「写真について書く」「インタラクティブライティング」「ライティングサンプル」に対応',
            'AI採点、AI添削、講師ガイダンス',
            '正確な評価スコア、詳細な評価レポート',
            '結果は1～5分以内に利用可能',
            '30万件以上のレポート採点実績',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET スピーキング AI添削',
          applicationCategory: 'EducationalApplication',
          description:
            '強力なAIを活用し、ターゲットを絞ってDETスピーキングスコアを向上させます。全てのスピーキング問題に対応！',
          applicationSubCategory: 'AI教育ツール',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'サブスクリプション',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          featureList: [
            '「聞いてから話す」「写真について話す」「読んでから話す」「スピーキングサンプル」に対応',
            'AI採点、AI評価結果、講師ガイダンス',
            '正確な評価スコア、詳細な評価レポート',
            '結果は1～5分以内に利用可能',
            '30万件以上のレポート採点実績',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET AIチューター',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AIチューター',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'インタラクティブなチャットを通じて受験者の試験準備を支援する、プロフェッショナルなDuolingo English Test AIチューター',
          offers: {
            '@type': 'Offer',
            category: 'サブスクリプション',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          featureList: [
            'DET対策に特化したAIチューターとのインタラクティブチャット',
            '複数のAIモデルオプション',
            '標準チャットモードとDETチューター専用モード',
          ],
        },
        {
          '@type': 'Course',
          name: 'Duolingo English Test コース',
          description: '詳細なガイドでDETのスピーキングとライティングセクションの深い理解を深めます',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'オンライン',
            offers: {
              '@type': 'Offer',
              category: '無料コース',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: ['包括的な習熟を達成', 'ESL専門家から学ぶ', '最新情報を得て一歩先へ', '全コース無料'],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice プラットフォーム',
          description:
            '18,000以上の問題、40,000回以上の模擬テスト実施、AI添削を備えたDuolingo English Test対策プラットフォーム。世界中の40万人以上のユーザーから信頼されています。',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/ja/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: '総ユーザー数',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '練習問題数',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '模擬テスト実施回数',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'プリスカ・ラニ・ワヒョハナ',
              },
              reviewBody:
                'このDET練習プラットフォームを数週間利用していますが、練習問題の質の高さに非常に感銘を受けています。',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'ガナット・サード',
              },
              reviewBody:
                'Duolingo English testの準備をしている者として、このプラットフォームで模範試験にアクセスできることに感謝しています。',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/ja/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Duolingo English Test 練習',
            item: 'https://www.detpractice.com/ja/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET 完全模擬テスト',
            item: 'https://www.detpractice.com/ja/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET ライティング AI添削',
            item: 'https://www.detpractice.com/ja/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET スピーキング AI添削',
            item: 'https://www.detpractice.com/ja/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'なぜDET Practiceを選ぶのか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practiceは、18,000以上の練習問題を備えた最大の質問バンク、40,000回以上実施された本番さながらの模擬テスト、30万件以上のレポート採点実績を持つ正確なAI評価、そしてESL専門家による無料のDETコースを提供しています。',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: '高得点への道を始めよう',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: '利用可能な言語',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  ko: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - 듀오링고 영어 시험 에이스 되기',
      description:
        '18,000개 이상의 연습 문제, 40,000개 이상의 모의고사, 작문 및 말하기 AI 첨삭 기능을 갖춘 올인원 듀오링고 영어 시험 학습 플랫폼입니다.',
      url: 'https://www.detpractice.com/ko/',
      inLanguage: 'ko',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: '전 세계 400,000명 이상의 사용자가 듀오링고 영어 시험 준비를 위해 신뢰합니다.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: '당사 제품은 Duolingo, Inc.와 아무런 관련이 없습니다.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET 문제 은행',
          applicationCategory: 'EducationalApplication',
          description: '가장 큰 문제 은행 18,000개 이상의 연습 문제. 매일 지속적으로 업데이트됩니다.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '구독',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          featureList: [
            '18,000개 이상의 연습 문제',
            '매일 지속적으로 업데이트',
            '고득점 답안 및 상세 해설 제공',
            '소리 내어 읽기(Read Aloud) AI 채점',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET 전체 길이 모의고사',
          applicationCategory: 'EducationalApplication',
          description:
            '가장 강력한 모의고사, 실제 DET 시험과 유사합니다. 실제 DET처럼 느껴집니다. 40,000개 이상의 모의고사 실시.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '구독',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          featureList: [
            '가장 강력한 모의고사, 실제 DET 시험과 유사',
            '적응형 시험 및 AI 채점',
            '정확한 평가 점수, 상세 평가 보고서',
            '결과는 1~30분 이내에 확인 가능',
            '전체 길이 모의고사',
            '실제 DET 시험과 유사',
            '90일 이내 언제든지 응시 가능',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET 작문 AI 첨삭',
          applicationCategory: 'EducationalApplication',
          description:
            '정확한 점수와 상세 보고서를 받아 작문 실력을 더 빠르게 향상시키세요. 모든 작문 문제를 지원합니다!',
          applicationSubCategory: 'AI 교육 도구',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '구독',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          featureList: [
            "'사진에 대해 쓰기', '상호작용 작문', '작문 샘플' 지원",
            'AI 채점, AI 첨삭, 교사 지도',
            '정확한 평가 점수, 상세 평가 보고서',
            '결과는 1~5분 이내에 확인 가능',
            '300,000개 이상의 보고서 채점 완료',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET 말하기 AI 첨삭',
          applicationCategory: 'EducationalApplication',
          description:
            '강력한 AI를 활용하여 목표 지향적으로 DET 말하기 점수를 향상시키세요. 모든 말하기 문제를 지원합니다!',
          applicationSubCategory: 'AI 교육 도구',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '구독',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          featureList: [
            "'듣고 말하기', '사진에 대해 말하기', '읽고 말하기', '말하기 샘플' 지원",
            'AI 채점, AI 평가 결과, 교사 지도',
            '정확한 평가 점수, 상세 평가 보고서',
            '결과는 1~5분 이내에 확인 가능',
            '300,000개 이상의 보고서 채점 완료',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET AI 튜터',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AI 튜터',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description: '대화형 채팅을 통해 응시자의 시험 준비를 돕는 전문적인 듀오링고 영어 시험 AI 튜터',
          offers: {
            '@type': 'Offer',
            category: '구독',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          featureList: [
            'DET 준비에 특화된 AI 튜터와의 대화형 채팅',
            '다중 AI 모델 옵션',
            '표준 채팅 모드 및 DET 튜터 전용 모드',
          ],
        },
        {
          '@type': 'Course',
          name: '듀오링고 영어 시험 코스',
          description: '상세 가이드를 통해 DET 말하기 및 작문 섹션에 대한 깊이 있는 이해를 발전시키세요',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: '온라인',
            offers: {
              '@type': 'Offer',
              category: '무료 코스',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            '포괄적인 숙달 달성',
            'ESL 전문가로부터 배우기',
            '최신 정보를 파악하고 앞서 나가기',
            '모든 코스는 무료',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice 플랫폼',
          description:
            '18,000개 이상의 문제, 40,000개 이상의 모의고사 실시, AI 첨삭 기능을 갖춘 듀오링고 영어 시험 준비 플랫폼. 전 세계 400,000명 이상의 사용자가 신뢰합니다.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/ko/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: '총 사용자 수',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '연습 문제 수',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '실시된 모의고사 수',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: '프리스카 라니 와효하나',
              },
              reviewBody:
                '저는 이 DET 연습 플랫폼을 몇 주 동안 사용해 왔으며, 연습 문제의 질에 깊은 인상을 받았습니다.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: '가낫 사드',
              },
              reviewBody:
                '듀오링고 영어 시험을 준비하는 사람으로서, 이 플랫폼에서 모범 시험에 접근할 수 있다는 점에 감사합니다.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/ko/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: '듀오링고 영어 시험 연습',
            item: 'https://www.detpractice.com/ko/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET 전체 길이 모의고사',
            item: 'https://www.detpractice.com/ko/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET 작문 AI 첨삭',
            item: 'https://www.detpractice.com/ko/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET 말하기 AI 첨삭',
            item: 'https://www.detpractice.com/ko/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '왜 DET Practice를 선택해야 하나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice는 18,000개 이상의 연습 문제가 있는 가장 큰 문제 은행, 40,000회 이상 실시된 실제 DET와 같은 모의고사, 300,000개 이상의 보고서가 채점된 정확한 AI 평가, 그리고 ESL 전문가들이 제공하는 무료 DET 코스를 제공합니다.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: '최고 점수를 향한 여정 시작하기',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: '사용 가능한 언어',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  pt: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Domine o Duolingo English Test',
      description:
        'Plataforma completa de aprendizado do Duolingo English Test com mais de 18.000 questões práticas, mais de 40.000 testes simulados realizados, correção por IA para escrita e fala.',
      url: 'https://www.detpractice.com/pt/',
      inLanguage: 'pt',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          'Aprovado por mais de 400.000 usuários em todo o mundo para a preparação do Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Nosso produto não tem conexão com a Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Banco de Questões DET',
          applicationCategory: 'EducationalApplication',
          description:
            'O Maior Banco de Questões com mais de 18.000 Questões Práticas. Atualizado continuamente todos os dias.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'assinatura',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          featureList: [
            'Mais de 18.000 Questões Práticas',
            'Atualizado continuamente todos os dias',
            'Fornece respostas de alta pontuação e explicações detalhadas',
            'Pontuação por IA para Ler em Voz Alta (Read Aloud)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Teste Simulado Completo DET',
          applicationCategory: 'EducationalApplication',
          description:
            'O Teste Simulado Mais Poderoso, Próximo ao Exame DET Real. Parece o DET Real. Mais de 40.000 testes simulados realizados.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'assinatura',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          featureList: [
            'O Teste Simulado Mais Poderoso, Próximo ao Exame DET Real',
            'Exames Adaptativos e Pontuação por IA',
            'Pontuações de Avaliação Precisas, Relatório de Avaliação Detalhado',
            'Resultados disponíveis em 1-30 minutos',
            'Testes simulados completos',
            'Semelhante ao teste DET real',
            'Faça o teste a qualquer momento dentro de 90 dias',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correção de Escrita por IA DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Obtenha pontuações precisas e relatórios detalhados para melhorar suas habilidades de escrita mais rapidamente. Suporta todas as questões de escrita!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'assinatura',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          featureList: [
            "Suporta 'Escrever sobre a Foto', 'Escrita Interativa', 'Amostra de Escrita'",
            'Pontuação por IA, Correção por IA, Orientação do Professor',
            'Pontuações de Avaliação Precisas, Relatório de Avaliação Detalhado',
            'Resultados disponíveis em 1-5 minutos',
            'Mais de 300.000 relatórios pontuados',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Correção de Fala por IA DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Aproveite a poderosa IA para melhorar sua pontuação de fala do DET de forma direcionada. Suporta todas as questões de fala!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'assinatura',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          featureList: [
            "Suporta 'Ouvir, Depois Falar', 'Falar sobre a Foto', 'Ler, Depois Falar', 'Amostra de Fala'",
            'Pontuação por IA, Resultados da Avaliação por IA, Orientação do Professor',
            'Pontuações de Avaliação Precisas, Relatório de Avaliação Detalhado',
            'Resultados disponíveis em 1-5 minutos',
            'Mais de 300.000 relatórios pontuados',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Tutor de IA DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Um tutor profissional de IA para o Duolingo English Test que ajuda os candidatos a se prepararem para o exame através de chat interativo.',
          offers: {
            '@type': 'Offer',
            category: 'assinatura',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          featureList: [
            'Chat interativo com tutor de IA especializado na preparação DET',
            'Múltiplas opções de modelos de IA',
            'Modo de chat padrão e modo específico Tutor DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Curso Duolingo English Test',
          description:
            'Desenvolva uma compreensão aprofundada das seções de fala e escrita do DET com nossos guias detalhados.',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'curso gratuito',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Alcance a Maestria Abrangente',
            'Aprenda com Especialistas em ESL',
            'Mantenha-se Informado e à Frente',
            'Todos os cursos são gratuitos',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Plataforma DET Practice',
          description:
            'Plataforma de preparação para o Duolingo English Test com mais de 18.000 questões, mais de 40.000 testes simulados realizados e correção por IA. Aprovado por mais de 400.000 usuários em todo o mundo.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/pt/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Total de Usuários',
              value: '400.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Questões Práticas',
              value: '18.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Testes Simulados Realizados',
              value: '40.000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'Tenho usado esta plataforma de prática DET há algumas semanas e estou completamente impressionada com a qualidade das questões práticas.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'Como alguém que está se preparando para o teste Duolingo English, aprecio ter acesso a exames modelo nesta plataforma.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/pt/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Prática Duolingo English Test',
            item: 'https://www.detpractice.com/pt/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Teste Simulado Completo DET',
            item: 'https://www.detpractice.com/pt/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Correção de Escrita por IA DET',
            item: 'https://www.detpractice.com/pt/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Correção de Fala por IA DET',
            item: 'https://www.detpractice.com/pt/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Por que escolher o DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O DET Practice oferece o maior banco de questões com mais de 18.000 questões práticas, testes simulados autênticos que parecem o DET real com mais de 40.000 testes realizados, avaliação precisa por IA com mais de 300.000 relatórios pontuados e cursos DET gratuitos de especialistas em ESL.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Comece Seu Caminho para as Melhores Pontuações',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Idiomas Disponíveis',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  ru: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Сдайте Duolingo English Test на отлично',
      description:
        'Универсальная платформа для изучения Duolingo English Test с более чем 18 000 практических вопросов, 40 000 пробных тестов, проверкой письменной и устной речи с помощью ИИ.',
      url: 'https://www.detpractice.com/ru/',
      inLanguage: 'ru',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: 'Более 400 000 пользователей по всему миру доверяют нам подготовку к Duolingo English Test.',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Наш продукт не имеет никакого отношения к Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'Банк вопросов DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Самый большой банк вопросов: более 18 000 практических заданий. Постоянно обновляется каждый день.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'подписка',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          featureList: [
            '18 000+ практических вопросов',
            'Постоянно обновляется каждый день',
            'Предоставляет высокооцененные ответы и подробные объяснения',
            'Оценка ИИ для задания Read Aloud (Чтение вслух)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Полный пробный тест DET',
          applicationCategory: 'EducationalApplication',
          description:
            'Самый мощный пробный тест, близкий к реальному экзамену DET. Ощущается как настоящий DET. Пройдено более 40 000 пробных тестов.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'подписка',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          featureList: [
            'Самый мощный пробный тест, близкий к реальному экзамену DET',
            'Адаптивные экзамены и оценка ИИ',
            'Точные оценочные баллы, подробный отчет об оценке',
            'Результаты будут доступны в течение 1-30 минут',
            'Полные пробные тесты',
            'Похож на реальный тест DET',
            'Тестирование в любое время в течение 90 дней',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Проверка письменной речи DET с помощью ИИ',
          applicationCategory: 'EducationalApplication',
          description:
            'Получайте точные оценки и подробные отчеты, чтобы быстрее улучшить свои навыки письма. Поддержка всех письменных заданий!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'подписка',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          featureList: [
            "Поддержка заданий 'Опишите фото', 'Интерактивное письмо', 'Образец письменной речи'",
            'Оценка ИИ, Коррекция ИИ, Руководство преподавателя',
            'Точные оценочные баллы, подробный отчет об оценке',
            'Результаты будут доступны в течение 1-5 минут',
            'Оценено более 300 000 отчетов',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Проверка устной речи DET с помощью ИИ',
          applicationCategory: 'EducationalApplication',
          description:
            'Используйте мощный ИИ для целенаправленного улучшения вашего балла за устную речь в DET. Поддержка всех устных заданий!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'подписка',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          featureList: [
            "Поддержка заданий 'Прослушайте, затем говорите', 'Расскажите о фото', 'Прочитайте, затем говорите', 'Образец устной речи'",
            'Оценка ИИ, Результаты оценки ИИ, Руководство преподавателя',
            'Точные оценочные баллы, подробный отчет об оценке',
            'Результаты будут доступны в течение 1-5 минут',
            'Оценено более 300 000 отчетов',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'ИИ-репетитор DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Профессиональный ИИ-репетитор по Duolingo English Test, который помогает сдающим подготовиться к экзамену с помощью интерактивного чата',
          offers: {
            '@type': 'Offer',
            category: 'подписка',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          featureList: [
            'Интерактивный чат с ИИ-репетитором, специализирующимся на подготовке к DET',
            'Несколько вариантов моделей ИИ',
            'Стандартный режим чата и специальный режим репетитора DET',
          ],
        },
        {
          '@type': 'Course',
          name: 'Курс по Duolingo English Test',
          description:
            'Развивайте глубокое понимание разделов устной и письменной речи DET с нашими подробными руководствами',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'бесплатный курс',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Достигните всестороннего мастерства',
            'Учитесь у экспертов ESL',
            'Будьте в курсе и впереди',
            'Все курсы бесплатны',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Платформа DET Practice',
          description:
            'Платформа для подготовки к Duolingo English Test с 18 000+ вопросов, 40 000+ пройденных пробных тестов и проверкой ИИ. Доверяют 400 000+ пользователей по всему миру.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/ru/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Всего пользователей',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Практических вопросов',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Пройдено пробных тестов',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Приска Рани Вайохана',
              },
              reviewBody:
                'Я пользуюсь этой платформой для практики DET уже несколько недель и полностью впечатлена качеством практических вопросов.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ганат Саад',
              },
              reviewBody:
                'Как человек, готовящийся к тесту Duolingo English, я ценю доступ к образцовым экзаменам на этой платформе.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/ru/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Практика Duolingo English Test',
            item: 'https://www.detpractice.com/ru/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Полный пробный тест DET',
            item: 'https://www.detpractice.com/ru/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Проверка письменной речи DET с помощью ИИ',
            item: 'https://www.detpractice.com/ru/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Проверка устной речи DET с помощью ИИ',
            item: 'https://www.detpractice.com/ru/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Почему стоит выбрать DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice предлагает самый большой банк вопросов с 18 000+ практическими заданиями, аутентичные пробные тесты, которые ощущаются как настоящий DET (пройдено 40 000+ тестов), точную оценку ИИ (оценено более 300 000+ отчетов) и бесплатные курсы DET от экспертов ESL.',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'Начните свой путь к высшим баллам',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Доступные языки',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  th: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - พิชิตข้อสอบ Duolingo English Test',
      description:
        'แพลตฟอร์มการเรียนรู้ Duolingo English Test แบบครบวงจร พร้อมคำถามฝึกหัดกว่า 18,000 ข้อ, แบบทดสอบจำลองกว่า 40,000 ครั้ง, การตรวจแก้การเขียนและการพูดด้วย AI',
      url: 'https://www.detpractice.com/th/',
      inLanguage: 'th',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: 'ได้รับความไว้วางใจจากผู้ใช้กว่า 400,000 คนทั่วโลกสำหรับการเตรียมสอบ Duolingo English Test',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'ผลิตภัณฑ์ของเราไม่มีส่วนเกี่ยวข้องกับ Duolingo, Inc.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'คลังข้อสอบ DET',
          applicationCategory: 'EducationalApplication',
          description: 'คลังคำถามที่ใหญ่ที่สุด มีคำถามฝึกหัดกว่า 18,000 ข้อ อัปเดตอย่างต่อเนื่องทุกวัน',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'การสมัครสมาชิก',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/th/pricing',
          },
          featureList: [
            'คำถามฝึกหัดกว่า 18,000 ข้อ',
            'อัปเดตอย่างต่อเนื่องทุกวัน',
            'ให้คำตอบคะแนนสูงและคำอธิบายโดยละเอียด',
            'การให้คะแนนด้วย AI สำหรับ Read Aloud (อ่านออกเสียง)',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'แบบทดสอบจำลอง DET ฉบับเต็ม',
          applicationCategory: 'EducationalApplication',
          description:
            'แบบทดสอบจำลองที่ทรงพลังที่สุด ใกล้เคียงกับข้อสอบ DET จริง รู้สึกเหมือนสอบ DET จริง มีการทำแบบทดสอบจำลองกว่า 40,000 ครั้ง',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'การสมัครสมาชิก',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/th/pricing',
          },
          featureList: [
            'แบบทดสอบจำลองที่ทรงพลังที่สุด ใกล้เคียงกับข้อสอบ DET จริง',
            'ข้อสอบแบบปรับระดับ (Adaptive) และการให้คะแนนด้วย AI',
            'คะแนนประเมินที่แม่นยำ, รายงานการประเมินโดยละเอียด',
            'ผลลัพธ์จะพร้อมใช้งานภายใน 1-30 นาที',
            'แบบทดสอบจำลองฉบับเต็ม',
            'คล้ายกับข้อสอบ DET จริง',
            'ทดสอบได้ตลอดเวลาภายใน 90 วัน',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'การตรวจแก้การเขียน DET ด้วย AI',
          applicationCategory: 'EducationalApplication',
          description:
            'รับคะแนนที่แม่นยำและรายงานโดยละเอียดเพื่อให้คุณพัฒนาทักษะการเขียนได้เร็วยิ่งขึ้น รองรับคำถามการเขียนทุกประเภท!',
          applicationSubCategory: 'เครื่องมือการศึกษา AI',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'การสมัครสมาชิก',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/th/pricing',
          },
          featureList: [
            "รองรับ 'เขียนบรรยายภาพ', 'การเขียนเชิงโต้ตอบ', 'ตัวอย่างงานเขียน'",
            'การให้คะแนนด้วย AI, การตรวจแก้ด้วย AI, คำแนะนำจากครู',
            'คะแนนประเมินที่แม่นยำ, รายงานการประเมินโดยละเอียด',
            'ผลลัพธ์จะพร้อมใช้งานภายใน 1-5 นาที',
            'มีการให้คะแนนรายงานแล้วกว่า 300,000 ฉบับ',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'การตรวจแก้การพูด DET ด้วย AI',
          applicationCategory: 'EducationalApplication',
          description:
            'ใช้ประโยชน์จาก AI อันทรงพลังเพื่อปรับปรุงคะแนนการพูด DET ของคุณอย่างตรงเป้าหมาย รองรับคำถามการพูดทุกประเภท!',
          applicationSubCategory: 'เครื่องมือการศึกษา AI',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'การสมัครสมาชิก',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/th/pricing',
          },
          featureList: [
            "รองรับ 'ฟังแล้วพูด', 'พูดบรรยายภาพ', 'อ่านแล้วพูด', 'ตัวอย่างการพูด'",
            'การให้คะแนนด้วย AI, ผลการประเมินด้วย AI, คำแนะนำจากครู',
            'คะแนนประเมินที่แม่นยำ, รายงานการประเมินโดยละเอียด',
            'ผลลัพธ์จะพร้อมใช้งานภายใน 1-5 นาที',
            'มีการให้คะแนนรายงานแล้วกว่า 300,000 ฉบับ',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'ติวเตอร์ AI DET',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'ติวเตอร์ AI',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description: 'ติวเตอร์ AI มืออาชีพสำหรับ Duolingo English Test ที่ช่วยผู้สอบเตรียมตัวผ่านการแชทเชิงโต้ตอบ',
          offers: {
            '@type': 'Offer',
            category: 'การสมัครสมาชิก',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/th/pricing',
          },
          featureList: [
            'แชทเชิงโต้ตอบกับติวเตอร์ AI ที่เชี่ยวชาญในการเตรียมสอบ DET',
            'ตัวเลือกโมเดล AI หลายแบบ',
            'โหมดแชทมาตรฐานและโหมดติวเตอร์ DET โดยเฉพาะ',
          ],
        },
        {
          '@type': 'Course',
          name: 'คอร์สเรียน Duolingo English Test',
          description: 'พัฒนาความเข้าใจเชิงลึกเกี่ยวกับส่วนการพูดและการเขียนของ DET ด้วยคำแนะนำโดยละเอียดของเรา',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'คอร์สฟรี',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'บรรลุความเชี่ยวชาญที่ครอบคลุม',
            'เรียนรู้จากผู้เชี่ยวชาญ ESL',
            'รับทราบข้อมูลและก้าวนำหน้า',
            'ทุกคอร์สเรียนฟรี',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'แพลตฟอร์ม DET Practice',
          description:
            'แพลตฟอร์มเตรียมสอบ Duolingo English Test พร้อมคำถามกว่า 18,000 ข้อ, การทำแบบทดสอบจำลองกว่า 40,000 ครั้ง และการตรวจแก้ด้วย AI ได้รับความไว้วางใจจากผู้ใช้กว่า 400,000 คนทั่วโลก',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/th/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'ผู้ใช้ทั้งหมด',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'คำถามฝึกหัด',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'จำนวนครั้งที่ทำแบบทดสอบจำลอง',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody: 'ฉันใช้แพลตฟอร์มฝึกหัด DET นี้มาสองสามสัปดาห์แล้ว และฉันประทับใจในคุณภาพของคำถามฝึกหัดมาก',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'ในฐานะคนที่กำลังเตรียมตัวสอบ Duolingo English ฉันรู้สึกขอบคุณที่สามารถเข้าถึงข้อสอบตัวอย่างบนแพลตฟอร์มนี้ได้',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/th/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'ฝึกฝน Duolingo English Test',
            item: 'https://www.detpractice.com/th/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'แบบทดสอบจำลอง DET ฉบับเต็ม',
            item: 'https://www.detpractice.com/th/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'การตรวจแก้การเขียน DET ด้วย AI',
            item: 'https://www.detpractice.com/th/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'การตรวจแก้การพูด DET ด้วย AI',
            item: 'https://www.detpractice.com/th/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ทำไมต้องเลือก DET Practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice นำเสนอคลังคำถามที่ใหญ่ที่สุดพร้อมคำถามฝึกหัดกว่า 18,000 ข้อ, แบบทดสอบจำลองที่เหมือนจริงซึ่งให้ความรู้สึกเหมือนสอบ DET จริงโดยมีการทำไปแล้วกว่า 40,000 ครั้ง, การประเมินด้วย AI ที่แม่นยำพร้อมรายงานที่ได้รับการให้คะแนนแล้วกว่า 300,000 ฉบับ และคอร์สเรียน DET ฟรีจากผู้เชี่ยวชาญ ESL',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'เริ่มต้นเส้นทางสู่คะแนนสูงสุดของคุณ',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'ภาษาที่ให้บริการ',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  tr: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - Duolingo İngilizce Testinde Uzmanlaşın',
      description:
        "18.000'den fazla pratik soru, 40.000'den fazla deneme sınavı, yazma ve konuşma için Yapay Zeka düzeltmesi sunan hepsi bir arada Duolingo İngilizce Testi Öğrenme Platformu.",
      url: 'https://www.detpractice.com/tr/',
      inLanguage: 'tr',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description:
          "Duolingo İngilizce Testi hazırlığı için dünya çapında 400.000'den fazla kullanıcı tarafından güvenilmektedir.",
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: 'Ürünümüzün Duolingo, Inc. ile hiçbir bağlantısı yoktur.',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET Soru Bankası',
          applicationCategory: 'EducationalApplication',
          description: 'En Geniş Soru Bankası 18.000+ Pratik Sorusu. Her gün sürekli güncellenir.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonelik',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          featureList: [
            '18.000+ Pratik Sorusu',
            'Her gün sürekli güncellenir',
            'Yüksek puanlı cevaplar ve detaylı açıklamalar sunar',
            'Sesli Okuma (Read Aloud) için Yapay Zeka Puanlaması',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Tam Uzunlukta Deneme Sınavı',
          applicationCategory: 'EducationalApplication',
          description:
            'En Güçlü Deneme Sınavı, Gerçek DET Sınavına Yakın. Gerçek DET Gibi Hissettirir. 40.000+ deneme sınavı yapıldı.',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonelik',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          featureList: [
            'En Güçlü Deneme Sınavı, Gerçek DET Sınavına Yakın',
            'Adaptif Sınavlar ve Yapay Zeka Puanlaması',
            'Doğru Değerlendirme Skorları, Detaylı Değerlendirme Raporu',
            'Sonuçlar 1-30 dakika içinde mevcut olacak',
            'Tam uzunlukta deneme sınavları',
            'Gerçek DET sınavına benzer',
            '90 gün içinde istediğiniz zaman test yapın',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Yazma Yapay Zeka Düzeltmesi',
          applicationCategory: 'EducationalApplication',
          description:
            'Yazma becerilerinizi daha hızlı geliştirebilmeniz için doğru puanlar ve detaylı raporlar alın. Tüm yazma sorularını destekler!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonelik',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          featureList: [
            "'Fotoğraf Hakkında Yaz', 'Etkileşimli Yazma', 'Yazma Örneği' desteği",
            'Yapay Zeka Puanlaması, Yapay Zeka Düzeltmesi, Öğretmen Rehberliği',
            'Doğru Değerlendirme Skorları, Detaylı Değerlendirme Raporu',
            'Sonuçlar 1-5 dakika içinde mevcut olacak',
            "300.000'den fazla rapor puanlandı",
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Konuşma Yapay Zeka Düzeltmesi',
          applicationCategory: 'EducationalApplication',
          description:
            'DET konuşma puanınızı hedefe yönelik bir şekilde iyileştirmek için güçlü Yapay Zekadan yararlanın. Tüm konuşma sorularını destekler!',
          applicationSubCategory: 'AIEducationalTool',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: 'abonelik',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          featureList: [
            "'Dinle, Sonra Konuş', 'Fotoğraf Hakkında Konuş', 'Oku, Sonra Konuş', 'Konuşma Örneği' desteği",
            'Yapay Zeka Puanlaması, Yapay Zeka Değerlendirme Sonuçları, Öğretmen Rehberliği',
            'Doğru Değerlendirme Skorları, Detaylı Değerlendirme Raporu',
            'Sonuçlar 1-5 dakika içinde mevcut olacak',
            "300.000'den fazla rapor puanlandı",
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Yapay Zeka Eğitmeni',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AITutor',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description:
            'Etkileşimli sohbet yoluyla sınav katılımcılarının sınavlarına hazırlanmalarına yardımcı olan profesyonel bir Duolingo İngilizce Testi Yapay Zeka Eğitmeni',
          offers: {
            '@type': 'Offer',
            category: 'abonelik',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          featureList: [
            'DET hazırlığı konusunda uzmanlaşmış Yapay Zeka eğitmeni ile etkileşimli sohbet',
            'Çoklu Yapay Zeka model seçenekleri',
            'Standart sohbet modu ve DET Eğitmeni özel modu',
          ],
        },
        {
          '@type': 'Course',
          name: 'Duolingo İngilizce Testi Kursu',
          description: 'Detaylı rehberlerimizle DET konuşma ve yazma bölümlerini derinlemesine anlayın',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: 'ücretsiz kurs',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: [
            'Kapsamlı Ustalığa Ulaşın',
            'ESL Uzmanlarından Öğrenin',
            'Bilgili Kalın ve Önde Olun',
            'Tüm kurslar ücretsizdir',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice Platformu',
          description:
            '18.000+ soru, 40.000+ yapılmış deneme sınavı ve Yapay Zeka düzeltmesi içeren Duolingo İngilizce Testi hazırlık platformu. Dünya çapında 400.000+ kullanıcı tarafından güvenilmektedir.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/tr/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Toplam Kullanıcı',
              value: '400.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Pratik Soruları',
              value: '18.000+',
            },
            {
              '@type': 'PropertyValue',
              name: 'Yapılan Deneme Sınavları',
              value: '40.000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody:
                'Bu DET pratik platformunu birkaç haftadır kullanıyorum ve pratik sorularının kalitesinden çok etkilendim.',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody:
                'Duolingo İngilizce testine hazırlanan biri olarak, bu platformdaki model sınavlara erişebilmeyi takdir ediyorum.',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/tr/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: 'Duolingo İngilizce Testi Pratiği',
            item: 'https://www.detpractice.com/tr/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET Tam Uzunlukta Deneme Sınavı',
            item: 'https://www.detpractice.com/tr/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET Yazma Yapay Zeka Düzeltmesi',
            item: 'https://www.detpractice.com/tr/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET Konuşma Yapay Zeka Düzeltmesi',
            item: 'https://www.detpractice.com/tr/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Neden DET Practice'i Seçmelisiniz?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "DET Practice, 18.000'den fazla pratik soru içeren en geniş soru bankasını, 40.000'den fazla kez yapılmış gerçek DET gibi hissettiren otantik deneme sınavlarını, 300.000'den fazla raporun puanlandığı doğru Yapay Zeka değerlendirmesini ve ESL uzmanlarından ücretsiz DET kurslarını sunar.",
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: 'En Yüksek Puanlara Giden Yolunuza Başlayın',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: 'Mevcut Diller',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
  zh: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'DET Practice - 轻松拿下多邻国英语测试',
      description: '集18,000多道练习题、DET模拟测试、DET写作和口语AI批改于一体的一站式多邻国英语测试学习平台。',
      url: 'https://www.detpractice.com/zh/',
      inLanguage: 'zh',
      publisher: {
        '@type': 'Organization',
        name: 'DET Practice',
        description: '深受全球40多万用户信赖的多邻国英语测试备考平台。',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.detpractice.com/logo.png',
        },
        disclaimer: '我们的产品与多邻国公司（Duolingo, Inc.）没有任何关联。',
      },
      availableLanguage: ['en', 'id', 'ja', 'ko', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh', 'pt'],
      hasPart: [
        {
          '@type': 'SoftwareApplication',
          name: 'DET题库',
          applicationCategory: 'EducationalApplication',
          description: '最大题库，包含18,000多道练习题。每天持续更新。',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '750',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '订阅',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          featureList: ['18,000+ 练习题', '每天持续更新', '提供高分答案和详细解析', '朗读句子（Read Aloud）AI评分'],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET模拟测试',
          applicationCategory: 'EducationalApplication',
          description: '最强大的模拟测试，贴近真实DET考试。体验如临考场。用户已完成40,000多次模拟测试。',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '820',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '订阅',
            availability: 'https://schema.org/OnlineOnly',
            price: '4.99',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          featureList: [
            '最强大的模拟测试，贴近真实DET考试',
            '自适应考试和AI评分',
            '准确的评估分数，详细的评估报告',
            '结果将在1-30分钟内生成',
            '全长模拟测试',
            '类似真实的DET考试',
            '90天内随时可考',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET写作AI批改',
          applicationCategory: 'EducationalApplication',
          description: '获取准确的分数和详细的报告，助您更快提升DET写作技能。支持所有写作题型！',
          applicationSubCategory: 'AI教育工具',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '780',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '订阅',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          featureList: [
            '支持“看图写作”、“互动写作”、“写作样本”',
            'AI评分、AI批改、教师指导',
            '准确的评估分数，详细的评估报告',
            '结果将在1-5分钟内生成',
            '已评分报告超过300,000份',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET口语AI批改',
          applicationCategory: 'EducationalApplication',
          description: '利用强大的AI，有针对性地提升您的DET口语分数。支持所有口语题型！',
          applicationSubCategory: 'AI教育工具',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '760',
            bestRating: '5',
          },
          offers: {
            '@type': 'Offer',
            category: '订阅',
            availability: 'https://schema.org/OnlineOnly',
            price: '9.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          featureList: [
            '支持“听说题”、“看图说话”、“阅读说话”、“口语样本”',
            'AI评分、AI评估结果、教师指导',
            '准确的评估分数，详细的评估报告',
            '结果将在1-5分钟内生成',
            '已评分报告超过300,000份',
          ],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET AI辅导',
          applicationCategory: 'EducationalApplication',
          applicationSubCategory: 'AI辅导',
          operatingSystem: 'All',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '710',
            bestRating: '5',
          },
          description: '专业的多邻国英语测试AI辅导老师，通过互动聊天帮助考生备考。',
          offers: {
            '@type': 'Offer',
            category: '订阅',
            availability: 'https://schema.org/OnlineOnly',
            price: '19.9',
            priceCurrency: 'USD',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          featureList: ['与专注于DET备考的AI辅导老师进行互动聊天', '多种AI模型选项', '标准聊天模式和DET辅导专属模式'],
        },
        {
          '@type': 'Course',
          name: '多邻国英语测试课程',
          description: '通过我们的详细指南，深入理解DET全部题型，轻松高效备考。',
          provider: {
            '@type': 'Organization',
            name: 'DET Practice',
          },
          courseCode: 'DET-COURSE',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            offers: {
              '@type': 'Offer',
              category: '免费课程',
              availability: 'https://schema.org/InStock',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          featureList: ['实现全面掌握', '向ESL专家学习', '保持信息灵通并领先', '所有课程均免费'],
        },
        {
          '@type': 'SoftwareApplication',
          name: 'DET Practice 平台',
          description:
            '多邻国英语测试备考平台，拥有18,000多道题、完成40,000多次模拟测试和AI批改。深受全球40多万用户信赖。',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          image: 'https://www.detpractice.com/logo.png',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '4.99',
            highPrice: '39.9',
            priceCurrency: 'USD',
            offerCount: '4',
            url: 'https://www.detpractice.com/zh/pricing',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '850',
            bestRating: '5',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: '总用户数',
              value: '400,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '练习题数量',
              value: '18,000+',
            },
            {
              '@type': 'PropertyValue',
              name: '已完成模拟测试次数',
              value: '40,000+',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Priska Rani Wahyohana',
              },
              reviewBody: '我用这个DET练习平台几周了，对练习题的质量印象深刻。',
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Ganat Saad',
              },
              reviewBody: '作为一个正在准备多邻国英语测试的人，我很感激能在这个平台上接触到模拟考试。',
            },
          ],
        },
      ],
      mainContentOfPage: {
        '@type': 'WebPageElement',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.main-content'],
        },
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'DET Practice',
        url: 'https://www.detpractice.com/zh/',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
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
            name: '多邻国英语测试练习',
            item: 'https://www.detpractice.com/zh/practice',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'DET全真模拟测试',
            item: 'https://www.detpractice.com/zh/mock-exam',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'DET写作AI批改',
            item: 'https://www.detpractice.com/zh/writing-ai-correction',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'DET口语AI批改',
            item: 'https://www.detpractice.com/zh/speaking-ai-correction',
          },
        ],
      },
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '为什么选择 DET Practice？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DET Practice 提供拥有超过18,000道练习题的最大题库，体验真实的模拟测试，超过300,000份报告评分的精准AI评估，以及由ESL专家提供的免费DET课程。',
            },
          },
        ],
      },
      potentialAction: [
        {
          '@type': 'Action',
          name: '开启您的高分之路',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.detpractice.com/app',
          },
        },
        {
          '@type': 'ViewAction',
          name: '可用语言',
          target: [
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/',
              inLanguage: 'en',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/id/',
              inLanguage: 'id',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ja/',
              inLanguage: 'ja',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ko/',
              inLanguage: 'ko',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/ru/',
              inLanguage: 'ru',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/tr/',
              inLanguage: 'tr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/de/',
              inLanguage: 'de',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/es/',
              inLanguage: 'es',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/fr/',
              inLanguage: 'fr',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/it/',
              inLanguage: 'it',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/th/',
              inLanguage: 'th',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/zh/',
              inLanguage: 'zh',
            },
            {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.detpractice.com/pt/',
              inLanguage: 'pt',
            },
          ],
        },
      ],
    },
  ],
};
