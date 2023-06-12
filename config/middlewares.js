module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: "*",
    },
  },
  load: [
    "cors",
    "poweredBy",
    "logger",
    "i18n",
    "public",
    "users-permissions",
    "session",
    "security",
    "query",
    "body",
    "favicon",
    "errors",
  ],
};
