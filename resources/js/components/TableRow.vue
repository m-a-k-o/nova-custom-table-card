<template>
    <tr :class="row.class" class="group">
        <td v-for="(column, index) in row.columns"
            :key="index"
            :id="column.id"
            v-html="column.data"
            :class="{
                [`${column.class}`]: true,
                'px-6': true,
                'py-4': !shouldShowTight,
                'border-r': shouldShowColumnBorders,
                'border-t border-gray-100 dark:border-gray-700': true,
                'whitespace-nowrap': true,
            }"
            class="dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
        ></td>
        <td
            v-if="hasViewColumn"
            :class="{
                'px-6': true,
                'py-4': !shouldShowTight,
                'border-r': shouldShowColumnBorders,
                'border-t border-gray-100 dark:border-gray-700': true,
                'whitespace-nowrap': true,
            }"
            class="text-center dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
        >
            <span v-if="row.view">
              <a
                  :href="row.view"
                  class="cursor-pointer text-70 hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" class="inline-block" role="presentation"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </a>
            </span>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TableRow',

    props: {
        row: {
            type: Object,
        },
        tableStyle: String,
        shouldShowTight: Boolean,
        shouldShowColumnBorders: Boolean,
        hasViewColumn: Boolean,
    },
}
</script>
