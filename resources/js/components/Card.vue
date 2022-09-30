<template>
    <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow h-full pt-4">
        <h1 v-if="title" class="h-6 flex mb-3 text-sm font-bold px-6">{{ title }}</h1>
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
        <div v-if="viewAll && viewAll.label" class="w-full border-t border-gray-200 dark:border-gray-700 rounded-b-lg flex justify-center py-3">
            <div>
                <a class="text-primary-200 text-xs hover:text-primary-600" :href="viewAll.link">{{ viewAll.label }}</a>
            </div>
        </div>

        <!-- <Pagination :config="config" :paginator="paginator"></Pagination> -->
    </div>
</template>

<script>
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';
// import Pagination from './Pagination.vue';

export default {
    props: ['card'],

    components: {
        TableRow,
        TableHeader,
        // Pagination
    },

    data() {
        return {
            rows: [],
            header: [],
            title: '',
            viewAll: false,
            paginator: null,
            config: [],
        }
    },

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
            return !! this.card.showBorders
        },
    },
    created () {
		const {header, rows, title, paginator, config} = this.card;

		this.rows = rows;
		this.header = header;
		this.title = title;
        this.paginator = paginator;
		this.config = config;
	},
}
</script>
