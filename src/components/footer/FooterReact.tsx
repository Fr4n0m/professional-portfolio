import React from 'react';
import FooterNavReact from './FooterNavReact';

interface FooterItem {
  title: string;
  url: string;
}

interface FooterReactProps {
  lang: string;
  personName: string;
  personEmail: string;
  personRole: string;
  personSpecialties: string;
  personAdditionalTech: string;
  locationText: string;
  locationIcon?: string;
}

const FooterReact: React.FC<FooterReactProps> = ({
  lang,
  personName,
  personEmail,
  personRole,
  personSpecialties,
  personAdditionalTech,
  locationText,
  locationIcon = "📍",
}) => {
  // Definir los ítems del footer
  const footerItems: FooterItem[] = [
    {
      title: "Sobre mí",
      url: lang === 'es' ? "/#about" : `/${lang}/#about`
    },
    {
      title: "Proyectos",
      url: lang === 'es' ? "/#projects" : `/${lang}/#projects`
    },
    {
      title: "Experiencia",
      url: lang === 'es' ? "/#experience" : `/${lang}/#experience`
    },
    {
      title: "Contacto",
      url: `mailto:${personEmail}`
    },
    {
      title: "CV",
      url: "https://cv-web-smoky.vercel.app/"
    },
    {
      title: "Subir",
      url: "#"
    }
  ];

  // Componente para la información de la persona con tooltip
  const PersonTooltip = () => {
    return (
      <div className="inline-block relative group">
        <span className="cursor-pointer border-b border-dotted border-white/40 hover:border-white/60 transition-colors">
          {personName}
        </span>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-gray-800/90 backdrop-blur-md text-white text-xs rounded shadow-lg z-50 transition-all duration-300 scale-90 group-hover:scale-100 origin-bottom">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">{personName}</p>
            <p>{personRole}</p>
            <p className="text-gray-300 text-[0.65rem]">{personSpecialties}</p>
            <p className="text-gray-400 text-[0.65rem]">{personAdditionalTech}</p>
            <a href={`mailto:${personEmail}`} className="text-blue-400 hover:text-blue-300 mt-1 transition-colors">
              {personEmail}
            </a>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800/90"></div>
        </div>
      </div>
    );
  };

  // Componente para el texto de ubicación
  const LocationTextComponent = () => {
    return (
      <span className="ml-1 hover:text-white/80 transition-colors inline-flex items-center">
        <span className="mr-0.5">{locationIcon}</span>
        {locationText}
      </span>
    );
  };

  return (
    <footer className="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg md:w-[780px] lg:w-[780px] xl:w-[780px] mx-auto mb-16 opacity-95 hover:opacity-100 transform hover:-translate-y-0.5 transition-all duration-500">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white/60 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <PersonTooltip />.
          <LocationTextComponent />
        </span>
        
        {/* Componente de navegación */}
        <FooterNavReact footerItems={footerItems} lang={lang} />
      </div>
    </footer>
  );
};

export default FooterReact;
