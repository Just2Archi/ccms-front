<template>
  <v-app light>
    <v-navigation-drawer :mini-variant.sync="miniVariant" v-model="drawer" fixed app>
      <v-list>
        <v-list-group>
          <v-list-tile slot="item">
            <v-list-tile-action>
              <v-icon>apps</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Kategorijos</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list>
            <v-list-group v-for="category in categories">
              <v-list-tile slot="item">
                <v-list-tile-content>
                  <v-list-tile-title>{{ category.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for="subcategory in category.subcategories" router exact :to="subcategory.href">
                <v-list-tile-content>
                  <v-list-tile-title>-- {{ subcategory.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-list-group>
        <v-list-tile router to="/posts">
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Straipsniai</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/photos">
          <v-list-tile-action>
            <v-icon>photo</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Fotoarchyvas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/authors">
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Autoriai</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/tags">
          <v-list-tile-action>
            <v-icon>label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Žymės</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img class="logo" src="/logo.jpg" alt="ClimateCMS">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom center offset-y>
        <v-avatar slot="activator" class="red darken-3">
          <span class="white--text headline" v-if="user && user.username">{{ user.username.charAt(0).toUpperCase() }}</span>
        </v-avatar>
        <v-list>
          <v-list-tile router to="/" exact>
            <v-list-tile-title>Profilis</v-list-tile-title>
          </v-list-tile>
          <v-list-tile router to="/admin" exact v-if="user && user.admin">
            <v-list-tile-title>Administravimas</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-title>Atsijungti</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        miniVariant: false,
        categories: [
          {
            title: 'Žinios gyvai',
            colorClass: 'red darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/zinios-gyvai'
              },
              {
                title: 'Naujausios',
                href: '/categories/zinios-gyvai/naujausios'
              },
              {
                title: 'Populiariausios',
                href: '/categories/zinios-gyvai/populiariausios'
              },
              {
                title: 'Orų prognozė',
                href: '/categories/zinios-gyvai/oru-prognoze'
              },
              {
                title: 'Renginiai',
                href: '/categories/zinios-gyvai/renginiai'
              },
              {
                title: 'Horoskopai',
                href: '/categories/zinios-gyvai/horoskopai'
              },
              {
                title: 'TV programa',
                href: '/categories/zinios-gyvai/tv-programa'
              },
              {
                title: 'Komentarai',
                href: '/categories/zinios-gyvai/komentarai'
              }
            ]
          },
          {
            title: 'Lietuvos Diena',
            colorClass: 'blue darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/lietuvos-diena'
              },
              {
                title: 'Aktualijos',
                href: '/categories/lietuvos-diena/aktualijos'
              },
              {
                title: 'Nelaimės',
                href: '/categories/lietuvos-diena/nelaimes'
              },
              {
                title: 'Kriminalai',
                href: '/categories/lietuvos-diena/kriminalai'
              },
              {
                title: 'Fotoalbumai',
                href: '/categories/lietuvos-diena/fotoalbumai'
              },
              {
                title: 'Gamta',
                href: '/categories/lietuvos-diena/gamta'
              }
            ]
          },
          {
            title: 'Verslas',
            colorClass: 'cyan darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/verslas'
              },
              {
                title: 'Rinkos pulsas',
                href: '/categories/verslas/rinkos-pulsas'
              },
              {
                title: 'Įžvalgos ir nuomonės',
                href: '/categories/verslas/izvalgos-ir-nuomones'
              },
              {
                title: 'Energetika',
                href: '/categories/verslas/energetika'
              },
              {
                title: 'Mano pinigai',
                href: '/categories/lietuvos-diena/mano-pinigai'
              },
              {
                title: 'Sėkmės istorijos',
                href: '/categories/lietuvos-diena/sekmes-istorijos'
              }
            ]
          },
          {
            title: 'Sportas',
            colorClass: 'orange darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/sportas'
              },
              {
                title: 'Krepšinis',
                href: '/categories/sportas/krepsinis'
              },
              {
                title: 'Futbolas',
                href: '/categories/sportas/futbolas'
              },
              {
                title: 'Tenisas',
                href: '/categories/sportas/tenisas'
              },
              {
                title: 'Kitos naujienos',
                href: '/categories/sportas/kitos-naujienos'
              },
              {
                title: 'Tai bent!',
                href: '/categories/sportas/tai-bent'
              },
              {
                title: 'Sportuojame visi',
                href: '/categories/sportas/sportuojame-visi'
              }
            ]
          },
          {
            title: 'Pasaulis',
            colorClass: 'cyan darken-2',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/pasaulis'
              },
              {
                title: 'Įvykiai',
                href: '/categories/pasaulis/ivykiai'
              },
              {
                title: 'Europa',
                href: '/categories/pasaulis/europa'
              },
              {
                title: 'Konfliktai ir saugumas',
                href: '/categories/pasaulis/konfliktai-ir-saugumas'
              },
              {
                title: 'Stichijos ir nelaimės',
                href: '/categories/pasaulis/stichijos-ir-nelaimes'
              },
              {
                title: 'Rytai-vakarai',
                href: '/categories/pasaulis/rytai-vakarai'
              },
              {
                title: 'Marga planeta',
                href: '/categories/pasaulis/marga-planeta'
              }
            ]
          },
          {
            title: 'Žmonės',
            colorClass: 'pink darken-1',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/zmones'
              },
              {
                title: 'Veidai ir vardai',
                href: '/categories/zmones/veidai-ir-vardai'
              },
              {
                title: 'TV antena',
                href: '/categories/zmones/tv-antena'
              },
              {
                title: 'Užsienio žvaigždės',
                href: '/categories/zmones/uzsienio-zvaigzdes'
              },
              {
                title: 'Pramogos',
                href: '/categories/zmones/pramogos'
              },
              {
                title: 'Muzika',
                href: '/categories/zmones/muzika'
              },
              {
                title: 'Kelionės',
                href: '/categories/zmones/keliones'
              }
            ]
          },
          {
            title: 'Lrytas.tv',
            colorClass: 'red',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/lrytas-tv'
              },
              {
                title: 'Žinios',
                href: '/categories/lrytas-tv/zinios'
              },
              {
                title: 'Laidos',
                href: '/categories/lrytas-tv/laidos'
              },
              {
                title: 'TV programa',
                href: '/categories/lrytas-tv/tv-programa'
              },
              {
                title: 'Muzikiniai sveikinimai',
                href: '/categories/lrytas-tv/muzikiniai-sveikinimai'
              }
            ]
          },
          {
            title: 'Augintinis',
            colorClass: 'red darken-1',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/augintinis'
              },
              {
                title: 'Sveikata ir mityba',
                href: '/categories/augintinis/sveikata-ir-mityba'
              },
              {
                title: 'Priežiūra',
                href: '/categories/augintinis/prieziura'
              },
              {
                title: 'Margumynai',
                href: '/categories/augintinis/margumynai'
              },
              {
                title: 'Pamatyk',
                href: '/categories/augintinis/pamatyk'
              },
              {
                title: 'Suteik namus',
                href: '/categories/augintinis/suteik-namus'
              },
              {
                title: 'Katės gyvai',
                href: '/categories/augintinis/kates-gyvai'
              },
              {
                title: 'Šunys gyvai',
                href: '/categories/augintinis/sunys-gyvai'
              },
              {
                title: 'Šunų veislės',
                href: '/categories/augintinis/sunu-veisles'
              }
            ]
          },
          {
            title: 'Gamta',
            colorClass: 'green darken-2',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/gamta'
              },
              {
                title: 'Fauna',
                href: '/categories/gamta/fauna'
              },
              {
                title: 'Flora',
                href: '/categories/gamta/flora'
              },
              {
                title: 'Žemė',
                href: '/categories/gamta/zeme'
              },
              {
                title: 'Eko',
                href: '/categories/gamta/eko'
              },
              {
                title: 'Orai',
                href: '/categories/gamta/orai'
              }
            ]
          },
          {
            title: 'Auto',
            colorClass: 'red darken-2',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/auto'
              },
              {
                title: 'Naujienos',
                href: '/categories/auto/naujienos'
              },
              {
                title: 'Rinka',
                href: '/categories/auto/rinka'
              },
              {
                title: 'Technika',
                href: '/categories/auto/technika'
              },
              {
                title: 'Radaras',
                href: '/categories/auto/radaras'
              },
              {
                title: 'Saugus eismas',
                href: '/categories/auto/saugus-eismas'
              },
              {
                title: 'Blykstė',
                href: '/categories/auto/blykste'
              },
              {
                title: 'Autosportas',
                href: '/categories/auto/autosportas'
              }
            ]
          },
          {
            title: 'Bendraukime',
            colorClass: 'red darken-3',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/bendraukime'
              },
              {
                title: 'Man rūpi',
                href: '/categories/bendraukime/man-rupi'
              },
              {
                title: 'Išklausykite',
                href: '/categories/bendraukime/isklausykite'
              },
              {
                title: 'Reporteris',
                href: '/categories/bendraukime/reporteris'
              },
              {
                title: 'Konkursai',
                href: '/categories/bendraukime/konkursai'
              },
              {
                title: 'Foto',
                href: '/categories/bendraukime/foto'
              },
              {
                title: 'Video',
                href: '/categories/bendraukime/video'
              },
              {
                title: 'Atsiųsk naujieną',
                href: '/categories/bendraukime/atsiusk-naujiena'
              }
            ]
          },
          {
            title: 'Gyvenimo būdas',
            colorClass: 'pink darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/gyvenimo-budas'
              },
              {
                title: 'Istorijos',
                href: '/categories/gyvenimo-budas/istorijos'
              },
              {
                title: 'Vaikai',
                href: '/categories/gyvenimo-budas/vaikai'
              },
              {
                title: 'Horoskopai',
                href: '/categories/gyvenimo-budas/horoskopai'
              },
              {
                title: 'Seksas (N-18)',
                href: '/categories/gyvenimo-budas/seksas'
              },
              {
                title: 'Psichologija',
                href: '/categories/gyvenimo-budas/psichologija'
              },
              {
                title: 'Nori - tikėk',
                href: '/categories/gyvenimo-budas/nori-tikek'
              }
            ]
          },
          {
            title: 'Būstas',
            colorClass: 'blue darken-3',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/bustas'
              },
              {
                title: 'Mano erdvė',
                href: '/categories/bustas/mano-erdve'
              },
              {
                title: 'Architektūra',
                href: '/categories/bustas/architektura'
              },
              {
                title: 'Nekilnojamasis turtas',
                href: '/categories/bustas/nekilnojamasis-turtas'
              },
              {
                title: 'Pasidaryk pats',
                href: '/categories/bustas/pasidaryk-pats'
              },
              {
                title: 'Galerija',
                href: '/categories/bustas/galerija'
              }
            ]
          },
          {
            title: 'IT ir Mokslas',
            colorClass: 'blue darken-2',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/it'
              },
              {
                title: 'Technologijos',
                href: '/categories/it/technologijos'
              },
              {
                title: 'Laboratorija',
                href: '/categories/it/laboratorija'
              },
              {
                title: 'Visata',
                href: '/categories/it/visata'
              },
              {
                title: 'Išmanyk',
                href: '/categories/it/ismanyk'
              },
              {
                title: 'KlauskIT',
                href: '/categories/it/klauskit'
              },
              {
                title: 'Neįtikėtini faktai',
                href: '/categories/it/neitiketini-faktai'
              },
              {
                title: 'Atradimai ir išradimai',
                href: '/categories/it/atradimai-ir-isradimai'
              }
            ]
          },
          {
            title: 'Kultūra',
            colorClass: 'red darken-3',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/kultura'
              },
              {
                title: 'Scena',
                href: '/categories/kultura/Scena'
              },
              {
                title: 'Kinas',
                href: '/categories/kultura/kinas'
              },
              {
                title: 'Literatūra',
                href: '/categories/kultura/literatura'
              },
              {
                title: 'Istorija',
                href: '/categories/kultura/istorija'
              },
              {
                title: 'Dailė',
                href: '/categories/kultura/daile'
              },
              {
                title: 'Galerija',
                href: '/categories/kultura/galerija'
              }
            ]
          },
          {
            title: 'Skonis',
            colorClass: 'orange darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/skonis'
              },
              {
                title: 'Pasigamink',
                href: '/categories/skonis/pasigamink'
              },
              {
                title: 'Gurmanų klubas',
                href: '/categories/skonis/gurmanu-klubas'
              },
              {
                title: 'Mitybos ABC',
                href: '/categories/skonis/mitybos-abc'
              },
              {
                title: 'Virtuvės gudrybės',
                href: '/categories/skonis/virtuves-gudrybes'
              },
              {
                title: 'Receptai',
                href: '/categories/skonis/receptai'
              }
            ]
          },
          {
            title: 'Stilius',
            colorClass: 'red darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/stilius'
              },
              {
                title: 'Karamelė',
                href: '/categories/stilius/karamele'
              },
              {
                title: 'Atvirai',
                href: '/categories/stilius/atvirai'
              },
              {
                title: 'Mano stilius',
                href: '/categories/stilius/mano-stilius'
              },
              {
                title: 'Stiprioji lytis',
                href: '/categories/stilius/stiprioji-lytis'
              }
            ]
          },
          {
            title: 'Sveikata',
            colorClass: 'red darken-4',
            subcategories: [
              {
                title: 'Titulinis',
                href: '/categories/sveikata'
              },
              {
                title: 'Medicinos žinios',
                href: '/categories/sveikata/medicinos-zinios'
              },
              {
                title: 'Ligos ir gydymas',
                href: '/categories/sveikata/ligos-ir-gydymas'
              },
              {
                title: 'Gyvenu sveikai',
                href: '/categories/sveikata/gyvenu-sveikai'
              },
              {
                title: 'Palata Nr. 6',
                href: '/categories/sveikata/palata'
              },
              {
                title: 'Sveikas!',
                href: '/categories/sveikata/sveikas'
              }
            ]
          }
        ]
      }
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('logout')
            .then(() => this.$router.replace({ path: 'login' }))
        } catch (e) {
          console.log('Atsijungimo klaida: ' + e.message + '')
        }
      }
    },
    computed: {
      user () {
        if (this.$store.getters['loggedIn']) {
          return this.$store.state.user ? this.$store.state.user : null
        }
      }
    }
  }
</script>

<style media="screen">
.logo {
  display: inline-block;
  vertical-align: middle;
  max-width: 80%;
  height: auto;
}
</style>
