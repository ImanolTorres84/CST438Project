<script>
    // @ts-ignore
    import { CircleUserRound } from 'lucide-svelte';
    import { onMount } from 'svelte';
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
        <div class="text-center font-bold text-2xl mb-4">Create Account</div>
        <!-- Username Field -->
        <div class="mb-4">
            <label for="username" class="block text-sm font-semibold mb-1 text-dark">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" class="input" />
        </div>
        <!-- Email Field -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-1 text-dark">Email Address</label>
            <input id="email" name="email" type="text" placeholder="Enter your email address" class="input" />
        </div>
        <!-- Password Field -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-semibold mb-1 text-dark">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" class="input" />
        </div>
        <!-- Verify Password Field -->
        <div class="mb-6">
            <label for="verify-password" class="block text-sm font-semibold mb-1 text-dark">Verify Password</label>
            <input id="verify-password" name="verifypassword" type="password" placeholder="Re-enter your password" class="input" />
        </div>
        <!-- Register Button -->
        <button type="submit" class="w-full btn variant-filled">Create Account</button>
    </form>
</div>
