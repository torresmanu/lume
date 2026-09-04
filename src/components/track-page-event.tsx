"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackPageEventProps = {
  event: AnalyticsEvent;
};

export function TrackPageEvent({ event }: TrackPageEventProps) {
  useEffect(() => {
    trackEvent(event);
  }, [event]);

  return null;
}
