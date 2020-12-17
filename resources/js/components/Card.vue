<template>
  <card class="flex flex-col nova-custom-table-card">
    <h1 v-if="title" class="py-6 text-90 font-normal text-2xl text-left pl-4">{{ title }}</h1>
    <table cellpadding="0" cellspacing="0" data-testid="resource-table" class="table w-full">
      <thead v-if="header && header.length > 0">
        <tr>
          <th v-for="(head, index) in header" :key="index" :class="head.class" :id="head.id">
            <span class="cursor-pointer inline-flex items-center">
              {{ head.data }}
            </span>
          </th>
          <th v-if="hasViewColumn"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
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
export default {
    props: ['card'],

    computed: {
      hasViewColumn() {
          return this.rows.find((row) => row.view)
      },
    },

    data() {
        return {
            rows: [],
            header: [],
            title: '',
            viewall: false,
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
        }
    },

    watch: {
        card(value) {
            // Fix problem with dashboard caching 🤷‍♂️
            this.fillTableData(value)
        }
    }
}
</script>
