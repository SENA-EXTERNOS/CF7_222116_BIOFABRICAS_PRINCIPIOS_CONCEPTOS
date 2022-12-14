export default {
  global: {
    componenteFormativo: 'Biofábricas principios y conceptos',
    descripcionCurso:
      'Este componente formativo desarrolla el concepto de ‘biofábrica’ como lugar adecuado para la generación de bioabonos. En este sentido, se ofrece un recorrido por los diversos elementos necesarios para la comprensión, determinando la pertinencia y funcionalidad de un espacio dirigido a aprovechar elementos residuales del entorno y a la necesidad de su interpretación y adaptación al medio natural. Todo esto, estará encaminado a la promoción del crecimiento y desarrollo de las plantas, desde el fortalecimiento de la estructura del suelo, hasta la disponibilidad nutricional con biofertilizantes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Biofábrica como lugar de producción de bioabonos         ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Biofábrica y preparación de bioabono            ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Uso apropiado de microorganismos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aprovechamiento de subproductos de unidades agropecuarias',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Riesgos asociados a la seguridad en la biofábrica',
            hash: 't_1_4',
          },
        ],
      },

      // {
      //   nombreRuta: 'tema2',
      //   icono: 'far fa-file-alt',
      //   numero: '2',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'tema3',
      //   icono: 'far fa-file-alt',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Biofábrica      ',
      referencia:
        'Anaya, M. (s.f.). Biofábrica para la transformación tecnificada de residuos orgánicos generados en la empresa agropecuaria para la producción de abonos sólidos y líquidos. SENA.',
      tipo: 'Manual      ',
      link:
        'http://repositorio.unicauca.edu.co:8080/bitstream/handle/123456789/892/ANEXO%20C.pdf?sequence=2&isAllowed=y',
    },
    {
      tema: 'Biofábrica      ',
      referencia:
        'D´Andrea, A. (2014). ¿Qué son las biofábricas y cuál es el futuro de la bioeconomía? [Video]. YouTube.',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=ewjPsvDw4zk',
    },
    {
      tema: 'Bioinsumos      ',
      referencia:
        'Tencio, R. (2017). Guía de elaboración y aplicación de bioinsumos para una producción agrícola sostenible. Ministerio de agricultura y ganadería de Costa Rica. ',
      tipo: 'Guía',
      link: 'http://www.mag.go.cr/bibliotecavirtual/F08-10924.pdf       ',
    },
    {
      tema: 'Compostado de materia orgánica      ',
      referencia:
        'Instituto Colombiano Agropecuario. (2015). Cartilla práctica para la elaboración de abono orgánico compostado en producción ecológica. Ministerio de agricultura de Colombia. ',
      tipo: 'Cartilla      ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/5229/cartilla_elaboracion_abono_organico_compostado.pdf?sequence=1&isAllowed=y      ',
    },
  ],
  glosario: [
    {
      termino: 'Actinomicetos:',
      significado:
        'bacterias grampositivas que, predominantemente, se encuentran en el suelo y que juegan un papel determinante en la descomposición de materia orgánica.  ',
    },
    {
      termino: 'Adsorción',
      significado:
        'adhesión de átomos, iones o moléculas de un gas, líquido o sólido disuelto, a una superficie.      ',
    },
    {
      termino: 'Amenaza',
      significado: 'peligro latente de ocurrencia de un evento accidental.',
    },
    {
      termino: 'Biomasa',
      significado:
        'masa de material biológico que es soporte de energía.      ',
    },
    {
      termino: 'Conidióforos:',
      significado:
        'estructura microscópica especializada en la producción asexual de miles de esporas.',
    },
    {
      termino: 'Destilación fraccionada:',
      significado:
        'proceso físico utilizado para separar mezclas de líquidos mediante calor, con un amplio intercambio calorífico y másico entre vapores y líquidos.      ',
    },
    {
      termino: 'Hifas',
      significado:
        'filamento que se origina a partir de las esporas en hongos.      ',
    },
    {
      termino: 'Mesófilo',
      significado:
        'organismo cuya temperatura de crecimiento óptima se encuentra entre los 20 y 45 °C.      ',
    },
    {
      termino: 'PGPR',
      significado:
        'rizobacteria promotora del crecimiento vegetal, conocida con las siglas PGPR por su denominación en inglés (<em> plant growth promoting rhizobacteriaz</em>).',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'susceptibilidad o fragilidad para sufrir afectación en caso de ocurrencia de un evento accidental.      ',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, W., y Peralta, M. (2015). Elaboración de abonos orgánicos a partir del compostaje de residuos agrícolas en el municipio de Fusagasugá. Recuperado de',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1234/ELABORACI%C3%93N%20DE%20ABONOS%20ORG%C3%81NICOS%20A%20PARTIR%20DEL%20COMPOSTAJE%20DE%20R.pdf?sequence=1&isAllowed=y      ',
    },
    {
      referencia:
        'Alarcón, J., Gordillo, Y. & Rivera, G. (2019). Optimización del proceso de compostaje mediante la introducción de abono microbial que contiene Streptomyces sp, Aspergillus niger Y Lactobacillus sp. [Tesis de pregrado, Universidad Colegio Mayor de Cundinamarca]. Recuperado de',
      link:
        'https://repositorio.unicolmayor.edu.co/bitstream/handle/unicolmayor/280/1%20para%20subir%20OPTIMIZACI%C3%93N%20DEL%20PROCESO%20DE%20COMPOSTAJE%20MEDIANTE%20LA%20INTRODUCCION%20DE%20UN%20ABONO%20MICROBIAL%20QUE%20CONTIENE%20Stre%20%281%29.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Arango, M. (2017). Abonos orgánicos como alternativa para la conservación y mejoramiento de los suelos. [Tesis de pregrado, Corporación Universitaria Lasallista].  Recuperado de:',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/2036/1/Abonos_organicos_alternativa_conservacion_mejoramiento_suelo.pdf      ',
    },
    {
      referencia:
        'Beltrán, M., y Bernal, A. (2022). Biofertilizantes: alternativa biotecnológica para los agroecosistemas. Mutis, 12(1).      ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2015). Cartilla práctica para la elaboración de abono orgánico compostado en producción ecológica. Ministerio de agricultura de Colombia.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/5229/cartilla_elaboracion_abono_organico_compostado.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Pedraza, R., Estrada. G., & Bonilla, R. (2018). Biofertilizantes y su relación con la sostenibilidad agrícola.       ',
      link: '',
    },
    {
      referencia:
        'Restrepo, J. (2007). Biofertilizantes preparados y fermentados a base de mierda de vaca. Heifer International',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
