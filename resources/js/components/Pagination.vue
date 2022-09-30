<template>
    <div v-if="paginator" class="bg-20 rounded-b">
        <pagination-links 
            :is="paginationComponent"
            :all-matching-resource-count="allMatchingResourceCount"
            :current-resource-count="paginator.data.length"
            :next="hasNextPage"
            :page="currentPage"
            :pages="totalPages"
            :per-page="perPage"
            :previous="hasPreviousPage"
            :resource-count-label="resourceCountLabel"
            @page="selectPage"
        >
            <span v-if="resourceCountLabel"
                :class="{ 'ml-auto': paginationComponent === 'pagination-links'}"
                class="text-sm text-80 px-4"
            >
                {{ resourceCountLabel }}
            </span>
        </pagination-links>
    </div>
</template>

<script>
import {Paginatable, PerPageable} from 'laravel-nova';

export default {
    name: 'Pagination',
    props: {
        config: [],
        paginator: Object,
    },
    mixins: [
		Paginatable,
		PerPageable,
	],
    data: function () {
		return {
			allMatchingResourceCount: 0,
			perPage: 0,
			currentPage: 1,
		}
	},
    computed: {
		resourceCountLabel() {
			const first = this.perPage * (this.currentPage - 1)
			return (
					this.paginator.data.length &&
					`${first + 1}-${first + this.paginator.data.length} ${this.__('of')} ${
							this.allMatchingResourceCount
					}`
			)
		},
		currentPerPage() {
			return this.perPage
		},
		totalPages() {
			return Math.ceil(this.allMatchingResourceCount / this.currentPerPage)
		},
		hasNextPage() {
			return Boolean(this.paginator && this.paginator.next_page_url)
		},
		hasPreviousPage() {
			return Boolean(this.paginator && this.paginator.prev_page_url)
		},
		paginationComponent() {
			return `pagination-${Nova.config['pagination'] || 'links'}`
		},
	},
    methods: {
		selectPage(page) {
			this.currentPage = page
			this.loadMore()
		},
		loadMore() {
			Nova.request().get(`/nova-vendor/nova-custom-table-card${this.config.routes[0].url}`, {
				params: {
					page: this.currentPage,
				}
			}).then(response => {
				this.paginator = response.data.paginator
				this.rows = response.data.rows
				if (this.paginator !== undefined) {
					this.perPage = this.paginator.per_page
					this.allMatchingResourceCount = this.paginator.total
				}
				Nova.$emit('resources-loaded')
			}).catch(error => {
				console.error(error)
			})
		},
	},
    mounted() {
        this.allMatchingResourceCount = this.paginator.total;
        this.perPage = this.paginator.per_page;
    },
}
</script>
