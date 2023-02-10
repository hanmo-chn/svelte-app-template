<script lang="ts">

    import {fade} from "svelte/transition";

    export let style: string = '';

</script>
<div transition:fade={{duration: 500}} class="hanmo-fulfill-page" {style}>
    <slot></slot>
</div>
