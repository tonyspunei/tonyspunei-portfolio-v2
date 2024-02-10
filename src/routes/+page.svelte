<script>
  import SideBar from "$lib/components/ui/SideBar.svelte";

</script>

<SideBar />

<main class="h-screen w-full flex items-center">
  <section class="pl-72 text-white w-[calc(50%+208px)]">
    <h1 class="text-6xl md:font-outline">Hi there, I'm</h1>
    <h2 class="text-8xl font-extrabold mt-4">Tony Spunei</h2>
    <h2 class="text-7xl leading-[71%] md:font-outline mt-7">Front-end <br/>Developer</h2>
    <p class="text-3xl font-bold w-4/6 mt-14">
      Seasoned front-end dev blending innovative tech with sustainable design for impactful digital solutions.
    </p>
  </section>

  <section class="flex flex-col items-center justify-center h-full w-1/2 bg-neon-500 space-y-20">
    <span class="text-[170px]" >💻</span>
    <a class="bg-blue-950 py-5 px-16 font-semibold text-lg text-neon-500 hover:bg-neon-500 border-4 border-transparent hover:border-blue-950 hover:text-blue-950 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" href="#work">See My Work</a>
  </section>
</main>