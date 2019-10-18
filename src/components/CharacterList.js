import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList(props) {
  const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: 5%;
    margin-right: 5%;
  `

  if (!props.characters) {
    return <p>Loading...</p>
  }

  return (
    <CardContainer>
      {props.characters.map(character => <CharacterCard character={character}/>)}
    </CardContainer>
  );
}
