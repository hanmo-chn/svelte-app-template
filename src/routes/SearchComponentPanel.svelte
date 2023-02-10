<script lang="ts">
    import SearchPanelBase from "../lib/module-page/SearchPanelBase.svelte";

    export let criteria: any = null;
    let text = "类别"
</script>

<SearchPanelBase>
    <input type="text" on:input={(e)=>{console.log(e, text)}} on:propertychange={(e)=>{console.log(e)}} bind:value={text}/>
</SearchPanelBase>