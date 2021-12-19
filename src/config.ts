export default {
  env: "local",
  emulate: true,
  functionsHost: "http://localhost:5001/madness-club/us-central1",
  firebase: {
    apiKey: "AIzaSyDBBrd_7ADcgZ4oaubnENC_d303MePtYLM",
    authDomain: "madness-club.firebaseapp.com",
    projectId: "madness-club",
    storageBucket: "madness-club.appspot.com",
    messagingSenderId: "875566401678",
    appId: "1:875566401678:web:3c68d3af2ab003df01e1df",
    measurementId: "G-K5X85CQLHL",
  },
  messaging: {
    vapidKey: "MY_VAPID_KEY",
  },
  stripe: {
    key: "pk_test_G6ksY0dKXlgogvnitD0Wm1oc",
    clientId: "ca_D5I8AuCy6ymrTR17FliYa2MrrOJwtlUI",
  },
  url: "http://localhost:3333",
  dynamicLinkDomain: "madnessclub.page.link",
};
