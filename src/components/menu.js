import React from 'react';
import { Card, CardTitle, CardText, Button } from "reactstrap";

const Menu = (props) => {
  const addItem = () => {
    props.addMenuPrice(props.itemCost, props.itemEmoji)
  }
    return(
      <>
        <Card body>
          <CardTitle>Menu Item: { props.menuItem }</CardTitle>
          <CardText>Menu Price: ${ props.itemCost }</CardText>
          <Button onClick={ addItem }>Add { props.menuItem }</Button>
        </Card>
      </>
    )
  }

export default Menu;
