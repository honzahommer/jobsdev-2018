module.exports = {
  apps: [{
    name: 'jobsdev',
    script: 'bin/www',
    env_production : {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'root',
      host: 'jobsdev-2018.hommer.cz',
      ref: 'origin/master',
      repo: 'git@github.com:honzahommer/jobsdev-2018.git',
      path: '/var/app/jobsdev-2018/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    development: {
      user: 'root',
      host: 'jobsdev-2018.hommer.cz',
      ref: 'origin/master',
      repo: 'git@github.com:honzahommer/jobsdev-2018.git',
      path: '/var/app/jobsdev-2018/development',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development',
      env: {
        NODE_ENV: 'development'
      }
    }
  }
};
