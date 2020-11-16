<template>
  <v-app id="inspire">
    <v-app-bar
      dark
      flat
      fixed
      color="white"
      app>
      <div class="d-flex align-center">
        <a href="/" class="display-1 font-weight-black font-italic">
          <span class="secondary--text">{{ appName }}</span>
        </a>
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <template v-for="(button, key) in buttons">
          <v-btn
            text
            light
            :key="key"
            class="hover-nav"
            :to="button.path">
            {{ button.name }}
          </v-btn>
        </template>
      </v-toolbar-items>
      <v-btn icon
        color="secondary">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main class="grey lighten-5 scroll-y">
      <router-view></router-view>
    </v-main>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    
    <v-footer
    padless
    color="secondary"
    class="secondary">
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-card
          flat
          tile
          class="secondary white--text text-center pt-10">
          <v-card-text>
            <v-btn
              text
              tile
              small
              :key="key"
              @click.prevent="toPage(item.path)"
              v-for="(item, key) in items"
              class="mx-4 white--text font-weight-light">
              {{ item.name }}
            </v-btn>
          </v-card-text>

          <v-card-text class="caption white--text pt-0 px-12 font-weight-light">
            <h2 class="display-1 font-weight-bold my-4">{{ appName }}</h2>
            <div class="mx-auto" style="width: 50%;">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
            </div>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            <v-btn
              text
              tile
              :key="social.title"
              v-for="social in social"
              class="mx-4 white--text font-weight-light">
              <v-icon dark class="mr-2">{{ social.icon }}</v-icon>{{ social.title }}
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text class="caption white--text">
            Copyright &copy; {{ new Date().getFullYear() }} {{ appName }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    fab: false,
    appName: process.env.VUE_APP_NAME,
    buttons: [
      { id: '0', name: 'About Us', path: '/' },
      { id: '2', name: 'Donate', path: '/' },
      { id: '3', name: 'Contact Us', path: '/' },

    ],
    items: [
      { name: 'About Us', path: '/' },
      { name: 'Donate', path: '/' },
      { name: 'Contact Us', path: '/' },
      { name: 'Terms and Conditions', path: '/' },
      { name: 'Privacy Policy', path: '/' }
    ],
    social: [
      { title: 'Facebook', icon: 'mdi-facebook' },
      { title: 'Twitter', icon: 'mdi-twitter' }
    ]
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style>
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none !important;
  }
</style>