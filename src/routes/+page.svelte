<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
  
	onMount(() => {
	  if ($page.url.pathname === '/') {
		goto('/login');
	  }
	});
  </script>