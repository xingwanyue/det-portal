<script setup lang="ts">

const route = useRoute();
const localePath = useLocalePath();
useSeoMeta({
  title: () => 'Duolingo English Practice Test Enhanced by DETPractice',
  description: () =>
    'Take enhanced Duolingo English Practice Test with real-exam interface and instant scoring. Practice full-length DET tests with detailed analytics and personalized feedback. Join 10,000+ successful test-takers today.',
  keywords: () =>
    'duolingo english practice test, duolingo practice test, det practice test, duolingo test practice, det mock exam, duolingo english test preparation',
});
useHead({
  link: [
    { rel: 'canonical', href: () => `https://www.${domain}${localePath(route.path)}` },
    { rel: 'alternate', hreflang: 'en-GB', href: () => `https://www.${domain}${localePath(route.path)}` },
  ],
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Enhanced Duolingo English Practice Test</h1>
          <p>
            Take full-length Duolingo English Practice Tests just like the <strong>real DET</strong>. Get
            <strong>instant scores</strong> and <strong>detailed feedback</strong> to improve fast and perform your
            best.
          </p>
          <div class="hero-buttons">
            <NuxtLink href="/mock-exam">
              <button class="btn btn-primary">Mock Now</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2>Why Choose Our Enhanced DET Practice Test?</h2>

        <!-- 添加图片对比组件 -->
        <h3 class="mobile-comparison-title">Slide to compare Basic and Enhanced Reports</h3>
        <div class="comparison-container">
          <div class="title-left">Duolingo Practice Test Basic Report</div>
          <div class="image-compare">
            <div class="image-wrapper">
              <img src="/img/detpracticetest/basic-report.png" alt="Basic DET Score Report" class="image-before" />
              <img src="/img/detpracticetest/detailed-report.png" alt="Enhanced Analysis" class="image-after" />
            </div>
            <div class="slider-handle">
              <div class="slider-line"></div>
              <div class="slider-button">
                <span class="arrow-left">←</span>
                <span class="arrow-right">→</span>
              </div>
            </div>
          </div>
          <div class="title-right">Enhanced Analysis DET Mock Report</div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-users"></i>
            <h3>10K+ Users Approved</h3>
            <p>Join thousands who've hit their target DET scores with our proven practice platform.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-laptop"></i>
            <h3>Real Test Setting</h3>
            <p>Practice with an interface that matches the real DET — same question types, same time limits.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-chart-line"></i>
            <h3>Detailed Analytics</h3>
            <p>
              Get detailed performance reports and tailored study plans to target your weak points and improve faster.
            </p>
          </div>
          <div class="feature-card">
            <i class="fas fa-clock"></i>
            <h3>Practice Anytime</h3>
            <p>Take mock tests 24/7 with instant scoring. Pause and resume whenever you need.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Take a Practice Test</h3>
            <p>Complete a full-length mock test under real exam conditions.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Get Instant Results</h3>
            <p>Receive your score and detailed feedback within 5-30 minutes.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Review & Improve</h3>
            <p>Analyze your performance and focus on weak areas with our study plans.</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Track Progress</h3>
            <p>Monitor your improvement across multiple practice tests.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Score Comparison Section -->
    <section id="score-comparison" class="score-comparison">
      <div class="container">
        <h2>Score Comparisons: DET Practice Mock Test vs. Official DET</h2>
        <div class="table-container">
          <div class="score-grid">
            <div class="score-card">
              <div class="student-id">Student ID: 579752</div>
              <div class="test-pair">
                <div class="test-result">
                  <div class="test-type">Mock Exam</div>
                  <div class="test-date">July 25</div>
                  <div class="scores">
                    <div class="overall">Overall: 85</div>
                    <div class="detail-scores">
                      <span>S: 85</span>
                      <span>W: 75</span>
                      <span>R: 85</span>
                      <span>L: 85</span>
                    </div>
                  </div>
                </div>
                <div class="test-result">
                  <div class="test-type">DET</div>
                  <div class="test-date">July 25</div>
                  <div class="scores">
                    <div class="overall">Overall: 85</div>
                    <div class="detail-scores">
                      <span>S: 85</span>
                      <span>W: 75</span>
                      <span>R: 85</span>
                      <span>L: 85</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="difference negative">Same</div>
            </div>
            <div class="score-card">
              <div class="student-id">Student ID: 672318</div>
              <div class="test-pair">
                <div class="test-result">
                  <div class="test-type">Mock Exam</div>
                  <div class="test-date">July 20</div>
                  <div class="scores">
                    <div class="overall">Overall: 95</div>
                    <div class="detail-scores">
                      <span>S: 90</span>
                      <span>W: 95</span>
                      <span>R: 100</span>
                      <span>L: 95</span>
                    </div>
                  </div>
                </div>
                <div class="test-result">
                  <div class="test-type">DET</div>
                  <div class="test-date">July 20</div>
                  <div class="scores">
                    <div class="overall">Overall: 95</div>
                    <div class="detail-scores">
                      <span>S: 100</span>
                      <span>W: 95</span>
                      <span>R: 105</span>
                      <span>L: 85</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="difference negative">Same</div>
            </div>
            <div class="score-card">
              <div class="student-id">Student ID: 936586</div>
              <div class="test-pair">
                <div class="test-result">
                  <div class="test-type">Mock Exam</div>
                  <div class="test-date">July 7</div>
                  <div class="scores">
                    <div class="overall">Overall: 110</div>
                    <div class="detail-scores">
                      <span>S: 115</span>
                      <span>W: 110</span>
                      <span>R: 105</span>
                      <span>L: 105</span>
                    </div>
                  </div>
                </div>
                <div class="test-result">
                  <div class="test-type">DET</div>
                  <div class="test-date">July 11</div>
                  <div class="scores">
                    <div class="overall">Overall: 105</div>
                    <div class="detail-scores">
                      <span>S: 110</span>
                      <span>W: 110</span>
                      <span>R: 100</span>
                      <span>L: 105</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="difference negative">-5</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
      <div class="container">
        <h2>Pricing</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>1 Test</h3>
            <div class="original-price">$0.00</div>
            <div class="price">$4.99</div>
            <NuxtLink href="/pricing"><button class="btn btn-primary">Buy Now</button></NuxtLink>
          </div>
          <div class="pricing-card">
            <div class="save-badge">
              <span>Save<br />7%</span>
            </div>
            <h3>3 Tests</h3>
            <div class="original-price">$14.97</div>
            <div class="price">$13.99</div>
            <NuxtLink href="/pricing"><button class="btn btn-primary">Buy Now</button></NuxtLink>
          </div>
          <div class="pricing-card">
            <div class="save-badge">
              <span>Save<br />28%</span>
            </div>
            <h3>5 Tests</h3>
            <div class="original-price">$24.95</div>
            <div class="price">$17.99</div>
            <NuxtLink href="/pricing"><button class="btn btn-primary">Buy Now</button></NuxtLink>
          </div>
          <div class="pricing-card">
            <div class="save-badge">
              <span>Save<br />44%</span>
            </div>
            <h3>10 Tests</h3>
            <div class="original-price">$49.90</div>
            <div class="price">$27.99</div>
            <NuxtLink href="/pricing"> <button class="btn btn-primary">Buy Now</button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Reviews Section -->
    <section id="reviews" class="reviews">
      <div class="container">
        <h2>Student Reviews</h2>
        <div class="reviews-slider">
          <div class="reviews-track">
            <!-- Review Card 1 -->
            <div class="review-card">
              <div class="review-header">
                <div class="avatar">JW</div>
                <div class="reviewer-info">
                  <h4>Jin-Woo Park</h4>
                  <p class="country">South Korea</p>
                </div>
              </div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="review-text">
                "The practice tests were incredibly accurate. I scored 115 on my mock test and 120 on the actual DET.
                The speaking section practice really helped me improve my confidence."
              </p>
            </div>

            <!-- Review Card 2 -->
            <div class="review-card">
              <div class="review-header">
                <div class="avatar">MR</div>
                <div class="reviewer-info">
                  <h4>Maria Rodriguez</h4>
                  <p class="country">Colombia</p>
                </div>
              </div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="review-text">
                "The detailed feedback after each practice test helped me understand my weaknesses. I improved my
                writing score from 85 to 110 in just three weeks!"
              </p>
            </div>

            <!-- Review Card 3 -->
            <div class="review-card">
              <div class="review-header">
                <div class="avatar">AN</div>
                <div class="reviewer-info">
                  <h4>Anh Nguyen</h4>
                  <p class="country">Vietnam</p>
                </div>
              </div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <p class="review-text">
                "The platform's interface is very similar to the real DET. The timer and question types made me feel
                well-prepared when I took the actual test."
              </p>
            </div>

            <!-- Review Card 4 -->
            <div class="review-card">
              <div class="review-header">
                <div class="avatar">KT</div>
                <div class="reviewer-info">
                  <h4>Kenji Tanaka</h4>
                  <p class="country">Japan</p>
                </div>
              </div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="review-text">
                "The mock tests were incredibly helpful. My scores improved consistently with each practice, and I ended
                up scoring 125 on the actual DET - even higher than my last mock test!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA Section -->
    <section class="footer-cta">
      <div class="container">
        <div class="cta-content">
          <NuxtLink href="/mock-exam"><button class="btn btn-primary btn-large">Mock Now</button></NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <div class="faq-question">
              <h3>What is a Duolingo English Practice Test?</h3>
            </div>
            <div class="faq-answer">
              <p>
                A Duolingo English Practice Test simulates the official Duolingo English Test environment, providing
                realistic questions, time limits, and scoring formats. By completing a Duolingo English Practice Test,
                you can familiarize yourself with the exam's structure, build confidence, and identify areas for
                improvement.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <h3>How does a DET Practice Test differ from the official exam?</h3>
            </div>
            <div class="faq-answer">
              <p>
                A DET Practice Test (Duolingo English Test Practice) mirrors the official test format but is not
                administered by Duolingo. Instead, it offers a risk-free environment to sharpen your skills. With an
                enhanced det practice test, you gain insight into the test's question types, pacing, and scoring
                criteria before committing to the real Duolingo English Test. For more information, visit:
                <NuxtLink
                  href="https://prep.detpractice.com/free-premium-duolingo-english-practice-test/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Free vs. Premium Duolingo English Practice Test: Which Option Best Fits Your Needs?
                </NuxtLink>
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <h3>How can an enhanced Duolingo Practice Test help me improve my performance?</h3>
            </div>
            <div class="faq-answer">
              <p>
                An enhanced Duolingo practice test provides immediate feedback, highlighting your strengths and
                weaknesses. By repeatedly practicing, you can enhance vocabulary, refine pronunciation, and solidify
                grammar skills. Over time, consistent English Duolingo test practice sessions can significantly boost
                your overall score on the official exam.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <h3>What strategies can I learn through Duolingo English Test Practice sessions?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Engaging in Duolingo English Test practice helps you develop essential strategies: managing time
                effectively, handling unfamiliar vocabulary, and approaching complex reading or listening tasks. Through
                trial and error in a practice environment, you'll refine techniques that lead to better results on test
                day.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <h3>Can multiple English Duolingo Test Practice attempts improve my confidence?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Yes. Repeated English Duolingo test practice sessions help you grow more comfortable with the format,
                reduce test-day anxiety, and improve your accuracy. By observing your progress over multiple attempts,
                you can track improvements, identify persistent challenges, and focus on targeted learning.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <h3>How can I measure improvement through ongoing Duolingo English Test Practice?</h3>
            </div>
            <div class="faq-answer">
              <p>
                Our enhanced Duolingo practice test tools offer detailed score reports, analytics, and performance
                breakdowns. By reviewing these results after each Duolingo English practice test, you gain a clear
                understanding of how your proficiency evolves. This data-driven approach allows you to fine-tune your
                study plan and maximize your final exam outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
/* Reset and base styles */
:root {
  --primary-color: #f66442; /* 青碧绿，比Duolingo的绿色更偏青色 */
  --secondary-color: #ff9552; /* 明亮的黄色，比Duolingo更温暖 */
  --text-color: #1d1f1f; /* 深色文本 */
  --text-light: #4b4f4f; /* 浅色文本 */
  --background-color: #ffffff; /* 纯白背景 */
  --background-light: #f2fbf6; /* 非常浅的青绿色背景 */
  --gray-light: #f7f9f8; /* 带一点绿色的浅灰 */
  --gray-medium: #e8efec; /* 带一点绿色的中灰 */
  --border-radius: 12px;
  --spacing-unit: 1rem;
  --shadow-small: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-size-small: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-large: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 1.875rem;
  --font-size-3xl: 2.25rem;
  --font-size-4xl: 2.75rem;

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

/* Navigation */
.navbar {
  background: var(--background-color);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-small);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .logo-image {
    height: 32px;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

/* Buttons */
.btn {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  letter-spacing: var(--letter-spacing-wide);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #ff9552;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #ff9552;
  transform: translateY(-2px);
}

.btn-login {
  background-color: transparent;
  color: var(--text-color);
}

.btn-login:hover {
  color: var(--primary-color);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: var(--font-size-lg);
}

/* Hero Section */
.hero {
  background-color: var(--background-light);
  padding: 0;
  position: relative;
  overflow: hidden;
  min-height: 25vh;
  display: flex;
  align-items: center;
  margin-top: calc(40px + 2rem); /* 导航栏高度 (logo height + 2 * padding) */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 0; /* 增加一点padding来平衡上下空间 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
}

.hero h1 {
  color: var(--text-color);
  font-size: var(--font-size-3xl);
  line-height: 1.2;
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  text-align: center;
  margin: 0;
}

.hero p {
  color: var(--text-light);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  max-width: 90%;
  margin: 0 auto;
}

.hero-buttons {
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;
}

.hero-buttons .btn {
  padding: 0.75rem 2.5rem;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    margin-top: calc(32px + 2rem); /* 移动端logo更小 */
    min-height: auto;
  }

  .hero-content {
    padding: 2.5rem 0;
  }

  .hero h1 {
    font-size: var(--font-size-2xl);
  }

  .hero p {
    font-size: var(--font-size-base);
  }

  .hero-buttons .btn {
    padding: 0.75rem 2rem;
  }
}

/* Features Section */
.features {
  background-color: white;
  padding: 5rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
}

.feature-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-small);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

.feature-card i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  color: var(--text-color);
  font-size: clamp(1rem, 1.1vw, 1.25rem);
  margin: 0 0 1rem 0;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  min-height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  word-break: break-word;
  padding: 0 0.5rem;
}

.feature-card p {
  color: var(--text-light);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  width: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }
  .feature-card h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
  .feature-card h3 {
    font-size: 1.25rem;
  }
}

.feature-card h3 {
  color: var(--text-color);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
  min-height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  white-space: nowrap;
}

.feature-card p {
  font-size: var(--font-size-base);
  color: var(--text-light);
  line-height: var(--line-height-relaxed);
  margin: 0;
  padding: 0 0.5rem;
}

@media (max-width: 768px) {
  .feature-card h3 {
    min-height: auto;
    white-space: normal;
    font-size: var(--font-size-lg);
  }
}

/* How It Works Section */
.how-it-works {
  padding: 5rem 0;
  background-color: var(--background-light);
}

.how-it-works h2 {
  text-align: center;
  margin-bottom: 4rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}

.step-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-small);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  margin: 0 auto 1.5rem;
}

.step-card h3 {
  color: var(--text-color);
  font-size: var(--font-size-large);
  margin: 0 0 1rem 0;
  font-weight: var(--font-weight-bold);
}

.step-card p {
  color: var(--text-light);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin: 0;
}

.steps-grid::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: var(--primary-color);
  opacity: 0.3;
  z-index: 0;
}

@media (max-width: 1200px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .steps-grid::before {
    display: none;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .how-it-works {
    padding: 3rem 0;
  }

  .how-it-works h2 {
    margin-bottom: 2rem;
  }
}

/* Pricing Section */
.pricing {
  padding: 5rem 0;
  background-color: var(--background-light);
}

.pricing .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.pricing h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-color);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;
}

.pricing-card {
  background: var(--background-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-medium);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.pricing-card .save-badge {
  position: absolute;
  top: -20px;
  right: -20px;
  background: #ff5252;
  color: white;
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  box-shadow: var(--shadow-small);
  line-height: 1.2;
  padding: 0.5rem;
  clip-path: polygon(
    50% 0%,
    /* 顶部尖角 */ 65% 25%,
    85% 15%,
    75% 35%,
    100% 50%,
    /* 右侧尖角 */ 75% 65%,
    85% 85%,
    65% 75%,
    50% 100%,
    /* 底部尖角 */ 35% 75%,
    15% 85%,
    25% 65%,
    0% 50%,
    /* 左侧尖角 */ 25% 35%,
    15% 15%,
    35% 25%
  );
  transform: rotate(15deg);
  animation: pulse 2s infinite;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: rotate(15deg) scale(1);
  }
  50% {
    transform: rotate(15deg) scale(1.1);
  }
  100% {
    transform: rotate(15deg) scale(1);
  }
}

.pricing-card .save-badge span {
  transform: rotate(-15deg);
  display: block;
  text-align: center;
  font-size: 0.9rem;
  margin-top: -3px;
}

.pricing-card h3 {
  color: var(--text-color);
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  font-weight: var(--font-weight-semibold);
}

.pricing-card .original-price {
  color: var(--text-light);
  font-size: var(--font-size-lg);
  text-decoration: line-through;
  margin-bottom: 0.5rem;
}

.pricing-card .price {
  color: var(--primary-color);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
}

.pricing-card .btn {
  width: 100%;
  margin-top: auto;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
}

@media (max-width: 640px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* FAQ Section */
.faq {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.faq-item {
  background: #ffffff;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-question {
  margin-bottom: 15px;
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #f66442;
}

.faq-answer {
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
}

.faq-answer p {
  margin: 0;
  line-height: 1.6;
  color: #666;
}

.faq-answer a {
  color: #f66442;
  text-decoration: none;
}

.faq-answer a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .faq {
    padding: 3rem 0;
  }

  .faq h2 {
    margin-bottom: 2rem;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 1rem;
  }
}

/* Score Comparison Section */
.score-comparison {
  background-color: white;
  padding: 5rem 0;
}

.score-comparison h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 3rem;
  font-size: var(--font-size-lg);
}

.table-container {
  width: 100%;
  margin: 2rem 0;
}

.score-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}

.score-table th,
.score-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.score-table th {
  background-color: var(--background-light);
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
  white-space: nowrap;
}

.score-table tbody tr:nth-child(even) {
  background-color: var(--background-light);
}

.score-table tbody tr:hover {
  background-color: rgba(255, 107, 107, 0.05);
}

.difference {
  font-weight: var(--font-weight-semibold);
}

.difference.same {
  color: var(--secondary-color);
}

.difference.negative {
  color: #ff4757;
}

.difference.positive {
  color: #2ed573;
}

@media (max-width: 768px) {
  .table-container {
    margin: 1rem -1rem;
    border-radius: 0;
  }

  .score-table th,
  .score-table td {
    padding: 0.75rem 0.5rem;
    font-size: var(--font-size-small);
  }
}

/* 图片对比组件 */
.comparison-container {
  position: relative;
  max-width: 1400px;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
}

.title-left,
.title-right {
  flex: 0 0 280px;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--text-color);
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-small);
}

.title-left {
  border-left: 6px solid var(--secondary-color);
}

.title-right {
  border-right: 6px solid var(--secondary-color);
}

.image-compare {
  flex: 1;
  position: relative;
  max-width: 1000px;
  height: 600px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-small);
  overflow: hidden;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-before,
.image-after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
}

.image-after {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}

.slider-handle {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
  cursor: ew-resize;
  z-index: 5;
}

.slider-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: var(--primary-color);
  transform: translateX(-50%);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: var(--shadow-small);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  z-index: 10;
  transition: transform 0.3s ease;
}

.slider-button:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.1);
}

.slider-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.arrow-left,
.arrow-right {
  position: absolute;
  font-size: 1.2rem;
  color: white;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.arrow-left {
  left: 8px;
}

.arrow-right {
  right: 8px;
}

.slider-button:hover .arrow-left,
.slider-button:hover .arrow-right {
  opacity: 1;
}

.mobile-comparison-title {
  display: none;
  text-align: center;
  padding: 1rem;
  margin: 0;
  background: white;
  font-size: var(--font-size-lg);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--text-color);
  font-weight: var(--font-weight-medium);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .comparison-container {
    max-width: 90%;
    margin: 2rem auto;
  }

  .title-left,
  .title-right {
    flex: 0 0 200px;
    padding: 1rem;
    font-size: var(--font-size-base);
  }

  .image-compare {
    height: 500px;
  }
}

@media (max-width: 900px) {
  .comparison-container {
    max-width: 95%;
    padding: 0 1rem;
  }

  .title-left,
  .title-right {
    flex: 0 0 150px;
    font-size: var(--font-size-small);
  }

  .image-compare {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .mobile-comparison-title {
    display: block;
  }

  .comparison-container {
    max-width: 100%;
    padding: 0;
    margin: 1rem auto;
  }

  .title-left,
  .title-right {
    display: none; /* 在小屏幕上隐藏文字 */
  }

  .image-compare {
    width: 100vw; /* 让图片区域占满屏幕宽度 */
    height: 70vh; /* 使用视口高度的70% */
    border-radius: 0; /* 移除圆角 */
  }

  .slider-button {
    width: 36px;
    height: 36px;
  }

  .arrow-left,
  .arrow-right {
    font-size: var(--font-size-base);
  }
}

/* 图片对比组件样式 */
.comparison-container {
  position: relative;
  margin: 2rem 0;
}

.title-left,
.title-right {
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 8px 16px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
}

.image-compare {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  cursor: ew-resize;
}

.slider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-button .arrow-left,
.slider-button .arrow-right {
  color: white;
  font-size: 18px;
  margin: 0 2px;
}

.mobile-comparison-title {
  display: none;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 1rem;
  padding: 8px 16px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .mobile-comparison-title {
    display: block;
  }
  .title-left,
  .title-right {
    display: none;
  }
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: white;
}

/* Footer CTA Section */
.footer-cta {
  background-color: var(--background-light);
  padding: 3rem 0;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--background-color);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow-small);
  }

  .nav-links a {
    padding: 0.5rem 0;
  }

  .hero h1 {
    font-size: var(--font-size-3xl);
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn-large {
    width: 100%;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-5px);
  }
}

/* 卡片式布局的样式 */
.score-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.score-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.score-card:hover {
  transform: translateY(-5px);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 20px -5px;
}

.student-id {
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.test-result {
  padding: 1rem;
  background: var(--background-light);
  border-radius: var(--border-radius-sm);
  border: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02);
}

.difference {
  text-align: center;
  font-weight: var(--font-weight-bold);
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background: var(--background-light);
}

.difference.same {
  color: var(--secondary-color);
}

.difference.negative {
  color: #ff4757;
}

.difference.positive {
  color: #2ed573;
}

@media (max-width: 768px) {
  .score-grid {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }

  .score-card {
    padding: 1rem;
  }

  .detail-scores {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .detail-scores span {
    flex: 1;
    min-width: calc(50% - 0.5rem);
    text-align: center;
  }
}

.test-pair {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.test-type {
  font-weight: var(--font-weight-semibold);
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.test-date {
  color: var(--text-light);
  font-size: var(--font-size-small);
  margin-bottom: 0.5rem;
}

.scores .overall {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 0.5rem;
}

.detail-scores {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text-light);
  font-size: var(--font-size-small);
}

.reviews {
  padding: 5rem 0;
  background-color: var(--background-light);
}

.reviews h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.reviews-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.review-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
}

.reviewer-info h4 {
  margin: 0;
  color: var(--text-color);
  font-size: var(--font-size-base);
}

.country {
  color: var(--text-light);
  font-size: var(--font-size-small);
  margin: 0;
}

.rating {
  color: #ffc107;
  margin-bottom: 1rem;
}

.review-text {
  color: var(--text-color);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

@media (max-width: 1200px) {
  .reviews-track {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .reviews-track {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .reviews {
    padding: 3rem 0;
  }
}
</style>
