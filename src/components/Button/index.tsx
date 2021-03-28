import React from 'react';
import { Container, Button } from '@/styles/components/button';

interface ButtonProps {
  color: string;
}
const ButtonComponent: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Container>
      <Button type="button" {...rest} />
    </Container>
  );
};

export default ButtonComponent;
