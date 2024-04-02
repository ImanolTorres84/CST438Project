<script lang="ts">
    import { CircleUserRound } from 'lucide-svelte';
    import { SignIn } from "@auth/sveltekit/components"; // (Optional, for user authentication)
  
    // Function to handle removing a pet profile using entered details
    async function removePetProfile() {
      // Get references to the input elements
      const removePetNameInput = document.getElementById("removePetName") as HTMLInputElement | null;
      const removePetAgeInput = document.getElementById("removePetAge") as HTMLInputElement | null;
      const removePetBreedInput = document.getElementById("removePetBreed") as HTMLInputElement | null;
  
      // Check if any input element is missing
      if (!removePetNameInput || !removePetAgeInput || !removePetBreedInput) {
        console.error("One or more input elements are missing");
        return;
      }
  
      // Access values only if the input elements exist
      const enteredPetName = removePetNameInput.value;
      const enteredPetAge = removePetAgeInput.value;
      const enteredPetBreed = removePetBreedInput.value;
  
      // Send data to backend for removal (replace with your API call)
      const response = await fetch('/api/remove-pet-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: enteredPetName, age: enteredPetAge, breed: enteredPetBreed })
      });
  
      if (response.ok) {
        console.log("Pet profile removed successfully!");
        // Show success message to user (optional)
      } else {
        console.error("Error removing pet profile:", await response.text());
        // Show error message to user (optional)
      }
    }
  </script>
  
  <div class="container h-full mx-auto flex justify-center items-center">
    <div class="w-2/3 bg-surface-600 p-10 space-y-4 rounded-md max-w-lg">
      <h2>Remove Pet Profile</h2>
      <form on:submit={event => { event.preventDefault(); removePetProfile(); }}>
        <div class="mb-4">
          <label for="removePetName" class="block text-sm font-semibold mb-2">Pet Name</label>
          <input id="removePetName" name="removePetName" type="text" placeholder="Enter pet name" class="input" required />
        </div>
        <div class="mb-4">
          <label for="removePetAge" class="block text-sm font-semibold mb-2">Pet Age</label>
          <input id="removePetAge" name="removePetAge" type="number" placeholder="Enter pet age" class="input" />
        </div>
        <div class="mb-4">
          <label for="removePetBreed" class="block text-sm font-semibold mb-2">Pet Breed</label>
          <input id="removePetBreed" name="removePetBreed" type="text" placeholder="Enter pet breed (optional)" class="input" />
        </div>
        <button type="submit" class="w-full btn variant-filled">Remove Pet Profile</button>
      </form>
    </div>
  </div>
  