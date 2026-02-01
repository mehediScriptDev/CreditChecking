/**
 * Web Vitals Monitoring for No Dispute Credit System
 * Tracks Core Web Vitals and sends to analytics
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

// Performance budget thresholds (in milliseconds)
export const PERFORMANCE_BUDGETS = {
  LCP: 2500, // Largest Contentful Paint
  FCP: 1800, // First Contentful Paint
  CLS: 0.1, // Cumulative Layout Shift (unitless)
  INP: 200, // Interaction to Next Paint
  TTFB: 800, // Time to First Byte
};

/**
 * Determine if a metric value is good, needs improvement, or poor
 * Based on Google's Core Web Vitals thresholds
 */
const getMetricRating = (name, value) => {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FCP: { good: 1800, poor: 3000 },
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    TTFB: { good: 800, poor: 1800 },
  };

  const threshold = thresholds[name];
  if (!threshold) return 'unknown';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

/**
 * Format metric value for display
 */
const formatMetricValue = (name, value) => {
  if (name === 'CLS') {
    return value.toFixed(3);
  }
  return Math.round(value);
};

/**
 * Send metric to Google Analytics
 * Requires Google Analytics to be loaded (gtag)
 */
const sendToGoogleAnalytics = ({ name, value, id, rating }) => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics not available');
    return;
  }

  window.gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    metric_rating: rating,
    non_interaction: true,
  });
};

/**
 * Send metric to custom analytics endpoint (unused but kept for future use)
 */
const _sendToCustomAnalytics = async ({ name, value, id, rating }) => {
  try {
    // Send to your backend analytics endpoint
    const endpoint = '/api/analytics/web-vitals';

    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: name,
        value: formatMetricValue(name, value),
        id,
        rating,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (error) {
    console.error('Failed to send analytics:', error);
  }
};

/**
 * Log metric to console in development
 */
const logMetricToConsole = ({ name, value, id, rating }) => {
  const formattedValue = formatMetricValue(name, value);
  const emoji =
    rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';

  console.log(
    `${emoji} ${name}:`,
    formattedValue,
    `(${rating})`,
    `| ID: ${id}`,
  );
};

/**
 * Check if metric exceeds performance budget
 */
const checkPerformanceBudget = ({ name, value }) => {
  const budget = PERFORMANCE_BUDGETS[name];
  if (!budget) return;

  if (value > budget) {
    console.warn(
      `⚠️ Performance budget exceeded for ${name}:`,
      `${formatMetricValue(name, value)} > ${budget}`,
    );
  }
};

/**
 * Main handler for web vitals metrics
 */
const handleMetric = (metric) => {
  const { name, value, id } = metric;
  const rating = getMetricRating(name, value);

  const metricData = {
    name,
    value,
    id,
    rating,
  };

  // Log to console in development
  if (import.meta.env.DEV) {
    logMetricToConsole(metricData);
  }

  // Check performance budget
  checkPerformanceBudget(metricData);

  // Send to analytics
  sendToGoogleAnalytics(metricData);

  // Optionally send to custom analytics
  // sendToCustomAnalytics(metricData);
};

/**
 * Initialize web vitals monitoring
 * Call this in your main App component or index file
 */
export const initWebVitals = () => {
  // Core Web Vitals
  onCLS(handleMetric); // Cumulative Layout Shift
  onFCP(handleMetric); // First Contentful Paint
  onINP(handleMetric); // Interaction to Next Paint
  onLCP(handleMetric); // Largest Contentful Paint
  onTTFB(handleMetric); // Time to First Byte

  if (import.meta.env.DEV) {
    console.log('🚀 Web Vitals monitoring initialized');
  }
};

/**
 * Detect long tasks (tasks taking > 50ms)
 * Helps identify performance bottlenecks
 */
export const monitorLongTasks = () => {
  if (typeof PerformanceObserver === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn(
          '⏱️ Long task detected:',
          `${Math.round(entry.duration)}ms`,
          entry,
        );

        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'long_task', {
            event_category: 'Performance',
            event_label: 'Long Task',
            value: Math.round(entry.duration),
            non_interaction: true,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch {
    console.error('Long task monitoring not supported');
  }
};

/**
 * Track page visibility changes
 * Useful for understanding when users leave/return to page
 */
export const trackPageVisibility = () => {
  if (typeof document === 'undefined') return;

  let hiddenTime = 0;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      hiddenTime = Date.now();
    } else {
      const timeHidden = Date.now() - hiddenTime;

      if (window.gtag && timeHidden > 0) {
        window.gtag('event', 'page_visibility', {
          event_category: 'Engagement',
          event_label: 'Page Hidden Time',
          value: Math.round(timeHidden / 1000), // Convert to seconds
          non_interaction: true,
        });
      }
    }
  });
};

/**
 * Get current performance metrics
 * Useful for debugging or displaying to users
 */
export const getCurrentMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0];
  const paint = performance.getEntriesByType('paint');

  return {
    // Navigation timing
    dns: navigation?.domainLookupEnd - navigation?.domainLookupStart,
    tcp: navigation?.connectEnd - navigation?.connectStart,
    ttfb: navigation?.responseStart - navigation?.requestStart,
    download: navigation?.responseEnd - navigation?.responseStart,
    domInteractive: navigation?.domInteractive,
    domComplete: navigation?.domComplete,
    loadComplete: navigation?.loadEventEnd,

    // Paint timing
    fcp: paint?.find((entry) => entry.name === 'first-contentful-paint')
      ?.startTime,

    // Resource timing
    resourceCount: performance.getEntriesByType('resource').length,
  };
};

/**
 * Export performance data as JSON
 * Useful for debugging and reporting
 */
export const exportPerformanceData = () => {
  const metrics = getCurrentMetrics();
  const resources = performance.getEntriesByType('resource');

  return {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    metrics,
    resources: resources.map((r) => ({
      name: r.name,
      type: r.initiatorType,
      duration: Math.round(r.duration),
      size: r.transferSize,
    })),
  };
};

// Auto-initialize if not in test environment
if (typeof window !== 'undefined' && import.meta.env.MODE !== 'test') {
  // Initialize on page load
  if (document.readyState === 'complete') {
    initWebVitals();
  } else {
    window.addEventListener('load', initWebVitals);
  }
}
