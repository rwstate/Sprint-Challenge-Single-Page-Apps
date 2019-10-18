import React from "react";
import {Card,CardBody, CardImg, CardTitle} from "reactstrap";
import styled from "styled-components";

export default function CharacterCard(props) {
  const MyCard = styled(Card)`
    width: 20%;
    margin-bottom: 5%;
    margin-left: 2%;
    margin-right: 2%;
    border: 1px solid grey;
  `

  return (
    <MyCard>
      <CardImg width="90%" src={props.character.image} alt={props.character.name}/>
      <CardBody>
        <CardTitle>
          {props.character.name}
        </CardTitle>
      </CardBody>
    </MyCard>
  )
}
