<template>
  <div id="app" class="skin-blue">
    <header-component></header-component>

    <aside-component></aside-component>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper" style="min-height: 946px;">
      <router-view/>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderComponent from "@/components/Header.vue";
import AsideComponent from "@/components/Aside.vue";
import FooterComponent from "@/components/Footer.vue";

@Component({
  components: {
    HeaderComponent,
    AsideComponent,
    FooterComponent
  }
})
export default class extends Vue {}
</script>

<style lang="scss">
.skin-blue {
  .content-wrapper {
    margin-left: 46px;
  }
}
</style>
