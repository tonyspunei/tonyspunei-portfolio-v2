<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
  export let id: string | null = null;
</script>

<article {id} class={`${$$props.class} lg:h-screen w-full flex flex-col lg:flex-row items-center`}>
  <section class={`px-6 lg:pl-60 xl:pl-72 bg-black text-white h-full lg:w-[calc(50%+208px)]`}>
    <slot name="dark" />
  </section>
  <section class={`bg-neon-500 h-full w-full lg:w-1/2`}>
    <slot name="neon" />    
  </section>
</article>