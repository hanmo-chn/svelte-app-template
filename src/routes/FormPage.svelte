<script lang="ts">
    import FormPageBase from "../lib/module-page/FormPageBase.svelte";
    import type ActionButton from "../lib/module-page/ActionButton";
    import ControlBar from "../lib/module-page/ControlBar.svelte";

    let buttons: Array<ActionButton> = [
        {
            label: '保存',
            style: 'width: 60px',
            callback: ()=>{}
        },
        {
            label: '提交',
            style: 'width: 60px',
            callback: ()=>{console.log('导出数据')},
            disabled: true
        },
        {
            label: '关闭',
            style: 'width: 60px',
            isSecondary: true,
            callback: ()=>{console.log('导入数据')}
        }
    ]


</script>
<FormPageBase title="表单页">
    <div>
        <span>这是一个明细表单页面</span>
    </div>
    <ControlBar slot="controlBar" {buttons}/>
</FormPageBase>
