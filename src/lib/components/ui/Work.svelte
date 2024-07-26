<script lang="ts">
  import Layout from "$lib/components/layout/Layout.svelte";


</script>

<Layout id="work">
  <div slot="dark" class="lg:pt-10 flex flex-col gap-14">
    <h2 class="text-white lg:text-8xl tracking-wide font-extrabold text-center">My Work</h2>

    <div class="flex h-full lg:gap-10 2xl:gap-14">
      <div class="flex flex-col items-center h-auto lg:gap-12 2xl:gap-16">
        <h3 class="text-3xl lg:text-5xl font-bold tracking-tightery">01.</h3>
        <div class="w-px h-full bg-zinc-400" />
      </div>
      <div class="flex flex-col lg:gap-10 xl:gap-14 2xl:gap-20">
        <div class="flex flex-col gap-4 lg:gap-8 xl:gap-10">
          <h3 class="text-3xl lg:text-5xl font-bold">Pay.com</h3>
          <h4 class="text-xl lg:text-4xl font-medium">Accept Payments</h4>
        </div>

        <picture class="lg:hidden aspect-video overflow-hidden rounded-md">
          <img 
            class="object-cover w-full h-full"
            src="https://picsum.photos/1920/1080" 
            alt="" 
          />
        </picture>

        <p class="2xl:w-1/2 leading-relaxed">
          Led the full deisng process on a multi million dollar domain for a fintech 
          company that is redefining the world of payments.
        </p>

        <div class="flex flex-col gap-6">
          <div class="border-y border-white py-6">
            <p><span class="font-bold">Role:</span> Product, Web-Design, Development & SEO</p>
          </div>
  
          <div class="flex flex-col 2xl:flex-row gap-2">
            <a 
              class="flex items-center justify-center bg-neon-500 text-black py-3 lg:px-8 2xl:px-12 w-full 2xl:w-fit text-center font-semibold text-lg 
                border-4 border-transparent whitespace-nowrap
                transition ease-in-out duration-300 
                hover:bg-black hover:border-neon-500 hover:text-white 
                focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" 
              href="#"
            >
              Go To Website
            </a>
            <a 
              class="flex items-center justify-center bg-slate-600 text-white py-3 px-5 w-full 2xl:w-fit text-center font-normal text-md 
                border-4 border-transparent whitespace-nowrap
                transition ease-in-out duration-300 
                hover:bg-black hover:border-neon-500 hover:text-white 
                focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-3" 
              href="#"
            >
              Case-study coming soon
            </a>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="neon">
    <h3>Coming Soon</h3>
  </div>
</Layout>