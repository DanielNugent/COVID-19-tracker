import React from 'react';

const Stats = ({country}) => {
    return(
      <div>
          <p>
              country: {country[0]}
          </p>
          <p>
              cases: {country[1]}
          </p>
          <p>
              deaths: {country[2]}
          </p>
          <p>
              active: {country[7]}
          </p>
          <p>
              critical: {country[3]}
          </p>
          <p>
              recovered: {country[4]}
          </p>
          <p>
              new cases: {country[6]}
          </p>
          <p>
              new deaths: {country[5]}
          </p>

      </div>
    );
}
export default Stats;