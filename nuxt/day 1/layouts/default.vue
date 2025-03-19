

<template>
    <div class="min-h-screen flex flex-col bg-primary">    
    <NavBar/>
      <main class="flex-grow container mx-auto p-4">
        <slot />
      </main>
      <Footer/>
    </div>
  </template>
  