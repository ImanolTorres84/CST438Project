<script>
	import { CircleUserRound } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	export let form;
	let showSuccessMessage = false;
	let showError = false;
	onMount(() => {
		if (form?.success) {
			goto('/account');
		}
	});
</script>

<!-- Page body container -->
<div class="container mx-auto flex justify-center items-center login-bg">
	<!-- Login Form -->
	<form method="POST" class="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
		<div class="text-center mb-8">
			<CircleUserRound size={64} class="text-primary mx-auto" />
			<h1 class="text-2xl font-bold text-primary mt-4 text-dark">Login to Your Account</h1>
		</div>
		<!-- Username Field -->
		<div class="mb-4">
			<label for="username" class="block text-sm font-semibold mb-2 text-dark">Username</label>
			<input
				id="username"
				name="username"
				type="text"
				placeholder="Enter your username"
				class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
			/>
		</div>
		<!-- Password Field -->
		<div class="mb-6">
			<label for="password" class="block text-sm font-semibold mb-2 text-dark">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="Enter your password"
				class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
			/>
		</div>
		<!-- Error Message -->
		{#if showError}
			<p class="text-red-500 text-sm mb-4">Incorrect username or password. Please try again.</p>
		{/if}
		<!-- Login Button -->
		<button type="submit" class="w-full btn-login">Login</button>
	</form>
</div>

<style>
	/* Adjust button color for better visibility */
	.btn-login {
		background-color: #4caf50; /* Green */
		border: none;
		color: white;
		padding: 10px 24px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		border-radius: 8px;
	}

	.btn-login:hover {
		background-color: #45a049; /* Darker Green */
	}

	/* Adjust text color for better visibility */
	.text-dark {
		color: #333; /* Dark Grey */
	}

	/* Adjust text color for input fields */
	input[type='text'],
	input[type='password'] {
		color: #333; /* Dark Grey */
	}

	/* Styling for success message */
	.success-message {
		background-color: #7cfc00; /* Lawn Green */
		color: #006400; /* Dark Green */
		padding: 10px 20px;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: opacity 0.3s ease;
		opacity: 0;
		visibility: hidden;
	}

	.success-message.show {
		opacity: 1;
		visibility: visible;
	}

	/* Background image */
	.login-bg {
		background-image: url('https://t3.ftcdn.net/jpg/02/82/28/10/360_F_282281016_H1uPO6dYx5AsYLTHW5fRyDhSI2xnaYPh.jpg');
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
</style>
