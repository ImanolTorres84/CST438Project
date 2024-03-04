<script>
    // @ts-ignore
    import { CircleUserRound } from 'lucide-svelte';
    import { onMount } from 'svelte';

    let showSuccessMessage = false;

    // Function to simulate registration
    function register() {
        // Simulate registration process here
        // For demonstration, we'll just show the success message and redirect after 2 seconds
        showSuccessMessage = true;
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    }

    // Hide the success message when the component mounts
    onMount(() => {
        showSuccessMessage = false;
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
    <form on:submit|preventDefault={register} method="POST" class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
        <center>
            <!-- Centering -->
            <CircleUserRound size={64} className="text-center"/>
        </center>
        <!-- Header -->
        <div class="text-center font-bold text-2xl mb-4">Create Account</div>
        <!-- First Name Field -->
        <div class="mb-4">
            <label for="first-name" class="block text-sm font-semibold mb-1 text-dark">First Name</label>
            <input id="first-name" name="first-name" type="text" placeholder="Enter your first name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Last Name Field -->
        <div class="mb-4">
            <label for="last-name" class="block text-sm font-semibold mb-1 text-dark">Last Name</label>
            <input id="last-name" name="last-name" type="text" placeholder="Enter your last name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
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
            <input id="verify-password" name="verify-password" type="password" placeholder="Re-enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
        </div>
        <!-- Register Button -->
        <button type="submit" class="w-full btn-register">Create Account</button>
        <!-- Success Message -->
        <div class="{`success-message ${showSuccessMessage ? 'show' : ''}`} fixed inset-x-0 bottom-0 mb-4 text-center w-full">
            <p class="text-white">You have successfully registered! Redirecting to login page...</p>
        </div>
        <!-- Link to Login -->
        <div class="text-center mt-4">
            <a href="/login" class="text-primary">Already have an account? Login here</a>
        </div>
    </form>
</div>
