module.exports = {
  client: {
    service: {
      name: 'API',
      url: 'http://127.0.0.1:3000/graphql', // http://polgozar-staging.eba-wdyhvzq7.us-east-2.elasticbeanstalk.com/graphql
    },
    includes: ['./src/**/*'],
  },
};
