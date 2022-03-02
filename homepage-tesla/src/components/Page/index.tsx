import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {
            [
              'Model X',
              'Model Y',
              'Model S',
              'Model 3',
              'Model 5',
              'Model U',
              'Model 7',
            ].map(modelName => (
              <ModelSection 
                key={modelName}
                className="colored"
                modelName={modelName}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName}
                    description='Peça online para entrega'
                  />
              }
          />
        ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
