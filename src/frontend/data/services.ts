// ✅ CAMBIAR LAS RUTAS - ahora solo el nombre del archivo
export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'avanzadas' | 'web';
  icon: string; 
  image: string;  // Ahora solo el nombre del archivo, no la ruta completa
}

export const services: Service[] = [
  {
    id: 'sistemas-personalizados',
    title: 'Sistemas de Software Personalizado',
    description: 'Desarrollo de sistemas web robustos y escalables diseñados para optimizar los procesos empresariales y mejorar la productividad.',
    category: 'avanzadas',
    icon: 'CodeIcon',
    image: 'service-bg-1.webp',  // ✅ SOLO EL NOMBRE
  },
  {
    id: 'informatica-forense',
    title: 'Informática Forense',
    description: 'Análisis especializado de evidencia digital, recuperación de datos e investigaciones cibernéticas para empresas y organizaciones.',
    category: 'avanzadas',
    icon: 'SearchIcon',
    image: 'service-bg-2.webp',  // ✅ SOLO EL NOMBRE
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Diseñamos páginas de aterrizaje estratégicamente optimizadas para maximizar la conversión de visitantes en clientes.',
    category: 'web',
    icon: 'LayoutIcon',
    image: 'service-bg-3.webp',  // ✅ SOLO EL NOMBRE
  },
  {
    id: 'portafolios-profesionales',
    title: 'Portafolios Profesionales',
    description: 'Diseñamos portafolios digitales completamente personalizados que funcionan como tu vitrina profesional en línea.',
    category: 'web',
    icon: 'UserIcon',
    image: 'service-bg-4.webp',  // ✅ SOLO EL NOMBRE
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description: 'Impulsamos tu negocio con tiendas online listas para vender, diseñadas para ofrecer una experiencia de compra segura y sin complicaciones.',
    category: 'web',
    icon: 'ShoppingCartIcon',
    image: 'service-bg-5.webp',  // ✅ SOLO EL NOMBRE
  },
  {
    id: 'catalogos-digitales',
    title: 'Catálogos Digitales',
    description: 'Catálogos interactivos modernos que muestran tus productos de manera atractiva, profesional y visualmente impactante.',
    category: 'web',
    icon: 'BookIcon',
    image: 'service-bg-6.webp',  // ✅ SOLO EL NOMBRE
  },
];