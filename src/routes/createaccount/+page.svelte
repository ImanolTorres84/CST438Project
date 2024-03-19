<script>
    // @ts-ignore
    import { CircleUserRound } from 'lucide-svelte';
    export let form;
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
            <input id="username" name="username" type="text" placeholder="Enter your username" class="input {form?.errors?.username ? 'input-error' : 'input-bordered'}" />
            {#if form?.errors?.username}
                <p class="text-red-500 text-sm mt-1">{form.errors.username}</p>
            {/if}
        </div>
        <!-- Email Field -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-1 text-dark">Email Address</label>
            <input id="email" name="email" type="text" placeholder="Enter your email address" class="input {form?.errors?.email ? 'input-error' : 'input-bordered'}" />
            {#if form?.errors?.email}
                <p class="text-red-500 text-sm mt-1">{form.errors.email}</p>
            {/if}
        </div>
        <!-- Password Field -->
        <div class="mb-4">
            <label for="password" class="block text-sm font-semibold mb-1 text-dark">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" class="input {form?.errors?.password ? 'input-error' : 'input-bordered'}" />
            {#if form?.errors?.password}
                <p class="text-red-500 text-sm mt-1">{form.errors.password}</p>
            {/if}
        </div>
        <!-- Verify Password Field -->
        <div class="mb-6">
            <label for="verify-password" class="block text-sm font-semibold mb-1 text-dark">Verify Password</label>
            <input id="verify-password" name="verifypassword" type="password" placeholder="Re-enter your password" class="input {form?.errors?.verifypassword ? 'input-error' : 'input-bordered'}" />
            {#if form?.errors?.verifypassword}
                <p class="text-red-500 text-sm mt-1">{form.errors.verifypassword}</p>
            {/if}
        </div>
        <!-- Register Button -->
        <button type="submit" class="w-full btn variant-filled">Create Account</button>
    </form>
</div>
