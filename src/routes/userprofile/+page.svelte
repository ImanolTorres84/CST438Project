
<script>
    //This will conect to the prisma
    import {onMount} from 'svelte';
    import {PrismaClient} from '@prisma/client';
	import { profile } from 'console';
    const prisma = new PrismaClient();

</script>

<h1>Profile Information</h1>

<br>
<br>

<div>
    <h2>Basic Information</h2>

    <p>User Name: </p>
    <p>Display Name: </p>
    <p>Profile Picture: </p>
    <p>Location: </p>
    <p>Preferred Language: </p>
</div>

<div>
    <h2>Friends List</h2>
</div>

<div>
    <h2>Your Posts</h2>
</div>