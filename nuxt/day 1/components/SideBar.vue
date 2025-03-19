<template>
   <aside class="w-64 bg-gray-900 text-white p-5 space-y-4">
    <h2 class="text-xl font-bold">Admin Panel</h2>
    <nav class="space-y-2 flex flex-col">
            <NuxtLink to="/admin/" class="px-4 py-2 hover:bg-blue-500 rounded">Home</NuxtLink>
            <NuxtLink to="/admin/services-moderation" class="px-4 py-2 hover:bg-blue-500 rounded">Services Moderation</NuxtLink>
            <NuxtLink to="/admin/system-logs" class="px-4 py-2 hover:bg-blue-500 rounded">System</NuxtLink>
            <NuxtLink to="/admin/user-management" class="px-4 py-2 hover:bg-blue-500 rounded">Users</NuxtLink>
    </nav>
  </aside>
</template>

