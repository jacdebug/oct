import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';

const Teams = ({ home, away }) =>
  <TeamsWraper>
    <Team data={home} />
    <TeamVs>Vs</TeamVs>
    <Team data={away} />
  </TeamsWraper>;

export default Teams;

const TeamsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  min-height: 150px;
  background-image: url(${background});
`;

const Team = ({ data }) =>
  <div>
    <TeamImg src={`/assets/${data.logo}`} />
    <TeamName>
      {data.name}
    </TeamName>
  </div>;

const TeamImg = styled.img`max-width: 100px;`;
const TeamName = styled.div`text-align: center`;
const TeamVs = styled.div`margin: 30px;`;
