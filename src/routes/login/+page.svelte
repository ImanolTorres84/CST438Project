<script lang="ts">
	import { CircleUserRound } from 'lucide-svelte';
	import { SignIn } from "@auth/sveltekit/components"
	export let form;
</script>

<!-- Page body container -->
<div class="container h-full mx-auto flex justify-center items-center">
	<!-- Login Form -->
	<form method="POST" class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
		<div class="text-center mb-8">
			<CircleUserRound size={64} class="text-primary mx-auto" />
			<h1 class="text-2xl font-bold text-primary mt-4">Account Login</h1>
		</div>
		{#if form?.error}
			<center><span class="chip variant-filled-primary">{form?.error}</span></center>
		{/if}
		<!-- Username Field -->
		<div class="mb-4">
			<label for="username" class="block text-sm font-semibold mb-2">Username</label>
			<input
				id="username"
				name="username"
				type="text"
				placeholder="Enter your username"
				class="input {form?.errors?.username ? 'input-error' : 'input-bordered'}"
			/>
		</div>
		<!-- Password Field -->
		<div class="mb-6">
			<label for="password" class="block text-sm font-semibold mb-2">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="Enter your password"
				class="input {form?.errors?.password ? 'input-error' : 'input-bordered'}"
			/>
		</div>
		<hr class="!border-t-8 !border-double" />
		<!-- Login Button -->
		<button type="submit" class="w-full btn variant-filled">Login</button>
		<SignIn provider="google">
			<div slot="submitButton" class="buttonPrimary">
				<button class="w-full btn variant-filled">Login with Google</button>
			</div>
		</SignIn>
	</form>
</div>
