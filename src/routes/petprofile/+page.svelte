<script lang="ts">
    // Import necessary dependencies
    import { onMount } from 'svelte';
    
    // Pet Profile Fields
    let petName = "";
    let petAge = "";
    let petBreed = "";
    let petPic = "";
  
    // Function to handle adding a pet profile
    async function addPetProfile() {
      // Validate pet profile fields (add validation logic if needed)
      if (!petName || !petAge || !petBreed) {
        console.error("Please fill in all required fields");
        return;
      }
  
      // Prepare pet profile data
      const petProfileData = {
        name: petName,
        age: parseFloat(petAge), // Convert to float if necessary
        breed: petBreed,
      };
  
      try {
        // Send POST request to add pet profile
        const response = await fetch('/api/addPetProfile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(petProfileData),
        });
  
        // Check response status
        if (response.ok) {
          console.log("Pet profile added successfully!");
          // Clear input fields after successful addition
          petName = "";
          petAge = "";
          petBreed = "";
          petPic = "";
        } else {
          const errorMessage = await response.text();
          console.error("Error adding pet profile:", errorMessage);
        }
      } catch (error) {
        console.error("Error adding pet profile:", error);
      }
    }
  </script>
  
  <div class="container h-full mx-auto flex justify-center items-center">
    <div class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
      <form>
        <div class="mb-4">
          <label for="petName" class="block text-sm font-semibold mb-2">Pet Name</label>
          <input bind:value={petName} id="petName" name="petName" type="text" placeholder="Enter pet name" class="input" />
        </div>
        <div class="mb-4">
          <label for="petAge" class="block text-sm font-semibold mb-2">Pet Age</label>
          <input bind:value={petAge} id="petAge" name="petAge" type="number" placeholder="Enter pet age" class="input" />
        </div>
        <div class="mb-4">
          <label for="petBreed" class="block text-sm font-semibold mb-2">Pet Breed</label>
          <input bind:value={petBreed} id="petBreed" name="petBreed" type="text" placeholder="Enter pet breed" class="input" />
        </div>
        <button on:click={addPetProfile} type="button" class="w-full btn variant-filled">Add Pet Profile</button>
      </form>
      <a href="/removepet" class="w-full btn variant-filled">Remove Pet Profile</a>
    </div>
  </div>
  