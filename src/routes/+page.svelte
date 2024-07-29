<script lang="ts">
  import SideBar from "$lib/components/ui/SideBar.svelte";
  import Work from "$lib/components/ui/Work.svelte";
  import Layout from "$lib/components/layout/Layout.svelte";

  const work = [
    {
      heading: "Places to BVB",
      subheading: "Watch the Final",
      description: "Led the frontend development for BVB's international fan map, enabling fans worldwide to find and connect at locations to watch the Champions League final 2024, ensuring rapid deployment and seamless user experience.",
      role: "Frontend Development, User Experience",
      website: "https://placetobvb.bvb.de/",
      image: "/images/placetobvb.jpg"
    }
  ];

</script>

<SideBar />
<main>
  <Layout class="space-y-10 lg:space-y-0">
    <div slot="dark" class="h-full flex flex-col justify-center pt-14">
      <h1 class="text-neon-500 lg:text-white text-3xl lg:text-6xl font-semibold lg:font-outline">Hi there, I'm</h1>
      <h2 class="text-white text-6xl lg:text-8xl font-extrabold mt-5 lg:mt-4">Tony Spunei</h2>
      <h2 class="text-neon-500 lg:text-white text-xl lg:text-7xl md:leading-[71%] lg:leading-[71%] font-semibold lg:font-outline mt-7">Front-end <br class="hidden lg:block"/>Developer</h2>
      <p class="text-lg md:text-2xl xl:text-3xl font-bold w-full xl:w-4/6 pt-5 lg:mt-14">
        Seasoned front-end dev blending innovative tech with sustainable design for impactful digital solutions.
      </p>
      <div class="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 mt-20">
        <a class="lg:hidden bg-neon-500 py-3 lg:py-5 px-16 w-full md:w-fit lg:w-fit text-center font-semibold text-lg text-blue-950 hover:bg-transparent border-4 border-transparent hover:border-neon-500 hover:text-neon-500 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" href="#contact">Reach Out To Me</a>
        <a class="lg:hidden bg-gray-500 py-3 lg:py-5 px-16 w-full md:w-fit lg:w-fit text-center font-semibold text-lg text-white hover:bg-transparent border-4 border-transparent hover:border-gray-500 hover:text-neon-500 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" href="#work">See My Work</a>
      </div>
    </div>
  
    <div slot="neon" class="flex flex-col items-center justify-center space-y-10 lg:space-y-20 mt-10 lg:mt-0 px-6 lg:px-0 h-full">
      <span class="text-[170px]" >💻</span>
      <a class="hidden lg:flex bg-blue-950 py-3 lg:py-5 px-16 w-full lg:w-fit text-center font-semibold text-lg text-neon-500 hover:bg-neon-500 border-4 border-transparent hover:border-blue-950 hover:text-blue-950 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" href="#work">See My Work</a>
    </div>
  </Layout>

  {#each work as content}
    <Work {content} />
  {/each}
</main>