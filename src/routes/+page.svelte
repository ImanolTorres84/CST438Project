<script>
	import { CircleUserRound } from 'lucide-svelte';
</script>

<!-- Page body container -->
<div class="container h-full mx-auto flex justify-center items-center">
	<!-- Register Form -->
	<form method="POST" class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
		<center>
			<!-- Centering -->
			<CircleUserRound size={64} className="text-center"/>
		</center>
		<!-- Header -->
		<div class="text-center font-bold text-2xl mb-4">Register User</div>
		<p>Username</p>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input name="username" type="text" placeholder="Username" />
		</div>
		<p>Password</p>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input name="password" type="password" placeholder="Password" />
		</div>
		<p>Verify Password</p>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input name="password" type="password" placeholder="Password" />
		</div>
		<div class="text-center">
			<!-- Centering the button -->
			<button type="submit" class="btn variant-filled">Register</button>
		</div>
	</form>
</div>