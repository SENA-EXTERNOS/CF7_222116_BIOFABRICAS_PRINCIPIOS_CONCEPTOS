<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        .cajonb-p
          .cajon-b.color-secundario.p-3
            p.mb-5 Bienvenido a este componente formativo, donde se abordarán elementos asociados a las biofábricas como escenarios de desarrollo biotecnológico, para el establecimiento de procesos productivos agrícolas, que proporcionen las condiciones exigidas por las plantas. Para este propósito, se definirá el concepto de ‘biofábrica’, teniendo en cuenta su amplitud, es decir, como lugar en el cual, además de generar procesos de mejoramiento y propagación vegetal, se puede lograr la generación de bioinsumos. 
              br
              |Así mismo, se estudiarán, tanto los contenidos de interés para la comprensión del papel de los microorganismos en la generación de bioabonos, como todo lo relacionado con el aprovechamiento oportuno de subproductos de la unidad agropecuaria. Todo lo anterior, siguiendo los principios de economía circular, teniendo en cuenta que, en el proceso, se asumen riesgos que deben ser interpretados y prevenidos para lograr el objetivo de producción. 

      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.jpg', alt='' style="border-radius: 20px")
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
