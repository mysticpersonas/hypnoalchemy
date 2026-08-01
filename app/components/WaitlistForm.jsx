'use client';

import Script from 'next/script';

/**
 * GoHighLevel waitlist form (name / phone / email).
 * form_embed.js resizes the iframe to fit its content. On submit, GHL redirects
 * to whatever "thank you" URL is configured in the form's settings — point that
 * at /books/waitlist/thank-you so users land back on our site.
 */
export default function WaitlistForm() {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-white">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/gFSViK7HlOnntA6oRchk"
        id="inline-gFSViK7HlOnntA6oRchk"
        title="MindPersonas — Book Waitlist"
        data-layout="{'id':'INLINE'}"
        data-form-id="gFSViK7HlOnntA6oRchk"
        data-form-name="Mindpersonas hypnoalchemy book waitlist"
        style={{ width: '100%', minHeight: '620px', border: 'none', borderRadius: '8px' }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
