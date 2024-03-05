<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Your Information</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 flex justify-center items-center h-screen bg-cover bg-fixed bg-center"
    style="background-image: url('https://t3.ftcdn.net/jpg/00/85/32/68/360_F_85326806_k3nKFfDnL7BKZZpgplibILjssleez7za.jpg');">
    <div class="container mx-auto overflow-y-auto scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500">
        <div class="space-y-10 text-center flex flex-col items-center">
            <h1 class="text-4xl font-bold text-black">MANAGE PROFILE</h1>
            <div class="w-full md:w-2/3 lg:w-1/2">
                <div class="bg-black text-white p-8 rounded-lg shadow-md card hover:bg-blue-200">
                    <h2 class="text-2xl font-semibold text-primary mb-4">Update Your Personal Info</h2>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Your Name</p>
                            <input type="text"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Email Address</p>
                            <input type="email"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Profile Picture</p>
                            <input type="file" accept=".jpg, .jpeg, .png"
                                class="focus:outline-none px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Current Location</p>
                            <input type="text"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex justify-center">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300">Save</button>
                        </div>
                    </div>
                </div>
                <div class="bg-black text-white p-8 rounded-lg shadow-md mt-8 card hover:bg-blue-200">
                    <h2 class="text-2xl font-semibold text-primary mb-4">Update Your Pet's Info</h2>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Pet's Name</p>
                            <input type="text"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Pet's Profile Picture</p>
                            <input type="file" accept=".jpg, .jpeg, .png"
                                class="focus:outline-none px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Description</p>
                            <input type="text"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Pet's Breed</p>
                            <input type="text"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Pet's Color</p>
                            <input type="color"
                                class="focus:outline-none px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex items-center">
                            <p class="text-lg text-primary mr-4">Pet's Age</p>
                            <input type="number"
                                class="border border-primary focus:outline-none text-lg text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300">
                        </div>
                        <div class="flex justify-center">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
