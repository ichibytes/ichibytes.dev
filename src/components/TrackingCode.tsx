import Script from 'next/script';

function TrackingCode() {
  return (
    <Script
      defer
      data-domain='ichibytes.dev'
      src='https://plausible.ichibytes.dev/js/script.js'
    />
  );
}

export default TrackingCode;
