export const getSubdomain = () => {
  const hostname = window.location.hostname; // उदा. ://yourdomain.com किंवा localhost

  // जर तुम्ही लोकल कॉम्प्युटरवर टेस्टिंग करत असाल (localhost:3000)
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    // लोकल टेस्टिंगसाठी तुम्ही ब्राऊझरमध्ये URL अशी टाकू शकता: localhost?tenant=janata
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("tenant") || null; // हे तुम्हाला 'janata' काढून देईल
  }

  // लाईव्ह सर्व्हरवर (Production) काम करताना:
  // समजा तुमची मुख्य वेबसाईट 'yourbankplatform.com' आहे
  const parts = hostname.split(".");

  // जर URL मध्ये 'www' असेल तर ते काढून टाकू (उदा. ://yourbankplatform.com)
  if (parts[0] === "www") {
    parts.shift();
  }

  // जर भागांची संख्या २ पेक्षा जास्त असेल, तरच सब-डोमेन अस्तित्वात आहे
  // उदा. ['janata', 'yourbankplatform', 'com'] -> लांबी ३ आहे
  if (parts.length > 2) {
    return parts[0]; // हे 'janata' किंवा 'maharashtra' रिटर्न करेल
  }

  return null; // जर मुख्य डोमेन असेल (उदा. yourbankplatform.com) तर null येईल
};
