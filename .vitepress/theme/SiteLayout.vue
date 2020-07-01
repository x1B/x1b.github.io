<template>
  <main class="content">
    <SiteHeader />
    <Content />
    <SiteFooter />
  </main>
  <SiteNav />
</template>

<script>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import SiteNav from './SiteNav.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    SiteNav
  }
}
</script>
