import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'Service' | 'Product';
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[]; 
  price?: string;
  currency?: string;
  areaServed?: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({
  type,
  name = 'Technological World',
  url = 'https://technologicalworld.website',
  logo = '/src/assets/images/logo-dark.webp',
  description = 'Soluciones tecnológicas innovadoras para impulsar tu negocio',
  image = '/src/assets/images/hero-image.webp',
  telephone = '+59177575921',
  email = 'technological.world.dev@gmail.com',
  address = {
    streetAddress: 'Av. 6 de Marzo Nro. 150 Entre calles 2 y 3 Piso 1',
    addressLocality: 'La Paz',
    addressRegion: 'La Paz',
    postalCode: '0000',
    addressCountry: 'BO',
  },
  sameAs = [
    'https://www.facebook.com/profile.php?id=61576156485234',
    'https://github.com/TechnologicalWorld',
    'https://www.youtube.com/@TechnologicalWorld-b1z',
    'https://discord.gg/DsbjuVyArS',
  ],
  price,
  currency = 'BOB',
  areaServed = 'Bolivia',
}) => {
  
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      name,
      url,
      description,
      image: image.startsWith('http') ? image : `https://technologicalworld.website${image}`,
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          logo: logo.startsWith('http') ? logo : `https://technologicalworld.website${logo}`,
          sameAs,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone,
            contactType: 'Servicio al Cliente',
            email,
            areaServed,
          },
        };

      case 'LocalBusiness':
        return {
          ...baseSchema,
          '@type': 'LocalBusiness',
          telephone,
          email,
          address: {
            '@type': 'PostalAddress',
            ...address,
          },
          openingHours: 'Mo-Fr 09:00-18:00',
          priceRange: '$$',
          sameAs,
        };

      case 'WebSite':
        return {
          ...baseSchema,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `https://technologicalworld.website/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Service':
        return {
          ...baseSchema,
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: 'Technological World',
            url: 'https://technologicalworld.website',
          },
          areaServed: {
            '@type': 'Country',
            name: areaServed,
          },
          offers: price ? {
            '@type': 'Offer',
            price,
            priceCurrency: currency,
          } : undefined,
        };

      case 'Product':
        return {
          ...baseSchema,
          '@type': 'Product',
          offers: price ? {
            '@type': 'Offer',
            price,
            priceCurrency: currency,
            availability: 'https://schema.org/InStock',
          } : undefined,
        };

      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;