import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
    label: string;
    description: string;

}

const DefaultOverlayContent: React.FC<Props> = ({
    label,
    description,
}) => {
  return (
    <Container>
      <Heading>
          <h1>{label}</h1>
      </Heading>

      <Buttons>
          <button>Peça agora</button>
          <button className="secondary-button">Detalhes</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
