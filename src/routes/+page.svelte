<script lang="ts">
    import "@hanmotec/tsui-themes/tsui-themes.css"
    import "@hanmotec/advance-datatable/adv-table.css"
    import "../themes/hanmo-app.scss"
    import HomePage from "./HomePage.svelte";
    import FormPage from "./FormPage.svelte";
    import {onMount} from "svelte";

    onMount(()=>{
    })
</script>
<div style="width: 800px; height: 400px; border: 1px solid #e0e0e0; position: relative; margin: 100px auto; box-sizing: border-box">
    <HomePage/>
</div>
<div style="width: 800px; height: 400px; border: 1px solid #e0e0e0; position: relative; margin: 100px auto; box-sizing: border-box">
    <FormPage/>
</div>
