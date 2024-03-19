<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	
	// Worlds most simple redirect.
	onMount(() => {
	  if ($page.url.pathname === '/') {
		goto('/login');
	  }
	});
</script>