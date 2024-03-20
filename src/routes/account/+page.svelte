<script>
    // @ts-ignore
    import { CircleUserRound, Image } from 'lucide-svelte';
    import { onMount } from 'svelte';

    let user = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        location: "New York",
        age: 30, // Adding age field
        profilePicture: "https://via.placeholder.com/150"
    };

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
    /* Adjust button color for better visibility */
    .btn-save {
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

    .btn-save:hover {
        background-color: #45a049; /* Darker Green */
    }

    /* Adjust text color for better visibility */
    .text-dark {
        color: #333; /* Dark Grey */
    }

    /* Adjust text color for input fields */
    input[type="text"] {
        color: #333; /* Dark Grey */
    }

    /* Styling for profile picture */
    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
    }

    /* Styling for image upload button */
    .image-upload-button {
        display: none; /* Hide by default */
    }

    /* Style for the manage profile heading */
    .manage-profile-heading {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center; /* Center align */
    }
</style>

<!-- Manage Profile Heading -->
<h1 class="text-2xl font-bold mb-4 text-light manage-profile-heading">Manage Profile</h1>

<!-- Page body container -->
<div class="container h-full mx-auto flex justify-center items-center register-bg">
    <!-- Manage Profile Form -->
    <form class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
        <!-- Profile Picture -->
        <center>
            <label for="profile-image" class="cursor-pointer">
                <Image src={user.profilePicture} alt="Profile Picture" class="profile-picture" />
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
            <input id="age" name="age" type="number" placeholder="Enter your age" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" bind:value={user.age} />
        </div>
        <!-- Save Button -->
        <button type="button" class="w-full btn-save">Save</button>
    </form>
</div>
