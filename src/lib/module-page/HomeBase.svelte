<script lang="ts">

    import iconSearch from './icon-search.svg';
    import iconMini from './icon-mini.svg';

    export let title: string = '';
    export let style: string = '';

    export let className: string = '';
    export {className as class};
    export let bar$class: string = '';
    export let bar$style: string = '';

    let displaySearchView: boolean = true;

    let respond = true;

    const handleIconClick = () => {
        if (respond) {
            displaySearchView = !displaySearchView;
            setTimeout(()=>{respond = true}, 500);
        }
        respond = false;
    }

</script>
<div class="hanmo-home-page {className}" {style}>
    <div class="title-bar">
        <div>
            <span>{title}</span>
        </div>
        {#if $$slots['searchPanel']}
            <img alt="" src={displaySearchView ? iconMini : iconSearch} on:click={handleIconClick}/>
        {/if}
    </div>
    {#if $$slots['searchPanel'] && displaySearchView}
            <slot name="searchPanel"></slot>
    {/if}
    {#if $$slots['controlBar']}
        <div class="control-bar {bar$class}" style={bar$style}>
            <slot name="controlBar"></slot>
        </div>
    {/if}
    <slot></slot>
</div>