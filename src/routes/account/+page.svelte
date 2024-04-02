<!-- account.page.svelte -->
<script>
    import { onMount } from 'svelte';
    import { updateUserProfile } from '../api/user'; // Import the function to update user profile

    let user = {
        id: 1, // Placeholder user ID
        username: "JohnDoe",
        email: "johndoe@example.com",
        location: "New York",
        age: 30, // Adding age field
        profilePicture: "https://via.placeholder.com/150"
    };

    async function saveProfile() {
        try {
            const success = await updateUserProfile(user); // Call the function to update user profile
            if (success) {
                alert("Profile updated successfully!");
            } else {
                throw new Error("Failed to update profile. Please try again.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    }

    function changeProfilePicture(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            user = {...user, profilePicture: reader.result}; // Update the user object
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    onMount(() => {
        // Code to fetch user data from backend
    });
</script>

<style>
    /* Styles */
</style>

<!-- Manage Profile Heading and Form -->
<h1 class="text-2xl font-bold mb-4 text-light manage-profile-heading">Manage Profile</h1>
<div class="container h-full mx-auto flex justify-center items-center register-bg">
    <form on:submit|preventDefault={saveProfile} class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
        <!-- Profile Picture -->
        <center>
            <label for="profile-image" class="cursor-pointer">
                <img src={user.profilePicture} alt="Profile Picture" class="profile-picture" />
                <input id="profile-image" type="file" class="image-upload-button" onchange={changeProfilePicture} />
            </label>
        </center>
        
        <!-- Username Field -->
        <div class="mb-4">
            <label for="username" class="block text-sm font-semibold mb-1 text-light">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" bind:value={user.username} />
        </div>
        <!-- Email Field -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-1 text-light">Email Address</label>
            <input id="email" name="email" type="text" placeholder="Enter your email address" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" bind:value={user.email} />
        </div>
        <!-- Location Field -->
        <div class="mb-4">
            <label for="location" class="block text-sm font-semibold mb-1 text-light">Location</label>
            <input id="location" name="location" type="text" placeholder="Enter your location" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" bind:value={user.location} />
        </div>
        <!-- Age Field -->
        <div class="mb-4">
            <label for="age" class="block text-sm font-semibold mb-1 text-light">Age</label>
            <input id="age" name="age" type="number" placeholder="Enter your age" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" bind:value={user.age} style="color: black;" />
        </div>
        <!-- Save Button -->
        <button type="submit" class="w-full btn-save">Save</button>
    </form>
</div>
