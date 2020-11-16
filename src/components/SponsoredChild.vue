<template>
  <div>
    <div class="container">
      <v-layout row wrap class="white pb-10">
        <v-flex md12>
          <v-container>
            <div class="text-md-center">
              <v-layout row wrap align-center justify-center>
                <v-flex md6>
                  <div class="text-md-center">
                    <h2 class="headline font-weight-bold text-uppercase">The children</h2>
                    <h5 class="subtitle-1 grey--text text--darken-1 mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus.
                    </h5>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-container>

          <v-container>
            <v-row dense>
              <v-col
              :key="key"
              cols="4"
              class="px-4"
              v-for="(children, key) in children">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    tile
                    flat
                    class="mx-auto mb-10"
                    color="grey lighten-2"
                    max-width="600">
                    <v-img
                      height="410"
                      :aspect-ratio="16/9"
                      :src="children.avatar">
                      <v-expand-transition>
                        <div
                          v-if="hover" 
                          class="grey darken-1 v-card--reveal headline white--text text-center pt-10"
                          style="height: 100%;">
                          {{ children.name }}
                          <p class="subtitle-2 text-uppercase font-weight-light" style="letter-spacing: 2px !important;">
                            {{ children.position }}
                          </p>
                          <p class="caption font-weight-light  px-3" style="letter-spacing: 2px !important;">
                            {{ children.description }}
                          </p>
                          <v-row
                            align="center"
                            justify="space-around">
                            <v-btn
                              text
                              light
                              class="hover-secondary">
                              Sponsor
                              <v-icon light>
                                mdi-chevron-right
                              </v-icon>
                            </v-btn>

                            <v-btn
                              text
                              light
                              class="hover-secondary">
                              Learn More
                            </v-btn>
                          </v-row>
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import actions from '../api/actions'

export default {
  name: 'sponsored-child',
  data: () => ({
    children: [
      {
        name: 'John Doe',
        position: 'Innkeeper CEO',
        avatar: 'https://images.pexels.com/photos/4026110/pexels-photo-4026110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'Veniam rerum saepe unde nihil possimus quibusdam esse accusamus.'
      },
      {
        name: 'John Doe',
        position: 'Innkeeper CEO',
        avatar: 'https://images.pexels.com/photos/2775561/pexels-photo-2775561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Veniam rerum saepe unde nihil possimus quibusdam esse accusamus.'
      },
      {
        name: 'John Doe',
        position: 'Innkeeper CEO',
        avatar: 'https://images.pexels.com/photos/2119500/pexels-photo-2119500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'Veniam rerum saepe unde nihil possimus quibusdam esse accusamus.'
      },
      {
        name: 'John Doe',
        position: 'Innkeeper CEO',
        avatar: 'https://images.pexels.com/photos/1484796/pexels-photo-1484796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'Veniam rerum saepe unde nihil possimus quibusdam esse accusamus.'
      }
    ]
  }),
  methods: {
    async getSponsoredChildrenDisplay () {
      this.isLoading = true

      try {
        const response = await actions.getSponsoredChildrenDisplay('profile/7ef79d2ac8c64a239f92527261ab333b/donor/children/en/NamedPrivate?svc=464424')
        this.children = response.data.data
        this.meta = response.data.meta
        setTimeout(() => { this.isLoading = false }, 2000)
      } catch (error) {
        this.error = error
        setTimeout(() => { this.isLoading = false }, 2000)
      }
    }
  },
  created () {
    this.getSponsoredChildrenDisplay()
  }
}
</script>
