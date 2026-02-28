module.exports = {
  apps: [
    {
      name: 'NovaHub',
      script: './backend.js',
      env: {
        PORT: 3002,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3002,
        NODE_ENV: 'production',
      },
      instances: '1',
      exec_interpreter: 'babel-node',
      exec_mode: 'fork',
      autorestart: true,
      exp_backoff_restart_delay: 100,
      cron_restart: '*/10 * * * *',
      kill_timeout: 3000,
      watch: false,
    },
    {
      name: 'NovaHub-src-refresh',
      script: './run-command.mjs',
      args: 'build',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      instances: '1',
      exec_interpreter: 'babel-node',
      exec_mode: 'fork',
      autorestart: true,
      restart_delay: 1000 * 60 * 10,
      kill_timeout: 3000,
      watch: false,
    },
    {
      name: 'NovaHub-cache-clean',
      script: './run-command.mjs',
      args: 'clean',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      instances: '1',
      exec_interpreter: 'babel-node',
      exec_mode: 'fork',
      autorestart: true,
      restart_delay: 1000 * 60 * 60 * 24 * 7,
      kill_timeout: 3000,
      watch: false,
    },
  ],
};
