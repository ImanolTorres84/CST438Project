<!-- UserProfile.svelte -->

<script>
    import { onMount } from 'svelte';
    import { getUserById } from '../api/user';

    let user;

    onMount(async () => {
        user = await getUserById(1); // Example: Fetch user with ID 1
    });
</script>

<div>
    <h1>User Profile</h1>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <!-- Add more profile details here -->
</div>
