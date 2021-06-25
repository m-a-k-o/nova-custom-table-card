<template>
  <card class="flex flex-col h-auto">
    <h1 v-if="title" class="py-6 text-90 font-normal text-2xl text-left pl-4">{{ title }}</h1>
    <table cellpadding="0" cellspacing="0" data-testid="resource-table" class="table w-full">
      <thead v-if="header && header.length > 0">
        <tr>
          <th v-for="(head, index) in header" :key="index" :class="head.class" :id="head.id">
            <sortable-icon
                @sort="orderByChange(head)"
                @reset="resetOrderBy(head)"
                :resource-name="viewName"
                :uri-key="slugify(head.data)"
                v-if="head.sortable"
            >
              {{ head.data }}
            </sortable-icon>
            <span v-else class="cursor-pointer inline-flex items-center">
              {{ head.data }}
            </span>
          </th>
          <th v-if="hasViewColumn"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in orderedRows" :key="index" :class="row.class">
          <td v-for="(column, index) in row.columns" :key="index"  :class="column.class" :id="column.id" v-html="column.data"></td>
          <td v-if="hasViewColumn" class="td-fit text-right pr-6">
            <span v-if="row.view">
              <router-link
                  class="cursor-pointer text-70 hover:text-primary mr-3"
                  :to="row.view"
                  :title="__('View')">
                <icon type="view" width="22" height="18" view-box="0 0 22 16" />
              </router-link>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="viewall" class="bg-20 rounded-b-lg flex justify-between">
      <div></div>
      <div>
        <a v-if="viewall" class="btn btn-link py-3 px-4 text-80" :href="viewall.link">{{ viewall.label }}</a>
      </div>
    </div>
  </card>
</template>

<script>

import { InteractsWithQueryString } from 'laravel-nova'

export default {
    mixins: [InteractsWithQueryString],
    props: ['card'],

    /**
     * Mount the component and retrieve its initial data.
     */
    async created() {
        this.initializeOrderingFromQueryString()
    },

    computed: {
      hasViewColumn() {
          return this.rows.find((row) => row.view)
      },

      orderedRows() {
          const colIndex = this.header.findIndex( (e) => (this.orderBy === this.slugify(e.data))) || 0
          
          if (colIndex === -1) return this.rows

          return this.rows.sort((a, b) => {
              const termA = this.orderByDirection === 'desc' ?
                (b.columns[colIndex].sortableData || b.columns[colIndex].data) :
                (a.columns[colIndex].sortableData || a.columns[colIndex].data)
              const termB = this.orderByDirection === 'desc' ?
                (a.columns[colIndex].sortableData || a.columns[colIndex].data) :
                (b.columns[colIndex].sortableData || b.columns[colIndex].data)

              return ( termA > termB) ? -1 : ( (termB > termA) ? 1 : 0 )
          })
      },

      /**
       * Get the view name (as slug) to use as preffix in orderBy functionality
       */

      viewName() {
          const pathNoTrailing = this.$route.path.replace(/\/+$/, "")
          return pathNoTrailing.split('/').pop()
      },

      /**
       * Get the name of the order by query string variable.
       */
      orderByParameter() {
        return this.viewName + '_order'
      },

      /**
       * Get the name of the order by direction query string variable.
       */
      orderByDirectionParameter() {
        return this.viewName + '_direction'
      },

      /**
       * Get the current order by value from the query string.
       */
      currentOrderBy() {
        return this.$route.query[this.orderByParameter] || ''
      },

      /**
       * Get the current order by direction from the query string.
       */
      currentOrderByDirection() {
        return this.$route.query[this.orderByDirectionParameter] || null
      },
    },

    data() {
        return {
            rows: [],
            header: [],
            title: '',
            viewall: false,
            orderBy: '',
            orderByDirection: '',
        }
    },

    mounted() {
        this.fillTableData(this.card)
    },

    methods: {
        fillTableData(card) {
            this.rows = card.rows;
            this.header = card.header;
            this.title = card.title;
            this.viewall = card.viewall;
        },

        /**
         * Sync the current order by values from the query string.
         */
        initializeOrderingFromQueryString() {
            this.orderBy = this.currentOrderBy
            this.orderByDirection = this.currentOrderByDirection
        },

        /**
         * Broadcast that the ordering should be updated.
         */
        orderByChange(field) {
            let direction = this.currentOrderByDirection == 'asc' ? 'desc' : 'asc'
            const slugified = this.slugify(field.data)
            if (this.orderBy !== slugified) {
                direction = 'asc'
            }
            this.orderBy = slugified
            this.orderByDirection = direction
            this.updateQueryString({
                [this.orderByParameter]: slugified,
                [this.orderByDirectionParameter]: direction,
            })
        },

        /**
         * Broadcast that the ordering should be reset.
         */
        resetOrderBy(field) {
            this.updateQueryString({
                [this.orderByParameter]: this.slugify(field.data),
                [this.orderByDirectionParameter]: null,
            })
        },

        /**
         * Slugify
         */
         slugify(...args) {
            const value = args.join(' ')

            return value
                .normalize('NFD') // split an accented letter in the base letter and the acent
                .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
                .replace(/\s+/g, '-') // separator
        }
    },

    watch: {
        card(value) {
            // Fix problem with dashboard caching 🤷‍♂️
            this.fillTableData(value)
        }
    },
}
</script>
