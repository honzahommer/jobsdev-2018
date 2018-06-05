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
      user: 'app',
      host: 'johnson.hommer.cz',
      ref: 'origin/master',
      repo: 'git@github.com:honzahommer/jobsdev-2018.git',
      path: '/vol/app/jobsdev/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    development: {
      user: 'app',
      host: 'johnson.hommer.cz',
      ref: 'origin/master',
      repo: 'git@github.com:honzahommer/jobsdev-2018.git',
      path: '/vol/app/jobsdev/development',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development',
      env: {
        NODE_ENV: 'development'
      }
    }
  }
};
