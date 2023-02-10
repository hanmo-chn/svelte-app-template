<script lang="ts">
    import type ActionButton from "./ActionButton";
    import Button from "@hanmotec/tsui-button";
    import {createEventDispatcher} from "svelte";

    export let buttons: Array<ActionButton> = [];
    export let autoClose: boolean = false;
    let dispatch = createEventDispatcher();

    let respond:boolean = true;
    const handleButtonClick = async (e, button: ActionButton):Promise<void> => {
        e.stopPropagation();
        e.preventDefault();
        if (respond) {
            respond = false;
            if ((button.callback == null || await button.callback() == true) && autoClose == true) {
                dispatch('close');
            }
            setTimeout(()=>{respond=true}, 200);
        }
    }

</script>
{#each buttons as button}
    {#if button.visible !== false}
    <Button style={button.style} class={button.className} disabled={button.disabled}
            secondary={button.isSecondary}
            on:click={(e)=>{handleButtonClick(e, button)}}>{button.label}</Button>
    {/if}
{/each}
