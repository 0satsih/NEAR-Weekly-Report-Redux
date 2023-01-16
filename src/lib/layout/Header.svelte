<script>
	import Title from '$lib/items/Title.svelte';
</script>

<div class="top-0 h-20 w-full border-b-2 border-gray-300 bg-white flex items-center">
	<div class="container mx-auto flex justify-start items-center">
		<Title>
			<img
				slot="logo"
				src=""
				alt="logo"
				class="h-10"
			/>
			<h1 slot="title" class="text-3xl font-bold">Title</h1>
		</Title>
	</div>
</div>
