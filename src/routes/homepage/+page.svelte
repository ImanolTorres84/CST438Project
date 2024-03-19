<style>
    .staybottom {
        background-color: black;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5rem;
    }
    .nav {
        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        top: 10;
        left: 0;
        background-color: rgb(38, 55, 73);
        overflow-x: hidden;
        padding-top: 20px;
    }

    .nav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    .nav a:hover {
        color: #f1f1f1;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .search {
        padding: 5px;
    }

    .main {
        margin-left: 160px;
        font-size: 28px;
        padding: 0px 10px;
    }
</style>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PawsConnect</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 flex justify-center items-center h-screen bg-cover bg-fixed bg-center"
    style="background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.spoonflower.com%2Fen%2Fshop%2Fblue-dog-dots&psig=AOvVaw0HLyQWXgO5ernZ-nvTI7I8&ust=1710913090434000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKi9no3O_4QDFQAAAAAdAAAAABAH');">
    <div class="nav">
        <a href="/manage">My Stuff</a>
        <a href="/manage">Manage</a>
        <a href="/manage">Friends</a>
    </div>

    <div class="main">
        <div class="left">
            <h1>Welcome xxx</h1>  
        </div>
        <div class="right">
        <input class="search" type="text" placeholder="Search..." name="search">
        </div>
    </div>
</body>

</html>
