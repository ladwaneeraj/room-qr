/**
 * ============================================================
 * EDIT EVERYTHING HERE — hotel info lives in this one file.
 * The whole app reads from this CONFIG object.
 * (TV channel list is in src/data/channels.js)
 * ============================================================
 */
export const CONFIG = {
  hotelName: "Cibara Comforts",
  location: "Harihar, Karnataka",
  roomImage: "images/Room.jpeg", // relative to /public

  // Contact
  phoneMobile: "9482831381",
  phoneLandline: "08192297384",
  whatsapp: "919482831381", // country code + number, digits only

  // WiFi — used for the copy button AND the auto-connect QR code.
  // SSID must match your network name EXACTLY for the QR to work.
  wifi: {
    ssid: "Cibara Comforts",
    password: "Cibara@1212",
    encryption: "WPA", // "WPA" | "WEP" | "nopass"
    hidden: false,
  },

  // Maps — used for the embedded map + "Get Directions" button.
  // Put your exact business name or a "lat,lng" pair here.
  mapsQuery: "Cibara Comforts Harihar",

  // Reviews
  reviewsUrl: "https://www.google.com/travel/search?q=cibara%20comforts%20reviews",
  rating: "4.5",

  // Checkout time shown in the services card
  checkoutTime: "11:00 AM",

  // Nearby places
  nearby: [
    { icon: "🛕", name: "Harihareshwara Temple", query: "Harihareshwara Temple Harihar" },
    { icon: "🍽️", name: "Restaurants", query: "restaurants near Harihar" },
    { icon: "🏧", name: "ATM", query: "ATM near Harihar" },
    { icon: "🚉", name: "Railway Station", query: "Harihar Railway Station" },
  ],

  // Quick requests — each opens WhatsApp with a pre-filled message.
  // "key" maps to a translated label in src/i18n.js (req object).
  requests: [
    { icon: "🧺", key: "towels" },
    { icon: "💧", key: "water" },
    { icon: "🧹", key: "cleaning" },
    { icon: "🛏️", key: "linen" },
    { icon: "🧴", key: "toiletries" },
    { icon: "🕚", key: "latecheckout" },
  ],
};
