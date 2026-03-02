import React from 'react';
import SchemaOrg from '../common/SchemaOrg';

const SchemaHome: React.FC = () => {
  return (
    <>
      <SchemaOrg type="Organization" />
      
      <SchemaOrg type="WebSite" />
      
      <SchemaOrg 
        type="LocalBusiness"
        name="Technological World - Oficina Central"
        description="Oficina principal de Technological World en La Paz - El Alto"
      />
    </>
  );
};

export default SchemaHome;