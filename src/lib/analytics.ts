declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackLead(practiceArea?: string) {
  trackEvent("generate_lead", {
    event_category: "Contact",
    event_label: practiceArea ?? "General",
    value: 1,
  });
}

export function trackCtaClick(ctaName: string, location: string) {
  trackEvent("cta_click", {
    event_category: "Engagement",
    event_label: ctaName,
    cta_location: location,
  });
}

export function trackPhoneClick() {
  trackEvent("phone_click", {
    event_category: "Contact",
    event_label: "Phone Call",
  });
}
