import React from 'react';
import SchemaOrg from '../common/SchemaOrg';
import { services } from '../../data/services';

const SchemaServices: React.FC = () => {
  return (
    <>
      {services.map((service) => (
        <SchemaOrg
          key={service.id}
          type="Service"
          name={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </>
  );
};

export default SchemaServices;