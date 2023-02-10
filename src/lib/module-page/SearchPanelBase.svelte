<script lang="ts">
    import {fade} from "svelte/transition";

    export let style: string = '';
    let className: string = '';
    export {className as class}

</script>

<div transition:fade class="search-panel {className}" {style}>
    <slot></slot>
</div>
