<template>
    <card id="custom-table" class="flex flex-col h-auto overflow-x-auto">
        <h1 v-if="title" class="py-3 text-90 font-normal text-2xl text-left pl-4">{{ title }}</h1>
        <table
            class="w-full"
            :class="card.style"
            data-testid="resource-table"
            ref="table"
        >
            <TableHeader
                :fields="header"
                :should-show-column-borders="shouldShowColumnBorders"
                :has-view-column="hasViewColumn"
            />
            <tbody>
                <TableRow v-for="(row, index) in rows"
                          :key="index"
                          :row="row"
                          :should-show-tight="shouldShowTight"
                          :should-show-column-borders="shouldShowColumnBorders"
                          :has-view-column="hasViewColumn"
                />
            </tbody>
        </table>
        <div v-if="viewAll && viewAll.label" class="bg-20 rounded-b-lg flex justify-between">
            <div></div>
            <div>
                <a class="btn btn-link py-3 px-4 text-80" :href="viewAll.link">{{ viewAll.label }}</a>
            </div>
        </div>
    </card>
</template>

<script>
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default {
    props: ['card'],

    components: {TableRow, TableHeader },

    computed: {
        hasViewColumn() {
            return this.rows.find((row) => row.view)
        },

        shouldShowTight() {
            return this.card.style === 'table-tight'
        },

        /**
         * Determine if the resource table should show column borders.
         */
        shouldShowColumnBorders() {
            return this.card.showBorders;
        },
    },

    data() {
        return {
            rows: [],
            header: [],
            title: '',
            viewAll: false,
        }
    },

    mounted() {
        this.fillTableData(this.card)

        this.$refs['table'].parentNode.classList.remove('min-h-40')
    },

    methods: {
        fillTableData(card) {
            this.rows = card.rows;
            this.header = card.header;
            this.title = card.title;
            this.viewAll = card.viewAll;
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

<style scoped>
#custom-table::-webkit-scrollbar {
    height: 8px;
    border-radius: 4px;
}

#custom-table::-webkit-scrollbar-thumb {
    background: #cacaca;
}
</style>
