<script lang="ts">

    import AdvanceDataTable from "@hanmotec/advance-datatable";
    import Pagination from "@hanmotec/tsui-pagination";
    import {createEventDispatcher} from "svelte";

    export let columns = [];
    export let options:any = {};
    export let data: Array<any>;
    export let table$style: string = '';
    export let table$class: string = '';
    export let pageCount: number = 1;
    export let pageNo: number = 1;
    export let style: string = '';
    export let selectedRows:Array<any> = [];

    let dispatch = createEventDispatcher();

    let tabOptions = {headerRowHeight: 32, rowHeight: 30, indicatorWidth: 40};

    $: if (options) {
        tabOptions = {...tabOptions, ...options}
    }

</script>

<div class="hanmo-list-panel hanmo-layout-flex" {style}>
    <AdvanceDataTable class="{table$class}" bind:selectedRows {columns} list={data} options={tabOptions}
                      style="{table$style}" on:rowDblClick/>
</div>
{#if pageCount > 1}
    <div class="hanmo-list-pagination-footer hanmo-layout-flex-fixed-size">
        <Pagination {pageCount} {pageNo} on:change={(e)=>{dispatch('pageChanged', e.detail)}}/>
    </div>
{/if}





