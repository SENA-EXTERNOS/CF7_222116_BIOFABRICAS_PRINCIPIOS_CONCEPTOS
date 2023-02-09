<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Biofábrica como lugar de producción de bioabonos
    p.mb-5(data-aos='fade-right') Para dar inicio al componente formativo se presentan, a continuación, algunos elementos relacionados con las biofábricas.
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.jpg', alt='' style="border-radius: 20px ")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--agua")
          div(titulo="Primer elemento ")
            p.mb-0 El concepto de biofábrica se configura, en el actual panorama productivo agrario, como una alternativa productiva frente a las adversidades generadas desde la producción convencional que ha empleado, masiva e indiscriminadamente, la utilización de insumos de síntesis química. Esto ocasiona una progresiva alteración de los agroecosistemas, sobretodo, al seguir lecturas incorrectas de las necesidades y requerimientos del espacio productivo agrícola. 
          div(titulo="Segundo elemento")
            p.mb-0 Desde este reconocimiento, se exponen apartados relacionados con la producción de bioabonos, el uso de microorganismos, el aprovechamiento de residuos de unidades agropecuarias, y con algunos riesgos asociados a la generación de biofertilizantes.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Biofábrica y producción de bioabonos
    p.mb-5(data-aos='fade-right') Para profundizar sobre los aspectos relacionados con las biofábricas, a continuación, se describe su relación con los fertilizantes agrícolas.
    SlyderE(indicadores="").mb-5
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Los fertilizantes agrícolas, son sustancias que presentan un origen mineral. Son producidos desde la explotación de yacimientos naturales, o desde la industria agroquímica; su objetivo se fundamenta en subsanar las deficiencias nutricionales manifiestas en los suelos con vocación productiva. Los fertilizantes se emplean luego de una interpretación apropiada de las necesidades requeridas, en aras de proporcionar un suministro, acorde con las condiciones del suelo y a los requerimientos de la planta que se pretende cultivar. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/2.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Frente a este panorama, las condiciones usualmente encontradas en el escenario productivo, presentan desfases asociados a la interpretación inapropiada de las necesidades del suelo, estableciendo formulaciones desproporcionadas que alteran el equilibrio dinámico del suelo, en niveles no oportunos para la plantación respectiva, generando, de esta manera, entornos tóxicos para el material vegetal.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/3.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p En el contexto de la agricultura convencional tecnificada, el complejo de fertilizantes Nitrógeno-Fósforo-Potasio, o #[em NPK], se establece como el grupo más ampliamente utilizado, debido al aporte de tres macronutrientes indispensables para el desarrollo de las plantas. Al respecto del uso de estos fertilizantes inorgánicos, se reconoce el impacto positivo asociado con su aplicación al suelo, para la producción agrícola. Sin embargo, también se reconoce un impacto negativo y acumulativo, vinculado al tipo de utilización, determinado por el nivel de intensidad y el manejo de proporciones que derivan, entre otras consecuencias, en la supresión de enzimas, necesarias para el ciclado de nutrientes en el suelo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/4.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p La utilización de fertilizantes en dosificaciones erróneas, genera un impacto ambiental notable en el suelo, el agua y el aire. Esto ocasiona la degradación progresiva de los escenarios productivos y del agroecosistema relacionado, lo que deriva en procesos de acumulación de materiales inorgánicos y en la acidificación del suelo, la eutrofización de fuentes hídricas y la emanación de gases, efecto invernadero. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/5.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Entre otras estimaciones, se reconoce que del 15 % al 50 % de los fertilizantes nitrogenados, son lixiviados a las capas profundas del suelo y a corrientes de aguas superficiales, favoreciendo la eutrofización en un fenómeno definido como proceso de deterioro de la calidad del agua, a razón del enriquecimiento de nutrientes. El nitrógeno, junto con el fósforo, son, fundamentalmente, causantes del deterioro: el primero, forma sales de nitrato o amonio, y el segundo, fosfatos. (Beltrán & Bernal, 2022)
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/6.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Esta alteración, genera un tipo de estimulación para el crecimiento de algas que, en la medida de su proliferación, imposibilitan el ingreso de luz, desencadenando, así, una reducción del nivel de fotosíntesis. En consecuencia, el ecosistema acuático se convierte en un ambiente anaerobio, por cuenta del incremento en la concentración de gases (metano, dióxido de carbono y sulfuro de hidrógeno), configurando un ambiente hostil para la vida y, por lo tanto, provocando un impacto directo sobre la biodiversidad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/7.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Los fertilizantes fosforados, por otro lado, cuyo origen es la roca fosfórica, también pueden presentar riesgos para la salud ambiental y humana, asociados a la posible contaminación cruzada por elementos menores. Entre algunas de las trazas que se han identificado en estos fertilizantes se encuentra, por ejemplo, el uranio, elemento conocido por su potencial de toxicidad química y radiotoxicidad. Este tipo de elementos pueden estar disponibles para las plantas, principalmente en suelos ácidos, presentando un riesgo potencial para la bioacumulación en la cadena trófica. (Beltrán & Bernal, 2022).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/8.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Además de las condiciones de degradación ambiental y de los potenciales riesgos para la salud humana, el uso de dosis inapropiadas de fertilizantes, afecta su efectividad, lo que incide, directamente, en el incremento de los costos de producción, en tanto hay una mayor demanda de insumos, para lograr subsanar las deficiencias fisicoquímicas del suelo. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/9.jpg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        p La biotecnología ofrece la posibilidad de reemplazar insumos sintéticos por insumos de origen biológico como, por ejemplo, los biofertilizantes, los cuales son, básicamente, sustancias contenedoras de microorganismos benéficos para el suelo, cuya capacidad es promover el crecimiento y desarrollo de las plantas, a través de la aplicación en semillas, suelos o superficies foliares. La producción de este tipo de insumo sucede a partir del cultivo de aquellos microorganismos que, regularmente, se encuentran en el suelo en bajas proporciones. Así mismo, su utilización, ha demostrado incrementar la capacidad de absorción de la planta, de agua y nutrientes del suelo, dada la estimulación de su sistema radicular. (Beltrán & Bernal, 2022)
          br
          br
          | Las poblaciones microbianas utilizadas para la producción de este tipo de insumos, pueden mejorar la salud y la calidad del suelo. Estas poblaciones están conformadas por especies seleccionadas que incluyen, entre otros, a rizobacterias, organismos capaces de inducir el crecimiento, a cianobacterias, capaces de fijar nitrógeno, o a bacterias y hongos, supresores de enfermedades. (Beltrán & Bernal, 2022)
    .tarjeta.card-linea.p-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Biofertilizantes")
          .col-lg-7.mb-4.mb-md-0
            p Entre los beneficios evidenciados de la generación y utilización de biofertilizantes en la producción agrícola, se destacan, por ejemplo, el bajo costo de producción comparado con otros productos, la reducción, casi completa, del impacto ambiental, la promoción de la conservación del suelo, el mejoramiento en el nivel de productividad de los cultivos y la recuperación de terrenos para la producción agrícola. 
          .col-lg-5: img(src='@/assets/curso/temas/tema1/11.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Organismos microbianos")
          .col-lg-7.mb-4.mb-md-0
            p La utilización de organismos microbianos benéficos para las plantas puede proporcionar tanto su protección contra agentes patógenos, como facilitar la disponibilidad de nutrientes. Debido a las condiciones de degradación ambiental generadas por la producción convencional, o a las características diferenciales de los biopreparados, el interés de los biofertilizantes ha encontrado, recientemente, un importante crecimiento.
          .col-lg-5: img(src='@/assets/curso/temas/tema1/12.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Generación de bioinsumos")
          .col-lg-7.mb-4.mb-md-0
            p La implementación de este tipo de prácticas implica un complejo proceso constituido por varias etapas que, en conjunto, permiten la obtención de un tipo de insumo que guarda las condiciones de efectividad, seguridad, practicidad y asequibilidad en el mercado.
          .col-lg-5: img(src='@/assets/curso/temas/tema1/13.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Generación de<br> bioinsumos<br> - Caso 1")
          .col-lg-7.mb-4.mb-md-0
            p El paso inicial para la generación de bioinsumos, es la obtención de los microorganismos a cultivar; estos pueden provenir de diferentes espacios, como por ejemplo, de colecciones o, directamente, del entorno productivo de interés.  
              br
              br
              | La primera opción consiste en adquirir muestras o volúmenes de las poblaciones de microorganismos seleccionados y disponibles en el mercado. 
          .col-lg-5: img(src='@/assets/curso/temas/tema1/14.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Generación de<br> bioinsumos<br> - Caso 2")
          .col-lg-7.mb-4.mb-md-0
            p La segunda opción consiste en realizar el respectivo aislamiento de muestras de suelo, o rizosféricas. Posteriormente, son insertadas en medios de cultivo apropiados y, luego, se realizan mediciones de estabilidad funcional, además de pruebas de efectividad en campo, con la medición del crecimiento vegetal, y estimaciones de adaptabilidad a condiciones limitantes.
          .col-lg-5: img(src='@/assets/curso/temas/tema1/15.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Consolidación de <br>poblaciones <br>microbianas")
          .col-lg-7.mb-4.mb-md-0
            p Para consolidar este tipo de poblaciones microbianas, se deben generar medios de cultivo pertinentes con los requerimientos de las especies, estableciendo ensayos de fermentación, en pequeña y gran escala, que guarden las respectivas medidas, garantes del control de parámetros como el oxígeno disuelto, la temperatura, el pH y la concentración de nutrientes. 
          .col-lg-5: img(src='@/assets/curso/temas/tema1/16.jpg', alt='' style="border-radius: 20px")
        .row(titulo="Formulación de inoculantes")
          .col-lg-7.mb-4.mb-md-0
            p Finalmente, debe formularse el inoculante, el cual se obtiene, comercialmente, en presentación líquida, granular o pulverizada. La primera opción, resulta propicia para aplicaciones directas al momento de sembrar en surco; la segunda, es ideal para aplicaciones directas por debajo de la semilla y, la tercera, para la inoculación de semillas. (Beltrán & Bernal, 2022)
          .col-lg-5: img(src='@/assets/curso/temas/tema1/17.jpg', alt='' style="border-radius: 20px")
    p.mb-5(data-aos='fade-right') Los tipos de biofertilizantes, pueden clasificarse en dos grupos generales: los abonos sólidos y los abonos líquidos. 
    .bg-1-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.tarjeta-flip.color-primario
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/18.jpg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Abonos sólidos:
                p Se encuentran constituidos por material biológico residual, sometido a proceso de descomposición, con la acción conjunta de la macrofauna y de microorganismos del suelo.   
        .col-lg-6(data-aos="fade-left")
          .tarjeta.tarjeta-flip.color-primario
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.jpg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Abonos líquidos:
                p Se encuentran directamente asociados con los residuos excrementales de animales; al emplearlos, se debe garantizar la no colonización por parte de insectos, que puedan llevar a una pérdida del valor potencial del fertilizante.
    p Reconociendo los biofertilizantes, a continuación, se presentan algunos elementos sobre los que se debe profundizar.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        .acordion-bg
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta")
            div(titulo="Funcionamiento")
              p El funcionamiento específico de los biofertilizantes, se centra en el equilibrio nutricional de la planta, a partir de ácidos, hormonas, enzimas, vitaminas, minerales, carbohidratos, aminoácidos y azúcares, que se encuentran en diversas relaciones establecidas entre la planta y el suelo, contribuyendo, además, al fortalecimiento del mecanismo de defensa de la planta.  
            div(titulo="Elaboración")
              p El proceso de elaboración de los biofertilizantes es anaerobio, por lo cual requiere de materiales e ingredientes que garanticen ciertas condiciones específicas para obtener un producto apropiado. 
            div(titulo="Materiales")
              p Entre los materiales comúnmente empleados para la elaboración de biofertilizantes, se encuentran: tanques, toneles de plástico, válvulas metálicas o de PVC, mangueras, abrazaderas y recipientes plásticos complementarios, para el manejo de gases y mezclador.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/20.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right").mb-lg-0.mb-3
        .cajonb-p
          .cajon-b.color-secundario.p-3
            p Entendiendo la pertinencia de la generación de los biofertilizantes, resulta fundamental identificar las ventajas y limitaciones de su producción y uso. Por ejemplo, entre los aspectos positivos se puede encontrar el mejoramiento de la estructura del suelo, la eliminación de excedentes de fertilizantes de síntesis química presentes o el control biológico. En el caso de los biofungicidas de trichoderma, se reduce la podredumbre radical en especies como el frijol, o, con el caso del uso de bacterias fijadoras de nitrógeno, de fosfato y de potasio, es posible incidir, significativamente, en el crecimiento y desarrollo vegetal.
      .col-lg-7.col-12: img(src='@/assets/curso/temas/tema1/21.jpg', alt='' style="border-radius: 30px")
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #FFF0D4')
          p.mb-0 En términos generales, siguiendo a Pedraza et al. (2018), las siguientes ventajas pueden clasificarse como las más relevantes en el uso de los biofertilizantes:
    .bg-1-1.mn.p-5.mb-5
      SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/22.svg' alt='AvatarTop')
          p.text-center.text-white Secreción de hormonas de crecimiento de las plantas.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/23.svg' alt='AvatarTop')
          p.text-center.text-white Protección de las plantas contra el ataque de patógenos.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
          p.text-center.text-white Mejoramiento de la fertilidad del suelo.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
          p.text-center.text-white Posible uso sin necesidad de habilidades especiales.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
          p.text-center.text-white Reducción o eliminación del uso de fertilizantes químicos.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
          p.text-center.text-white Rentabilidad, en comparación con los fertilizantes sintéticos. Los biofertilizantes tienen un costo comparativamente inferior.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
          p.text-center.text-white Restauración del ciclo natural de nutrientes del suelo.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/29.svg' alt='AvatarTop')
          p.text-center.text-white Inclusión de materia orgánica en el suelo.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/30.svg' alt='AvatarTop')
          p.text-center.text-white Protección contra la sequía.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Por otro lado, se identifican, también, ciertas características que pueden clasificarse como limitantes en cuanto al uso de los biofertilizantes y los bioinsumos. En general, entre ellos se destaca la variabilidad de resultados en campo, bajo condiciones de exigencia real, situación que puede ser atribuida a la especificidad negativa de la relación huésped-inoculante, así como también a la variabilidad edáfica, fisicoquímica y a las deficiencias para la determinación de formulaciones, adecuadas, en cada caso específico. Así mismo, el contenido nutricional es comparativamente inferior a los contenidos de los fertilizantes de síntesis química, aunque las deficiencias nutricionales pueden ser suplidas con la adición de residuos domésticos comunes; por ejemplo, con harina de hueso (fósforo), ceniza (potasio) o despojos de palmas (potasio). La presencia de estas condiciones reduce la posibilidad de aceptación por parte de los agricultores, quienes son, a fin de cuentas, los que terminan usando los biofertilizantes.

          br
          br
          span.r--2 Las siguientes características, según Pedraza et al. (2018), se reconocen como los rasgos negativos más importantes de los biofertilizantes: 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/31.png', alt='')
    .bg-1-1.mn.p-5.mb-5
      SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/32.svg' alt='AvatarTop')
          p.text-center.text-white Superación por restricciones ambientales (afectación en desempeño por condiciones del suelo, sequía, entre otros).
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/33.svg' alt='AvatarTop')
          p.text-center.text-white Corta vida útil.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/34.svg' alt='AvatarTop')
          p.text-center.text-white Falta de disponibilidad de las cepas adecuadas.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/35.svg' alt='AvatarTop')
          p.text-center.text-white Falta de disponibilidad de portador adecuado (dificultad para el sostenimiento de la vida útil del biofertilizante).
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/36.svg' alt='AvatarTop')
          p.text-center.text-white Susceptibilidad a altas temperaturas.
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/37.svg' alt='AvatarTop')
          p.text-center.text-white Transporte (demanda logística).
        .tarjeta.bg-tarjeta.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/38.svg' alt='AvatarTop')
          p.text-center.text-white Almacenamiento (demanda de espacio y recipientes adecuados).
    p.mb-5(data-aos='fade-right') A continuación, se presenta todo lo relacionado con biopreparados.
    .tarjeta.card-linea.p-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Resulta importante resaltar, que la forma en la que se elaboran los biopreparados, está alineada con los principios de la economía circular, en tanto haga uso de materiales residuales, originados, en gran parte, en el mismo ciclo productivo de la explotación agropecuaria. Esto permite una disminución de la carga de desechos sobre el entorno, logrando un aprovechamiento oportuno de la materia orgánica, al insertarla, de nuevo, en el sistema productivo, de una manera funcional y determinante.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/39.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Uno de los conceptos de mayor relevancia dentro del proceso de generación de biopreparados, es el de ‘biofábrica’, el cual, tal como su nombre lo indica, es el espacio donde ocurren los diferentes procedimientos asociados a la elaboración de los bioinsumos. En un sentido concreto, la biofábrica es la infraestructura establecida en el espacio productivo para la preparación de abonos líquidos y sólidos, así como de otro tipo de insumos para el control de plagas que también presenten un origen orgánico, como es el caso de los biofungicidas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/40.svg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p La construcción de la biofábrica, debe responder a las condiciones específicas del lugar donde se establece; de este modo, en lugares donde se cuenta con un clima húmedo, se debe diseñar una infraestructura con piso, sea de cemento o tierra, firmemente compactada. Así mismo, en un lugar donde se presenten vientos, se deben construir paredes, y, en un lugar ubicado en zonas de alta pluviosidad, se debe considerar la construcción de un techo.  
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/41.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Las dimensiones de la biofábrica se encuentran determinadas por los objetivos de producción, es decir, se deben considerar variables como la cantidad de insumos a producir, la cantidad de materia prima disponible, las necesidades de los cultivos que se quiere impactar y, lógicamente, las posibilidades económicas con las que se cuenta. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/42.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Uso apropiado de microorganismos
    p.mb-5(data-aos='fade-right') La fauna microbiana del suelo, es la piedra angular del proceso de generación de bioabonos, toda vez que el tipo de productos obtenidos respondan a las posibilidades o condiciones de los microorganismos implicados, para lograr una labor efectiva, o al cumplimiento de los objetivos de intervención, definidos.  
    .tarjeta.p-5.mb-5(style="background-color: #EBF0E4")
      SlyderE(indicadores="")
        .row.justify-content-between.align-items-center
          .col-lg-5.mb-4.mb-md-0
            p Al respecto, resulta crucial identificar el rol indispensable de estos organismos para la fertilidad del suelo y, por tanto, para la productividad de los cultivos. Entre las acciones que se desarrollan en el suelo, se resaltan la descomposición de materia orgánica, la cohesión granular (que proporciona estructura), la protección radicular de parásitos y enfermedades, la retención de nitrógeno o de otros nutrientes, la producción hormonal y la reducción de contaminantes.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/43.svg', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-lg-5.mb-4.mb-md-0
            p El componente de mayor importancia en el suelo, que facilita la acción microbiana, es el carbono, motivo por el cual, el nivel de dióxido de carbono en el suelo es medida de actividad orgánica. En este sentido, al integrar una humedad adecuada, un pH óptimo (5-6), una temperatura entre 15 °C y 35 °C y materia orgánica suficiente, es posible obtener las condiciones óptimas para los microorganismos del suelo.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/44.svg', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-lg-5.mb-4.mb-md-0
            p Entre la fauna microbiana del suelo se encuentran bacterias, algas, protozoos y hongos, aunque no son los únicos organismos del suelo que permiten las condiciones apropiadas para el establecimiento y desarrollo de las plantas. Así mismo, se encuentran organismos de diferentes tamaños o funciones, y todos, en su conjunto, resultan vitales para la formación y la estructuración del suelo, como también para la movilización de nutrientes. Entre estos organismos se encuentran nematodos, artrópodos, anélidos, moluscos, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/45.svg', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-lg-5.mb-4.mb-md-0
            p Entendiendo la relación planta-suelo, es prioritario comprender las funciones que desempeñan los organismos presentes en el suelo, en aras de comprender el impacto y los requerimientos de cada uno de ellos como elementos de relevancia superlativa para la elaboración de biopreparados que suministran las condiciones propicias para el establecimiento vegetal. 
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/46.svg', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-lg-5.mb-4.mb-md-0
            p Las algas, por su parte, son organismos fotosintéticos, mientras que, por el lado de las cianobacterias, estas fijan el nitrógeno atmosférico. Casi la totalidad de organismos del suelo, usan la materia orgánica y/o mineral como fuentes de energía y nutrientes. Algunos organismos se especializan en el rompimiento de la materia orgánica, generando sustancias simples e inorgánicas, susceptibles de ser incorporadas a la reserva mineral o al complejo arcilla, o humus, siendo, incluso, movilizadas por la escorrentía o siendo devueltas a la atmósfera. Así mismo, sucede la generación de relaciones simbióticas entre organismos, como es el caso de micorrizas, cianobacterias, rhizobium, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/47.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Entre las funciones que desempeñan los microorganismos se destacan, además de las anteriormente expuestas, la estabilización de agregados, que evita el arrastre mecánico por erosión (caso del micelio de los hongos); la transformación de la materia orgánica (relación donde se genera relación nitrógeno carbono); la degradación de moléculas complejas de materia orgánica (formación de humus); la solubilización de minerales (disponibilidad para la asimilación por las plantas), y la fijación de nitrógeno. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in"): img(src='@/assets/curso/temas/tema1/48.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-primario.p-4.mb-4(style="background-color: #D3E6B1 ")
          p Las diversas funciones de los microorganismos en el suelo, permiten identificar su rol como intermediarios entre lo biológico y lo mineral, a través de la dinámica metabólica, es decir, de la incorporación de materiales indispensables para el funcionamiento de la biota, convirtiéndose, así, en la base principal de la producción, al fertilizar el suelo.  
    .tarjeta.card-linea.p-5.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p En el campo vegetal, la mayor concentración de microorganismos se encuentra en la zona próxima al sistema radicular, conocido, también, como rizosfera. Allí, la actividad bioquímica de las plantas produce exudados que contienen entre el 10 % y el 50 % de la energía fijada por la fotosíntesis, porcentaje variable, según la especie. Estos exudados son ricos en compuestos carbonatados, siendo la razón por la cual, es el sitio de mayor concentración de microorganismos, pues son aprovechados como alimento por la fauna microbiana que, consecuentemente, suministra minerales a la planta. (Alarcón, et al., 2019)
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/49.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Resulta fundamental comprender que, la actividad mineralizadora de los grupos bacterianos, se encuentra incrementada en la rizosfera; por ejemplo, la actividad asociada con la mineralización del nitrógeno, se desarrolla a un ritmo cuatro veces superior en esta zona, que en el suelo. Igualmente, se resalta la activación metabólica del nitrógeno en todos los niveles que suceden en la rizosfera, implicando desde la fijación, hasta la nitrificación del nitrógeno atmosférico, estableciendo, así, la posibilidad de dejar a disposición, tal nutriente para la planta. 
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/50.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Además de lo mencionado, sucede una acción metabólica complementaria realizada por la microflora presente, fundamental para la consecución de ciertos minerales, donde, por ejemplo, el carbonato cálcico, así como otros compuestos de naturaleza insoluble, logran ser solubilizados. Algo similar sucede con el calcio y otros compuestos que logran ser puestos a disposición de las plantas. (Alarcón, et al., 2019)
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/51.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p La relación de simbiosis establecida entre la planta y los microorganismos, resulta crucial para su desarrollo y supervivencia. Este papel no solo se reduce al nitrógeno y al calcio, también, es determinante en la disponibilidad de fósforo, carbono, hierro, entre otros. En esta doble relación, los microorganismos, a diferencia de beneficiarse de la disponibilidad de nutrientes, aprovechan diferentes exudados generados por el sistema radicular, por ejemplo, mucilagos, ácidos orgánicos, aminoácidos o azúcares. 
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/52.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Entre este tipo de microorganismos, se resalta el papel de las rizobacterias como promotoras de crecimiento vegetal (bacterias tipo PGPR), pues permiten la síntesis de ácido indolacético y otras fitohormonas que tienen una incidencia directa en el desarrollo de las raíces y, principalmente, de los pelos absorbentes. Igualmente, de forma paralela, estas bacterias inhiben el crecimiento de organismos patógenos, además de facilitar la absorción de hierro mediante la secreción de sustancias sideróforas. (Alarcón, et al., 2019)
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/53.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p En síntesis, en el intercambio planta-suelo y, específicamente, en la rizosfera como punto de transición específico, existe un diverso tipo de relaciones con los microorganismos que depende de su naturaleza. De esta forma, es posible encontrar una interacción tanto por el consumo de alimento residual obtenido de las raíces de la planta (saprofítica), como por generar enfermedades (parasitaria), o por el intercambio de beneficios a la planta por alimento (simbiótica). 
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/54.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Entendiendo la relación simbiótica, como aquella que se pretende promover con los biofertilizantes; es necesario reconocer los tres tipos de microorganismos que logran establecer esta interacción con la planta: las bacterias promotoras de crecimiento vegetal, los hongos formadores de micorrizas y las bacterias fijadoras de nitrógeno atmosférico.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/55.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
    p.mb-5(data-aos='fade-right') Entre los microorganismos más empleados en el contexto de la elaboración de bioinsumos, se encuentran: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #D3E6B1")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h4.fst-italic Lactobacillus sp
              p Cuenta con la capacidad de producir una amplia diversidad de componentes químicos con propiedades antifúngicas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/56.jpg')})`}")
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #ADDBD5")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h4.fst-italic Streptomyces sp
              p Cuenta con capacidad de control de fitopatógenos mediante la producción de antibióticos. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/57.jpg')})`}")
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #D3E6B1")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h4.fst-italic Aspergillus niger
              p Hongo que, a través de la producción de hifas (conidióforos), puede producir ácidos orgánicos que logran mejorar el proceso de disponibilidad de nutrientes para las plantas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/58.jpg')})`}")
    p.mb-5(data-aos='fade-right') A continuación, se presenta la clasificación de algunos microorganismos, de acuerdo con dos propiedades destacadas.
    div(style="background-color: #F6F6F6").mn.p-5.mb-5
      //TODO! ajustar el componente 
      .row.justify-content-center
        .col-lg-6
          .dots-grandes
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema1/59.svg', alt='Texto que describa la imagen')
              .tarjeta.bg-white.p-3(x="28%" y="58%" numero="1" style='min-width: 350px').d-flex.justify-content-center
                img(src='@/assets/curso/temas/tema1/n1.svg', alt='' style="width: 70px ").me-3
                .contenido 
                  .h6.mb-2 Microorganismo
                  p #[em Bacillus thuringiensis]
                    br
                    |#[em Paecilomyces lilacinus]
              .tarjeta.bg-white.p-3(x="68.7%" y="58%" numero="2" style='min-width: 500px').d-flex.justify-content-center
                img(src='@/assets/curso/temas/tema1/n2.svg', alt='' style="width: 70px ").me-3
                .contenido 
                  .h6.mb-2 Microorganismo
                  .row
                    .col-lg-5
                      p #[em Pseudomonas Lactobacillus]
                        br
                        |#[em Azotobacter]
                        br
                        |#[em Azospirillum]
                        br
                        |#[em Rhizobium]
                    .col-lg-3
                      p #[em Saccharomyces]
                        br
                        |#[em Candida]
                        br
                        |#[em Trichoderma]
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Aprovechamiento de subproductos de unidades agropecuarias
    img(src='@/assets/curso/temas/tema1/60.svg', alt='').mb-5
    p.mb-5(data-aos='fade-right') El desarrollo de procesos de generación de bioinsumos, implica el aprovechamiento de materia orgánica que, en gran proporción, se encuentra en los elementos residuales de las actividades productivas agropecuarias. Estos subproductos cuentan con composiciones dotadas de macromoléculas orgánicas que presentan un alto grado de potencial energético, almacenado en forma de energía química. A los subproductos con este potencial de liberación de energía química, se les conoce con el nombre de biomasa. 
      br
      br
      | La biomasa se clasifica en dos categorías en cuanto a disponibilidad energética, biomasa de fuentes primarias y biomasa de fuentes secundarias (Alarcón et al., 2019).
    .bg-1-1.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.tarjeta-flip.color-primario
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/61.jpg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Biomasa de fuente primaria:
                p No hace parte del material residual de actividades agropecuarias, agroindustriales o, en general, del uso por parte de los humanos. En este sentido, corresponde a la biomasa, cuya generación se encuentra específicamente orientada hacia la producción energética. 
        .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.tarjeta-flip.color-primario
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/62.jpg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h4 Biomasa de fuente secundaria:
                p Corresponde al material residual de actividades agropecuarias, agroindustriales y, en general, del uso de productos por parte de los humanos, susceptibles de ser aprovechados para la conversión energética.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right").mb-lg-0.mb-3
        p.mb-0 En general, la extracción energética requerida de la biomasa, consiste en la elaboración de bioinsumos agrícolas y se puede llevar a cabo con procedimientos por “vía seca” o “vía húmeda”. 
      .col-lg-7.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/63.jpg', alt='')
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/64.svg', alt='Texto que describa la imagen')
        h2.text-center Procedimientos por “vía seca”:
        p.text-center Consisten en la generación de procesos de carácter fisicoquímico, que logra la transformación del material a producto, mediante el sometimiento a altas temperatura por medio de métodos como la carbonización, la gasificación, la pirólisis y la combustión directa.  
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/65.svg', alt='Texto que describa la imagen')
        h2.text-center Procedimientos por “vía húmeda”:
        p.text-center Consisten en la generación de procesos de carácter bioquímico que tienen ocurrencia en medios acuosos y que son facilitados por la mediación de microorganismos. Los métodos empleados para lograr estos procedimientos son: la fermentación alcohólica y la biodigestión anaeróbica (Alarcón, et al., 2019).
    .bloqueg-size
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img.w-md-100(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/66.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4.w-lg-75
          p.mb-0 Enfatizando en los procesos bioquímicos mencionados, la fermentación alcohólica es un mecanismo mediado por levaduras que permiten la degradación de azúcares fermentables; esto genera etanol, como resultado obtenido de la destilación fraccionada. Por el lado de la biodigestión anaerobia, se logra un proceso de degradación de la materia orgánica implicada, obteniendo, como resultado, biogás, compuesto por gas metano, entre 50 % - 60 %, dióxido de carbono en un 30 %, y, por sobrenadante y lodos de alto valor fertilizante, ricos en nutrientes.
    p.mb-5(data-aos='fade-right') Pasando a los mecanismos de más amplia utilización y versatilidad en cuanto a la generación de bioinsumos, o del aprovechamiento de biomasa, el compostaje se presenta como una de las principales alternativas para la producción de bioabonos orgánicos, empleando residuos agropecuarios. 
    SlyderE(indicadores="").mb-5
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-4
            p  Este proceso consiste en la descomposición aeróbica biológica de la biomasa, mediante la acción de poblaciones mixtas de microorganismos. La mezcla de materiales que configura el sustrato a degradar, se compone de estiércol de animales de granja (aves, vacas, cerdos, caballos, entre otros), residuos de cosecha y residuos domésticos. Durante el proceso de degradación, se reduce el peso general de la mezcla en casi un 50 %, lo que se debe a la evaporación y digestión de los microorganismos. (Acosta & Peralta, 2015)
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/67.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-4
            p  No todo el residuo orgánico puede ser utilizado para el compostaje. El objetivo de la generación de biofertilizantes, o de cualquier bioinsumo, es su utilización en un medio de cultivo vegetal, con el propósito de impactar, positivamente, sobre el cultivo. En este sentido, debe ser debidamente seleccionado el material a aprovechar, garantizando la eliminación del riesgo de utilización de materiales contaminados o de la presencia de trazas de agentes dañinos para las plantas, el suelo, el agua, o, incluso, que implique un riesgo para el consumidor final, de los productos de cosecha obtenidos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/68.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-4
            p  Para llevar a cabo un proceso de selección ajustado a las necesidades de la biofábrica, es necesario establecer un sistema de clasificación apropiado. Por tal motivo, resulta fundamental considerar los siguientes parámetros: origen o actividad emisora, toxicidad o peligrosidad, y tamaño o naturaleza química de los materiales emisores. (Alarcón, et al., 2019)
              br
              br
              |A partir de la consolidación de características asociadas a cada parámetro, su respectivo análisis integrado, y la identificación concreta de ausencia de riesgo para el producto final, puede tomarse la decisión de definir al material respectivo, como material aprovechable, para la elaboración de bioabono.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/69.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-4
            p Los residuos orgánicos de más amplia utilización en el proceso de compostaje pueden ser definidos en tres categorías generales que resultan determinantes para la intencionalidad de producción. Estas categorías se encuentran asociadas a la velocidad de degradación y son: 
            ul.lista-ul--color
              li
                i.number-1
                | Residuos de rápida descomposición (hojarasca, recorte de césped y similares).
              li
                i.number-2
                | Residuos de lenta descomposición (fruta, verdura, café, entre otros).
              li
                i.number-3
                | Residuos de muy lenta descomposición (cáscaras de huevo, cáscaras de frutos secos, hueso de fruta, entre otros).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/70.jpg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') El compostaje se encuentra constituido por diferentes fases que van, desde la selección del material aprovechable, hasta la estabilización del sustrato final. 
    TabsA.color-secundario.mb-5
      .tarjeta.p-5(titulo="Primera fase" style="background-color: #D3E6B1")
        p El inicio del proceso está marcado por la adaptación de los microorganismos a las nuevas condiciones ambientales de la mezcla, siendo las bacterias mesófilas, los primeros microorganismos en actuar, configurando la fase que guarda el mismo nombre, fase mesófila. La actividad microbiana en esta fase genera un incremento de la temperatura de la pila compostera mediante la emanación de vapor de agua, siendo evidente a la observación simple y directa.
      .tarjeta.p-5(titulo="Segunda fase" style="background-color: #D3E6B1")
        p Posteriormente, se inicia la fase termófila, o de higienización, que puede alcanzar temperaturas de 75°C y una alta acidez producto de la degradación microbiana de materiales simples presentes en la materia orgánica. Este tipo de condiciones de temperatura y de pH, permite la presencia de actinomicetos termofílicos que actúan incrementando la velocidad de degradación del sustrato. Tal aumento de temperatura, permite, a su vez, la eliminación de agentes patógenos del suelo que pueden persistir en el material utilizado.
      .tarjeta.p-5(titulo="Tercera fase" style="background-color: #D3E6B1")
        p Seguidamente, se presenta la fase de enfriamiento del material, también conocida como fase mesófila II, donde sucede una disminución de la actividad microbiana y, por tanto, de la temperatura de la pila compostera. Producto del cambio de temperatura, surgen, nuevamente, microorganismos mesófilos encargados de degradar la lignina y celulosa que aún pueda encontrarse en el sustrato. Después de esto, se llega a la fase de maduración, conocida como la fase más lenta de todas, siendo el momento donde se logra la estabilización del sustrato, adquiriendo un color negro o marrón oscuro.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Riesgos asociados a la seguridad en la biofábrica
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/71.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La preparación de bioinsumos, tiene lugar en la biofábrica, espacio donde suceden las diferentes actividades requeridas para el desarrollo de los variados procesos fisicoquímicos y bioquímicos, relacionados. Lógicamente, cada una de estas actividades es llevada a cabo por los operarios de la fábrica, siendo, en su mayoría, actividades que implican un contacto directo del personal responsable, con la materia prima y con las herramientas, utensilios y maquinarias, que se requieren para el procesamiento.
        .cajon.color-primario.p-4.mb-4(style="background-color: #D3E6B1 ")
          p.mb-0 Es necesario reconocer el tipo de herramientas y utensilios empleados en las biofábricas, tanto para lograr la consolidación de la mezcla de sustrato, como para su manipulación. A continuación, se presentan los principales implementos.  
    SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/72.svg' alt='AvatarTop')
        p.text-center.text-white Machete
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/73.svg' alt='AvatarTop')
        p.text-center.text-white Canecas
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/74.svg' alt='AvatarTop')
        p.text-center.text-white Baldes
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/75.svg' alt='AvatarTop')
        p.text-center.text-white Regaderas 
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/76.svg' alt='AvatarTop')
        p.text-center.text-white Mangueras 
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/77.svg' alt='AvatarTop')
        p.text-center.text-white Carretillas
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/78.svg' alt='AvatarTop')
        p.text-center.text-white Palas
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/79.svg' alt='AvatarTop')
        p.text-center.text-white Azadones
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/80.svg' alt='AvatarTop')
        p.text-center.text-white Rastrillos
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/81.svg' alt='AvatarTop')
        p.text-center.text-white Básculas
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/82.svg' alt='AvatarTop')
        p.text-center.text-white Máquinas cortadoras (picadora, molinos, entre otras)
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/83.svg' alt='AvatarTop')
        p.text-center.text-white Termómetros 
    p.mb-5(data-aos='fade-right') La manipulación y uso de cada uno de estos implementos, representa un posible riesgo para el operario. Por esta razón, se hace imperativo definir protocolos de manipulación apropiada con un plan de gestión del riesgo para la biofábrica. Este protocolo no solo relaciona los riesgos asociados a las herramientas y utensilios, también, integra los riesgos asociados a la manipulación de material orgánico en cuanto a una posible afectación a la salud humana. 
    .tarjeta.p-5.mb-5(style="background-color: #E5F1FE ")
      .row.justify-content-center.mb-5
        .col-lg-8
          .dots-grandes
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema1/85.svg', alt='Texto que describa la imagen')
              .tarjeta.bg-white.p-3(x="51%" y="14%" numero="1" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n1.svg', alt='' style="width: 70px").me-3
                p.mb-0 Identificar y modelar factores de riesgo.
              .tarjeta.bg-white.p-3(x="78.5%" y="29.5%" numero="2" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n2.svg', alt='' style="width: 70px").me-3
                p.mb-0 Estimar el riesgo.
              .tarjeta.bg-white.p-3(x="83.4%" y="61%" numero="3" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n3.svg', alt='' style="width: 70px").me-3
                p.mb-0 Diseñar estrategia.
              .tarjeta.bg-white.p-3(x="62%" y="84.9%" numero="4" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n4.svg', alt='' style="width: 70px").me-3
                p.mb-0 Validación operativa.
              .tarjeta.bg-white.p-3(x="30.5%" y="82.5%" numero="5" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n5.svg', alt='' style="width: 70px").me-3
                p.mb-0 Aprobar.
              .tarjeta.bg-white.p-3(x="12.6%" y="56.5%" numero="6" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n6.svg', alt='' style="width: 70px").me-3
                p.mb-0 Implementar.
              .tarjeta.bg-white.p-3(x="20.4%" y="27.5%" numero="7" style="min-width: 380px").d-flex.align-items-center.justify-content-center
                img(src='@/assets/curso/temas/tema1/n7.svg', alt='' style="width: 70px").me-3
                p.mb-0 Hacer seguimiento.
    p.mb-5(data-aos='fade-right') En cuanto a la construcción de los protocolos, es importante partir de la identificación del riesgo manifiesto al cual se puede exponer el operario, durante el proceso de elaboración de los bioinsumos.
    .bg-1-1.mn.p-5.mb-5
      .tarjeta.card-linea.p-5.mb-5
        SlyderA(tipo='b')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p Por mencionar algunos de los riesgos asociados a la manipulación y uso de herramientas y utensilios, o a la exposición a material residual orgánico, se encuentran: posibles heridas por objetos cortantes, lesiones musculares o articulares, posibles intoxicaciones, e inoculación de bacterias y parásitos. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/86.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p En este sentido, resulta fundamental identificar cada posible riesgo, sus implicaciones y la forma específica de evitarlos. Esto se logra con la aplicación de medidas correctivas y preventivas enfocadas en la promoción de hábitos apropiados durante la operación. La identificación oportuna requiere de una valoración precisa de las posibilidades de infraestructura y de logísticas, presentes en cada biofábrica, teniendo en cuenta, claro está, los objetivos de producción.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/87.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p Si bien el riesgo es una condición relativa a las características del lugar y al proceso específico a desarrollar, en la medida de establecer las condicionantes tanto de amenaza como de vulnerabilidad, existen unos elementos de prevención general y de amplio conocimiento que resultan pertinentes frente a cualquier tipo de biofábrica emprendida y a sus objetivos de producción, los elementos de protección personal. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/88.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p Esos elementos resultan indispensables para la elaboración de bioinsumos, por ejemplo, son necesarias botas de caucho, overoles, guantes, caretas, o tapabocas en su defecto, gafas de protección, protectores auditivos (en casos de uso de maquinaria picadora), protectores de cabeza tipo casco y delantales plásticos. 
                br
                br
                |Resulta apenas lógico establecer la presencia de estos elementos en la fábrica, aunque son solo una de las partes importantes en el proceso de gestión del riesgo o de accidentabilidad. Así, más allá de proveer estos implementos, resulta fundamental su correcto uso frente a cada situación por parte del operario, razón por la cual, se debe establecer un programa de capacitación oportuno y periódico, que promueva las prácticas que garanticen una correcta implementación. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/89.jpg', alt='Texto que describa la imagen' style='border-radius: 10px;')
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .cajonb-p
            .cajon-b.color-secundario.p-3
              p.mb-5 A continuación, siguiendo lo establecido por el Instituto Colombiano Agropecuario (2015), se identifican algunas recomendaciones que deben ser consideradas a la hora de establecer una biofábrica y sus actividades de producción, para disminuir los posibles riesgos emergentes. 
      .col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/90.png', alt='')
    SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/91.svg' alt='AvatarTop')
        p.text-center.text-white Selección de sitio cubierto, seco y firme.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/92.svg' alt='AvatarTop')
        p.text-center.text-white Señalización de espacios y áreas de proceso.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/93.svg' alt='AvatarTop')
        p.text-center.text-white Selección y acopio de residuos orgánicos.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/94.svg' alt='AvatarTop')
        p.text-center.text-white Alistamiento de materiales, insumos y herramientas.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/95.svg' alt='AvatarTop')
        p.text-center.text-white Triturado de residuos de consistencia gruesa hasta obtener un tamaño ideal (1-3 cm).
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/96.svg' alt='AvatarTop')
        p.text-center.text-white Pesado de cantidades de residuos e insumos a emplear, deben contar con registro de la información respectiva.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/97.svg' alt='AvatarTop')
        p.text-center.text-white Vacunación contra el tétano, al personal encargado de manipulación.
      .tarjeta.bg-tarjeta.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/98.svg' alt='AvatarTop')
        p.text-center.text-white Verificación de procedencia de materia prima externa, como garante de inocuidad (presencia de organismos patógenos y fitopatógenos, metales pesados y otros).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/99.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-0 En términos generales, la operación de la biofábrica se configura como una posibilidad real de generación de alternativas para la fertilización apropiada de cultivos, susceptible de posicionarse como una opción productiva, garante de las condiciones de eficiencia, demandadas para alcanzar un nivel de competitividad en el mercado agrícola. Su operación está fundamentada en el principio de la economía circular, es decir, a partir de las consideraciones de capacidad de carga del ecosistema suelo, al que se integra, nuevamente, en el ciclo productivo, aquellos subproductos con potencial de aprovechamiento energético. 
          br
          |Se le invita a observar el siguiente video, sobre la relación planta–suelo, en la elaboración de bioabonos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
