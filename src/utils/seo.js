/**
 * SEO Utilities for No Dispute Credit Validation System
 * Provides metadata generation, structured data, and social media tags
 */

export const APP_NAME = 'No Dispute Credit';
export const APP_DOMAIN = 'nodisputecredit.com';
export const APP_URL = `https://${APP_DOMAIN}`;

/**
 * Generate comprehensive metadata for pages
 * @param {Object} options - Metadata options
 * @returns {Object} Complete metadata object
 */
export const generateMetadata = ({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  type = 'website',
  author = 'No Dispute Credit Team',
  robots = 'index, follow',
  canonicalUrl = null,
}) => {
  const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;
  const fullUrl =
    canonicalUrl ||
    (typeof window !== 'undefined' ? window.location.href : APP_URL);
  const imageUrl = image.startsWith('http') ? image : `${APP_URL}${image}`;

  return {
    // Basic metadata
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    author,
    robots,
    canonical: fullUrl,

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: fullUrl,
      image: imageUrl,
      siteName: APP_NAME,
      locale: 'en_US',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: imageUrl,
      site: '@NoDisputeCredit',
      creator: '@NoDisputeCredit',
    },

    // Additional SEO tags
    alternate: {
      canonical: fullUrl,
    },
  };
};

/**
 * Generate structured data (JSON-LD) for search engines
 * @param {string} type - Schema.org type
 * @param {Object} data - Structured data
 * @returns {Object} JSON-LD object
 */
export const generateStructuredData = (type, data) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    ...baseData,
    ...data,
  };
};

/**
 * Organization structured data
 */
export const organizationSchema = generateStructuredData('Organization', {
  name: APP_NAME,
  url: APP_URL,
  logo: `${APP_URL}/logo.png`,
  description:
    'Educational credit report validation and score analysis platform',
  sameAs: [
    'https://facebook.com/nodisputecredit',
    'https://twitter.com/nodisputecredit',
    'https://linkedin.com/company/nodisputecredit',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
});

/**
 * WebSite structured data
 */
export const websiteSchema = generateStructuredData('WebSite', {
  name: APP_NAME,
  url: APP_URL,
  description:
    'Educational credit validation system for understanding credit reports',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${APP_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Page metadata configurations for different routes
 */
export const PAGE_METADATA = {
  home: {
    title: 'Educational Credit Validation System',
    description:
      'Learn how credit bureaus report data and understand your credit score with our educational validation platform. Compare Equifax, TransUnion, and Experian reports side-by-side.',
    keywords: [
      'credit validation',
      'credit report',
      'credit score',
      'equifax',
      'transunion',
      'experian',
      'credit education',
    ],
  },
  login: {
    title: 'Login to Your Account',
    description:
      'Access your No Dispute Credit account to continue your credit validation journey.',
    keywords: ['login', 'sign in', 'account access'],
    robots: 'noindex, nofollow',
  },
  register: {
    title: 'Create Your Account',
    description:
      'Start your credit education journey by creating a free account.',
    keywords: ['register', 'sign up', 'create account'],
  },
  dashboard: {
    title: 'Your Dashboard',
    description:
      'Track your credit validation progress and access your reports.',
    keywords: ['dashboard', 'credit reports', 'validation progress'],
    robots: 'noindex, nofollow',
  },
  creditReportValidation: {
    title: 'Credit Report Validation',
    description:
      'Upload and compare your credit reports from all three bureaus with side-by-side analysis.',
    keywords: [
      'credit report validation',
      'bureau comparison',
      'credit analysis',
    ],
  },
  creditScoreValidation: {
    title: 'Credit Score Validation',
    description:
      'Complete 40 educational questions to understand how credit scores are calculated.',
    keywords: [
      'credit score',
      'score validation',
      'credit factors',
      'FICO score',
    ],
  },
  results: {
    title: 'Your Credit Analysis Results',
    description:
      'View your personalized credit profile type and detailed analysis.',
    keywords: ['credit results', 'credit profile', 'score analysis'],
    robots: 'noindex, nofollow',
  },
  monitoring: {
    title: '90-Day Action Plan',
    description: 'Follow your personalized 90-day credit improvement plan.',
    keywords: ['credit monitoring', 'action plan', 'credit improvement'],
    robots: 'noindex, nofollow',
  },
  resources: {
    title: 'Credit Education Resources',
    description:
      'Access guides, tips, and FAQs to better understand credit reporting and scoring.',
    keywords: ['credit education', 'credit guides', 'credit tips', 'FAQ'],
  },
};

/**
 * Get metadata for a specific page
 * @param {string} pageName - Name of the page
 * @returns {Object} Page metadata
 */
export const getPageMetadata = (pageName) => {
  const pageData = PAGE_METADATA[pageName] || PAGE_METADATA.home;
  return generateMetadata(pageData);
};
