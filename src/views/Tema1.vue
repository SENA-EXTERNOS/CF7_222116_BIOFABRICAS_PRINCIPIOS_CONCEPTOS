<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Biofábrica como lugar de producción de bioabonos
    p.mb-5(data-aos='fade-right') Para dar inicio al componente formativo se presenta, a continuación, algunos elementos relacionados con las biofábricas.
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.jpg', alt='' style="border-radius: 20px ")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--agua")
          div(titulo="Primer elemento ")
            p.mb-0 El concepto de biofábrica se configura, en el actual panorama productivo agrario, como una alternativa productiva frente a las adversidades generadas desde la producción convencional que ha empleado, masiva e indiscriminadamente, la utilización de insumos de síntesis química. Esto ocasiona una progresiva alteración de los agroecosistemas, sobretodo, al seguir lecturas incorrectas de las necesidades y requerimientos del espacio productivo agrícola. 
          div(titulo="Segundo elemento")
            p.mb-0 Desde este reconocimiento, se exponen apartados relacionados con la producción de bioabonos, el uso de microorganismos, el aprovechamiento de residuos de unidades agropecuarias y con algunos riesgos asociados a la generación de biofertilizantes.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Biofábrica y producción de bioabonos
    p.mb-5(data-aos='fade-right') Para profundizar sobre los aspectos relacionados con las biofábricas, a continuación, se describe su relación con los fertilizantes agrícolas.
    SlyderE(indicadores="")
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Los fertilizantes agrícolas son sustancias que presentan un origen mineral. Son producidos desde la explotación de yacimientos naturales o desde la industria agroquímica, su objetivo es subsanar las deficiencias nutricionales manifiestas en los suelos con vocación productiva. Los fertilizantes se emplean luego de una interpretación apropiada de las necesidades requeridas, en aras de proporcionar un suministro acorde a las condiciones del suelo y a los requerimientos de la planta que se pretende cultivar. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/2.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Frente a este panorama, las condiciones usualmente encontradas en el escenario productivo, presentan desfases asociados a la interpretación inapropiada de las necesidades del suelo, estableciendo formulaciones desproporcionadas que alteran el equilibrio dinámico del suelo en niveles no oportunos para la plantación respectiva, generando, así, entornos tóxicos para el material vegetal.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/3.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p En el contexto de la agricultura convencional tecnificada, el complejo de fertilizantes Nitrógeno-Fósforo-Potasio, o NPK, se establece como el grupo más ampliamente utilizado debido al aporte de tres macronutrientes indispensables para el desarrollo de las plantas. Al respecto del uso de estos fertilizantes inorgánicos, se reconoce el impacto positivo asociado a su aplicación al suelo para la producción agrícola. Sin embargo, también se reconoce un impacto negativo y acumulativo vinculado al tipo de utilización, determinado por el nivel de intensidad y el manejo de proporciones que derivan, entre otras consecuencias, en la supresión de enzimas necesarias para el ciclado de nutrientes en el suelo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/4.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p La utilización de fertilizantes en dosificaciones erróneas genera un impacto ambiental notable en el suelo, el agua y el aire. Esto ocasiona la degradación progresiva de los escenarios productivos y del agroecosistema relacionado, lo que deriva en procesos de acumulación de materiales inorgánicos y en la acidificación del suelo, la eutrofización de fuentes hídricas y la emanación de gases efecto invernadero. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/5.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Entre otras estimaciones, se reconoce que del 15% al 50% de los fertilizantes nitrogenados son lixiviados a las capas profundas del suelo y a corrientes de aguas superficiales, favoreciendo la eutrofización en un fenómeno definido como proceso de deterioro de la calidad del agua a razón del enriquecimiento de nutrientes. El nitrógeno, junto a fósforo, son, fundamentalmente, causantes del deterioro: el primero forma sales de nitrato o amonio, el segundo fosfatos (Beltrán & Bernal, 2022).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/6.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Esta alteración genera un tipo de estimulación para el crecimiento de algas que, en la medida de su proliferación, imposibilitan el ingreso de luz, desencadenando, así, una reducción del nivel de fotosíntesis. En consecuencia, el ecosistema acuático se convierte en un ambiente anaerobio por cuenta del incremento en la concentración de gases (metano, dióxido de carbono y sulfuro de hidrógeno), configurando un ambiente hostil para la vida y, por lo tanto, provocando un impacto directo sobre la biodiversidad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/7.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Los fertilizantes fosforados, por otro lado, cuyo origen es la roca fosfórica, también pueden presentar riesgos para la salud, ambiental y humana, asociados a la posible contaminación cruzada por elementos menores. Entre algunas de las trazas que se han identificado en estos fertilizantes se encuentra, por ejemplo, el uranio, elemento conocido por su potencial de toxicidad química y radiotoxicidad. Este tipo de elementos puede estar disponible para las plantas, principalmente en suelos ácidos, presentando un riesgo potencial para la bioacumulación en la cadena trófica (Beltrán & Bernal, 2022).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/8.jpg', alt='Texto que describa la imagen')
      .row.g-0
        .col-md-6.mb-4.mb-md-0(style='background-color: #f2f8e8; ')
          .p-5
            p Además de las condiciones de degradación ambiental y de los potenciales riesgos a la salud humana, el uso de dosis inapropiadas de fertilizantes afecta su efectividad, lo que incide, directamente, en el incremento de los costos de producción, en tanto hay una mayor demanda de insumos para lograr subsanar las deficiencias fisicoquímicas del suelo. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/9.jpg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        p La biotecnología ofrece la posibilidad de reemplazar insumos sintéticos por insumos de origen biológico como, por ejemplo, los biofertilizantes, los cuales son, básicamente, sustancias contenedoras de microorganismos benéficos para el suelo, cuya capacidad es promover el crecimiento y desarrollo de las plantas, a través de la aplicación en semillas, suelos o superficies foliares. La producción de este tipo de insumo sucede a partir del cultivo de aquellos microorganismos que, regularmente, se encuentran en el suelo en bajas proporciones. Así mismo, su utilización, ha demostrado incrementar la capacidad de absorción de la planta de agua y nutrientes del suelo, dada la estimulación de su sistema radicular (Beltrán & Bernal, 2022).
          br
          br
          | Las poblaciones microbianas utilizadas para la producción de este tipo de insumos pueden mejorar la salud y la calidad del suelo. Estas poblaciones están conformadas por especies seleccionadas que incluyen, entre otros, a rizobacterias, organismos capaces de inducir el crecimiento, a cianobacterias, capaces de fijar nitrógeno, o a bacterias y hongos, supresores de enfermedades (Beltrán & Bernal, 2022).
    .tarjeta.card-linea.p-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="")
          .col-lg-7.mb-4.mb-md-0
            p
          .col-lg-5: img(src='@/assets/curso/temas/tema1/11.jpg', alt='' style="border-radius: 20px")

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
