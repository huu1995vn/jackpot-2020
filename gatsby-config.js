module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://jackpot-2020.hasura.app/v1/graphql'
      }
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
          url: `https://103.68.77.68/services?securitycode=vietlotcmc&jsondata={"Command":"Get655Result","JsonData":"{\\"PageSize\\":1000,\\"Segment\\":0,\\"TopN\\":0}"}`,
          method: 'get',
          headers: {
              'Content-Type': 'application/json',
              'Host': 'vietlott.vn'
          },
          name: `jackpot55`,
          verboseOutput: true,
      }
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
          url: `https://103.68.77.68/services/?securitycode=vietlotcmc&jsondata={"Command":"Get645Result","JsonData":"{\\"PageSize\\":1000,\\"Segment\\":0,\\"TopN\\":0}"}`,
          method: 'get',
          headers: {
              'Content-Type': 'application/json',
              'Host': 'vietlott.vn'
          },
          name: `jackpot45`,
          verboseOutput: true,
      }
    }
  ]
};