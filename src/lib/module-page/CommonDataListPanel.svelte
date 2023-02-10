<script lang="ts">

    import {createEventDispatcher, onMount} from "svelte";
    import AdvDataTable from "@hanmotec/advance-datatable";
    import Pagination from "@hanmotec/tsui-pagination";

    export let columns = [];
    export let options:any = {headerRowHeight: 32, rowHeight: 30, fontSize: 12};
    export let data: Array<any>;
    export let table$style: string = '';
    export let table$class: string = '';
    export let pageCount: number = 1;
    export let pageNo: number = 1;
    export let style: string = '';


    const dispatch = createEventDispatcher();
    let tablePanel;
    let table: any;
    $: if (data) {
        if (table != null) {
            table.setData(data);
        }
    }
    onMount(() => {
        if (tablePanel != null) {
            table = new AdvDataTable(tablePanel, columns, options);
            table.setOnRowDblClick((data:any) => {
                dispatch('rowDblClick', data);
            });
            table.setOnRowSelected((data:any) => {
                console.log('选中表格中的数据', data);
                dispatch('rowSelected', data);
            });
            table.setOnSelectionRowsChanged(() => {
                dispatch('changeSelection', table.getSelectionList());
            });
            if (data) {
                table.setData(data);
            }
        }
    });

</script>

<div class="hanmo-list-panel hanmo-layout-flex" {style}>
    <div bind:this={tablePanel} class="{table$class}" style="height: 100%; position: relative;
            box-sizing: border-box; {table$style}"></div>
</div>
{#if pageCount > 1}
    <div class="hanmo-list-pagination-footer hanmo-layout-flex-fixed-size">
        <Pagination {pageCount} {pageNo} on:change={(e)=>{dispatch('pageChanged', e.detail)}}/>
    </div>
{/if}





