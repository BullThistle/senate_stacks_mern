import React from "react";
import { Menu, Container } from 'semantic-ui-react'

export const Header = (props) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          Senate Stacks
        </Menu.Item>
      </Container>
    </Menu>
  );
}