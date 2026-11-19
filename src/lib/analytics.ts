export type AnalyticsEventMap = {
  cta_get_in_touch_click: {
    location: 'hero';
  };
  social_link_click: {
    network: string;
    url: string;
    location: 'hero' | 'publication';
  };
  contact_form_submit: {
    status: 'success' | 'error';
  };
  publication_click: {
    title: string;
    link_type: 'doi' | 'github';
    url: string;
  };
  certification_click: {
    title: string;
    issuer: string;
    url: string;
  };
  project_card_click: {
    slug: string;
    title: string;
    source: 'home_highlights' | 'projects_list';
  };
  project_external_link_click: {
    slug: string;
    title: string;
    link_type: 'github' | 'live';
    url: string;
  };
  project_filter_change: {
    category: string;
  };
  oscilloscope_toggle: {
    mode: 'sine' | 'pulse';
  };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

declare global {
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent<T extends AnalyticsEventName>(
  eventName: T,
  params: AnalyticsEventMap[T],
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}
