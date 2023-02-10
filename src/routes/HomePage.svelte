<script lang="ts">
    import HomeBase from "../lib/module-page/HomeBase.svelte";
    import type ActionButton from "../lib/module-page/ActionButton";
    import ControlBar from "../lib/module-page/ControlBar.svelte";
    import {CommonDataListPanel} from "../lib";
    import SearchComponentPanel from "./SearchComponentPanel.svelte";
    import {onMount} from "svelte";

    export let moduleCtx = null;

    let title: string = '工艺/设备连锁管理';

    const addNew = () => {

    }

    let buttons: Array<ActionButton> = [
        {
            label: '新增',
            style: 'width: 75px',
            callback: addNew
        },
        {
            label: '导出',
            callback: ()=>{console.log('导出数据')}
        },
        {
            label: '导入',
            callback: ()=>{console.log('导入数据')}
        },
        {
            label: '查询',
            callback: ()=>{console.log('按条件查询')}
        },
        {
            label: '重置',
            isSecondary: true,
            callback: ()=>{console.log('reset 查询条件')}
        }

    ]


    onMount(()=>{

    })


</script>

<HomeBase {title} >
    <ControlBar slot="controlBar" {buttons} />
    <SearchComponentPanel slot="searchPanel" />
    <CommonDataListPanel/>
</HomeBase>