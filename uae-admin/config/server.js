module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://cepacouncil.com/api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f016cd88f5fdcfa8e4ea19fd6d503962'),
    },
  },
});
