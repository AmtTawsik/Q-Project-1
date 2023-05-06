<script setup>
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

onMounted(() => {
	initDropdowns();
})

const { app } = useMyRealmApp()

const logout = () => {
    app.currentUser.logOut();
    navigateTo("/");
};
</script>

<template>
	<section>
		<nav class="bg-white border-gray-200 shadow-lg">
			<div class=" flex flex-wrap items-center justify-between py-4 w-11/12 mx-auto">
				<a href="#" class="flex items-center">
					<p class="text-xl font-bold">App Name</p>
				</a>
				<div class="flex items-center md:order-2 pr-2">
					<button type="button"
						class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
						id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom">
						<span class="sr-only">Open user menu</span>
						<img class="w-8 h-8 rounded-full" :src="curUserData?.user_info?.picture" crossorigin="anonymous"
							alt="user photo">
					</button>
					<!-- Dropdown menu -->
					<div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
						id="user-dropdown">
						<div class="px-4 py-3">
							<span class="block text-sm text-gray-900 ">Admin</span>
							<span class="block text-sm  text-gray-500 truncate">admin@gmail.com</span>
						</div>
						<ul class="py-2" aria-labelledby="user-menu-button">
							<li>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
							</li>
							<li>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
							</li>
							<li>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
							</li>
							<li>
								<p href="#" @click="logout"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Sign
									out</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
					<ul
						class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
						<li>
							<a href="#"
								class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
								aria-current="page">Home</a>
						</li>
						<li>
							<a href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
						</li>
						<li>
							<a href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
						</li>
						<li>
							<a href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Pricing</a>
						</li>
						<li>
							<a href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</section>
	<section class="w-11/12 mx-auto mt-5">
		<NuxtLink to="/addUser" class="flex justify-center">
			<button
				class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add
				User</button>
		</NuxtLink>
		<div>
			<h3 class="text-center text-xl font-bold my-5">List of Users:</h3>
			<section class="flex flex-col items-center">
				<div class="w-[300px] px-5 py-2 border shadow-md rounded-md mb-3">
					<h5>Yousuf Ahmed</h5>
					<p>yousuf.qualyval@gmail.com</p>
				</div>
				<div class="w-[300px] px-5 py-2 border shadow-md rounded-md mb-3">
					<h5>Abdullah</h5>
					<p>abdullah.qualyval@gmail.com</p>
				</div>
				<div class="w-[300px] px-5 py-2 border shadow-md rounded-md mb-3">
					<h5>Mubin</h5>
					<p>mubin.qualyval@gmail.com</p>
				</div>
				<div class="w-[300px] px-5 py-2 border shadow-md rounded-md mb-3">
					<h5>Rahul</h5>
					<p>rahul.qualyval@gmail.com</p>
				</div>
				<div class="w-[300px] px-5 py-2 border shadow-md rounded-md mb-3">
					<h5>Fahim</h5>
					<p>fahim.qualyval@gmail.com</p>
				</div>
			</section>
		</div>
	</section>
</template>