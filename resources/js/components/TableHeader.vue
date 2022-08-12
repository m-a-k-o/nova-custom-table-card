<template>
    <thead v-if="fields && fields.length > 0" class="bg-gray-50 dark:bg-gray-800">
    <tr>
        <th
            v-for="(head, index) in fields"
            :key="index"
            :id="head.id"
            :class="{
                [`${head.class}`]: true,
                'border-r border-gray-200 dark:border-gray-600': shouldShowColumnBorders,
                // 'px-2': true,
                // 'whitespace-nowrap': true,
            }"
            class="td-fit uppercase text-xxs text-gray-500 tracking-wide pl-5 pr-2 py-2"
        >
            <span>
              {{ head.data }}
            </span>
        </th>
        <th v-if="hasViewColumn"></th>
    </tr>
    </thead>
</template>

<script>
export default {
    name: 'TableHeader',

    props: {
        fields: {
            type: Array,
        },
        shouldShowColumnBorders: Boolean,
        hasViewColumn: Boolean,
    },
}
</script>
