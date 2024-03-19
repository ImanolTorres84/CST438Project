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
        <!-- First Name Field -->
        <div class="mb-4">
            <label for="first-name" class="block text-sm font-semibold mb-1 text-dark">First Name</label>
            <input id="first-name" name="firstname" type="text" placeholder="Enter your first name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Last Name Field -->
        <div class="mb-4">
            <label for="last-name" class="block text-sm font-semibold mb-1 text-dark">Last Name</label>
            <input id="last-name" name="lastname" type="text" placeholder="Enter your last name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Email Field -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-1 text-dark">Email Address</label>
            <input id="email" name="email" type="text" placeholder="Enter your email address" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Password Field -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-semibold mb-1 text-dark">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Verify Password Field -->
        <div class="mb-6">
            <label for="verify-password" class="block text-sm font-semibold mb-1 text-dark">Verify Password</label>
            <input id="verify-password" name="verifypassword" type="password" placeholder="Re-enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Register Button -->
        <button type="submit" class="w-full btn-register">Create Account</button>
        <!-- Link to Login -->
        <div class="text-center mt-4">
            <a href="/login" class="text-primary">Already have an account? Login here</a>
        </div>
    </form>
</div>
