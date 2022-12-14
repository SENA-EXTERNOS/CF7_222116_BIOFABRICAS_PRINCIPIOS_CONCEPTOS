<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El reconocimiento de la posibilidad de generar biofertilizantes y, en general, de bioinsumos puede representar una ventaja comparativa y competitiva para la producción agrícola. Siguiendo el objetivo de proporcionar un mejoramiento en las condiciones de fertilidad del suelo desde la recuperación de características naturales, se puede aprovechar el material residual y los subproductos agropecuarios, siendo reinsertados al sistema productivo, de forma estratégica, en un ciclo que pueda significar el fortalecimiento del sistema productivo. Así mismo, esto contribuye al desarrollo de la autonomía en cuanto a la consecución de insumos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
