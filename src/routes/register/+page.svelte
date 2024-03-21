<script>
    // @ts-ignore
    import { CircleUserRound } from 'lucide-svelte';
    export let form;
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    onMount(() => {
        if (form?.success) goto('/login');
     });
</script>

<style>
    /* Adjust button color for better visibility */
    .btn-register {
        background-color: #4CAF50; /* Green */
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

    .btn-register:hover {
        background-color: #45a049; /* Darker Green */
    }

    /* Adjust text color for better visibility */
    .text-dark {
        color: #333; /* Dark Grey */
    }

    /* Adjust text color for input fields */
    input[type="text"],
    input[type="password"] {
        color: #333; /* Dark Grey */
    }

    /* Background image */
    .register-bg {
        background-image: url('https://t4.ftcdn.net/jpg/06/41/76/39/360_F_641763951_qZHEJFcFCMlNndxeHd5bZrxxbSWtu3tX.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
    }

    /* Styling for success message */
    .success-message {
        background-color: #7CFC00; /* Lawn Green */
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
</style>

<!-- Page body container -->
<div class="container h-full mx-auto flex justify-center items-center register-bg">
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
            <label for="username" class="block text-sm font-semibold mb-1 text-light">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Email Field -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-1 text-light">Email Address</label>
            <input id="email" name="email" type="text" placeholder="Enter your email address" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Password Field -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-semibold mb-1 text-light">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Verify Password Field -->
        <div class="mb-6">
            <label for="verify-password" class="block text-sm font-semibold mb-1 text-light">Verify Password</label>
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
