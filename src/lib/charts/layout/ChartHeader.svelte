<script lang='ts'>
    import Query from "$lib/buttons/Query.svelte";
    import Settings from "$lib/buttons/Settings.svelte";

    export let query_link: string;
    export let title: string; 
</script>

<div class="grid grid-cols-3 grid-rows-1 mt-1">
    <h2 class="col-start-2 justify-self-center font-sans text-lg font-bold ">
      {title}
    </h2>
    <div class="col-start-3 flex justify-end space-x-2 mr-2">
      <Query link={query_link} />
      <Settings />
    </div>
  </div>