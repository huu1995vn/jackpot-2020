import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    Jackpot {
      DrawDate
      DrawId
      Id
      JackportWinner
      JackportWinner2
      Jackpot
      Jackpot2
      ListNumber
      Number1
      Number2
      Number3
      Number4
      Number5
      Number6
      Number7
      Type
    }
  }
`;

export default ({token}) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.Jackpot && data.Jackpot.map((jack) => {
          return (
            <div key={jack.id}>{jack.id} - {jack.ListNumber}</div>
          );
        }
        )}
      </div>
  );
};