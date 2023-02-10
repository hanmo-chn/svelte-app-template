<script lang="ts">

    import {fade} from "svelte/transition";

    export let title: string = '';
    export let style: string = '';

</script>
<div transition:fade={{duration: 500}} class="hanmo-form-page" {style}>
    <div class="title-bar">
        <div class="page-title">
            <span>{title}</span>
        </div>
        <div class="control-bar">
            <slot name="controlBar"/>
        </div>
    </div>
    <div class="content-panel" {style}>
        <slot></slot>
    </div>
</div>
