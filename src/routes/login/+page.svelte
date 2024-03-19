<script>
    import { CircleUserRound } from 'lucide-svelte';
</script>

<!-- Page body container -->
<div class="container h-full mx-auto flex justify-center items-center">
    <!-- Login Form -->
    <form method="POST" class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
        <div class="text-center mb-8">
            <CircleUserRound size={64} class="text-primary mx-auto"/>
            <h1 class="text-2xl font-bold text-primary mt-4 text-dark">Login to Your Account</h1>
        </div>
        <!-- Username Field -->
        <div class="mb-4">
            <label for="username" class="block text-sm font-semibold mb-2 text-dark">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Password Field -->
        <div class="mb-6">
            <label for="password" class="block text-sm font-semibold mb-2 text-dark">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Login Button -->
        <button type="submit" class="w-full btn-login">Login</button>
    </form>
</div>
