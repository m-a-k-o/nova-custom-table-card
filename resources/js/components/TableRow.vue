<template>
    <tr :class="row.class" class="group">
        <td v-for="(column, index) in row.columns"
            :key="index"
            :id="column.id"
            v-html="column.data"
            :class="{
                [`${column.class}`]: true,
                'px-2': true,
                'py-2': !shouldShowTight,
                'border-r border-t border-gray-100 dark:border-gray-700': shouldShowColumnBorders,
                'whitespace-nowrap': true,
            }"
            class="dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
        ></td>
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
