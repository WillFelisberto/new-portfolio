import { trackEvent } from './analytics';

describe('trackEvent', () => {
  const originalGtag = window.gtag;

  afterEach(() => {
    window.gtag = originalGtag;
    jest.restoreAllMocks();
  });

  it('calls window.gtag with event name and params when gtag is available', () => {
    const gtagMock = jest.fn();
    window.gtag = gtagMock;

    trackEvent('cta_get_in_touch_click', { location: 'hero' });

    expect(gtagMock).toHaveBeenCalledTimes(1);
    expect(gtagMock).toHaveBeenCalledWith('event', 'cta_get_in_touch_click', {
      location: 'hero',
    });
  });

  it('does not throw when window.gtag is undefined', () => {
    window.gtag = undefined;

    expect(() =>
      trackEvent('contact_form_submit', { status: 'success' }),
    ).not.toThrow();
  });
});
