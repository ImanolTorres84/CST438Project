<script lang="ts">
  let postText = '';
  let imageFile: File | undefined;
  let selectedPets: string[] = []; // Array to store selected pet profiles
  let visibility: 'Public' | 'Friends Only' = 'Public'; // Default visibility
  
  function createPost() {
    if (postText.trim().length === 0 && imageFile === undefined) {
      return;
    }
  
    // Code to create a new post goes here
    console.log(`Creating new post with text: ${postText}, image file: ${imageFile ? 'selected' : 'not selected'}, selected pets: ${selectedPets.join(', ')}, visibility: ${visibility}`);
  
    // Clear the post text, image file, and selected pets fields after creating a new post
    postText = '';
    imageFile = undefined;
    selectedPets = [];
    visibility = 'Public'; // Reset visibility to default
  }
  
  function onImageFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      imageFile = input.files[0];
    }
  }
  
  function selectImageFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = onImageFileSelected;
    input.click();
  }
  
  function togglePetSelection(petId: string) {
    const index = selectedPets.indexOf(petId);
    if (index === -1) {
      selectedPets.push(petId);
    } else {
      selectedPets.splice(index, 1);
    }
  }
  
  function setVisibility(value: 'Public' | 'Friends Only') {
    visibility = value;
  }
</script>

<main class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold mb-4 text-green-500">Create Post</h1>
  <textarea bind:value={postText} placeholder="What's happening today?" rows="3" class="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-400 text-black"></textarea>
  <button on:click={selectImageFile} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none">Select Image</button>

  <!-- Pet selection checkboxes -->
  <div class="mt-4">
    <h2 class="text-lg font-bold mb-2 text-green-500">Select Pet(s)</h2>
    <!-- Assuming pet profiles are fetched dynamically and displayed as checkboxes -->
    <label for="pet1" class="inline-flex items-center mb-2">
      <input id="pet1" type="checkbox" on:change={() => togglePetSelection('pet1')} class="form-checkbox h-5 w-5 text-green-600">
      <span class="ml-2 text-black">Pet 1</span>
    </label>
    <label for="pet2" class="inline-flex items-center mb-2">
      <input id="pet2" type="checkbox" on:change={() => togglePetSelection('pet2')} class="form-checkbox h-5 w-5 text-green-600">
      <span class="ml-2 text-black">Pet 2</span>
    </label>
    <!-- Add more pet checkboxes as needed -->
  </div>

  <!-- Visibility options -->
  <div class="mt-4">
    <h2 class="text-lg font-bold mb-2 text-green-500">Visibility</h2>
    <label class="inline-flex items-center">
      <input type="radio" on:change={() => setVisibility('Public')} value="Public" checked={visibility === 'Public'} class="form-radio h-5 w-5 text-blue-600">
      <span class="ml-2 text-black">Public</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" on:change={() => setVisibility('Friends Only')} value="Friends Only" checked={visibility === 'Friends Only'} class="form-radio h-5 w-5 text-blue-600">
      <span class="ml-2 text-black">Friends Only</span>
    </label>
  </div>

  <!-- Create Post button -->
  <button on:click={createPost} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none mt-4">Create Post</button>
</main>
