module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'uaedb2024'),
        username: env('DATABASE_USERNAME', 'acelema'),
        password: env('DATABASE_PASSWORD', 'acelema@1994'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'uaedb2024'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
