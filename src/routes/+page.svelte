<!-- Page.svelte -->
<div class="container">
  <div class="image-container">
      <img src="https://washnwiggle.com/morrisplains/wp-content/uploads/2014/12/Franchise-Banner-Welcome.jpg" alt="Welcome Banner">
  </div>
  <div class="cta-container">
      <h1>Welcome to PawsConnect</h1>
      <p>Connect with fellow pet lovers, share experiences, and celebrate your furry friends!</p>
      <div class="buttons">
          <a href="/register" class="btn btn-primary">Register</a>
          <a href="/login" class="btn btn-secondary">Login</a>
          <a href="/createpost" class="btn btn-secondary">Creat post</a>
      </div>
  </div>
</div>

<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
  }

  .image-container {
      margin-bottom: 2rem;
  }

  .image-container img {
      max-width: 100%;
      height: auto;
  }

  .cta-container {
      text-align: center;
  }

  .buttons {
      margin-top: 1rem;
  }

  .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 0.25rem;
      transition: background-color 0.3s ease;
      cursor: pointer;
  }

  .btn-primary {
      background-color: #4CAF50;
      color: #fff;
  }

  .btn-secondary {
      background-color: #008CBA;
      color: #fff;
      margin-left: 1rem;
  }

  .btn:hover {
      background-color: #333;
  }
</style>
