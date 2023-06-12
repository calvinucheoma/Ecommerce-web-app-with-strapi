module.exports = ({ env }) => ({
  load: [
    "cors",
    "poweredBy",
    "logger",
    "query",
    "body",
    "session",
    "favicon",
    "public",
    "i18n",
    "users-permissions",
    "errors",
    "security",
  ],
  settings: {
    cors: {
      enabled: true,
      origin: "*",
    },
  },
});
