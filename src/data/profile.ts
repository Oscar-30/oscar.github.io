// ============================================================
// DATOS PERSONALES COMUNES A LOS DOS IDIOMAS
// Lo que no se traduce (nombre, enlaces, correo) vive aquí
// una sola vez.
// ============================================================
import type { IconName } from '../components/ui/icons';

export const profile = {
  // TODO: tu nombre completo
  name: 'Lorem Ipsum',
  // TODO: tu dominio o texto corto que acompaña al nombre en el pie
  handle: 'loremipsum.dev',
  // TODO: tu correo de contacto
  email: 'lorem.ipsum@example.com',
  // TODO: pon tus CV en la carpeta /public con estos nombres
  cv: {
    es: '/cv-es.pdf',
    en: '/cv-en.pdf',
  },
  // TODO: tus perfiles. Borra los que no uses o añade otros
  // (el icono debe ser uno de los nombres de src/components/ui/icons.ts).
  links: [
    { name: 'GitHub', handle: '@tu-usuario', url: 'https://github.com/tu-usuario', icon: 'github' },
    { name: 'LinkedIn', handle: '/in/tu-usuario', url: 'https://www.linkedin.com/in/tu-usuario', icon: 'linkedin' },
  ] satisfies { name: string; handle: string; url: string; icon: IconName }[],
};
