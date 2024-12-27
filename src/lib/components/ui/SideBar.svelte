<script>
  let isOpen = $state(false);

  const toggleMenu = () => isOpen = !isOpen;
</script>

<aside class="relative">
  <button onclick={toggleMenu} class="fixed lg:hidden z-10 top-6 right-8 flex flex-col justify-between w-6 h-4" aria-label="Toggle Menu">
    <span class:top-[50%]={isOpen} class:rotate-[-135deg]={isOpen} class="relative h-0.5 w-full bg-white transition ease-in-out duration-300"></span>
    <span class:opacity-0={isOpen} class="h-0.5 w-full bg-white transition ease-in-out duration-100"></span>
    <span class:top-[-6px]={isOpen} class:rotate-[135deg]={isOpen}  class="relative h-0.5 w-full bg-white transition ease-in-out duration-300"></span>
  </button>

  <div class:translate-x-0={isOpen} class:translate-x-full={!isOpen} class="fixed inset-0 lg:top-0 lg:left-0 lg:w-min lg:translate-x-0 flex flex-col items-center justify-center lg:justify-between bg-blue-950 lg:bg-neon-500 lg:px-12 py-10 lg:py-20 lg:h-full transition ease-in-out duration-300">
    <div class="flex flex-col justify-center lg:justify-between space-y-12 lg:h-[65%] lg:text-blue-950">
      <a class="text-3xl lg:text-xl font-bold lg:font-normal uppercase flex-none lg:-rotate-90 self-center" href="#blog">Blog</a>
      <a class="text-3xl lg:text-xl font-bold lg:font-normal uppercase flex-none lg:-rotate-90 self-center" href="#work">Work</a>
      <a class="text-3xl lg:text-xl font-bold lg:font-normal uppercase flex-none lg:-rotate-90 self-center" href="#about">About</a>
      <a class="text-3xl lg:text-xl font-bold lg:font-normal uppercase flex-none lg:-rotate-90 self-center pr-4" href="#contact">Contact</a>
    </div>
  
    <ul class="flex lg:flex-col mt-24 space-x-14 lg:space-x-0 lg:space-y-9">
      <li>
        <a class="text-white lg:text-blue-950" href="https://www.linkedin.com/in/tonyspunei" target="_blank" aria-label="LinkedIn">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8943 9.70883V10.919C20.064 10.1937 21.4145 9.77091 23.4665 9.77091C30.145 9.77091 31 14.7533 31 19.0938V30.9321L23.278 31V19.6776C23.278 17.7769 22.5959 17.4162 21.3349 17.4162C20.1359 17.4162 19.3917 17.7944 19.3917 19.6776V31L11.5686 30.9321V9.70881L18.8943 9.70883ZM7.77253 9.69604V30.9911H0V9.69606H7.77253V9.69604ZM5.8294 11.6355H1.94313V29.0516H5.8294V11.6355V11.6355ZM16.9511 11.6483H13.5118V29.0101L17.4486 29.045V19.6776C17.4486 16.0217 19.8833 15.4767 21.3349 15.4767C23.107 15.4767 25.2211 16.206 25.2211 19.6776V29.045L29.0569 29.0101V19.0938C29.0569 13.7118 27.5432 11.7103 23.4665 11.7103C21.0162 11.7103 19.9552 12.4357 18.9156 13.3084L18.6456 13.5373H16.9511V11.6483ZM3.88627 0C6.02955 0 7.77253 1.73968 7.77253 3.87888C7.77253 6.01808 6.02955 7.75775 3.88627 7.75775C1.743 7.75775 0 6.01808 0 3.87888C0 1.73968 1.743 0 3.88627 0ZM3.88627 1.93944C2.8156 1.93944 1.94313 2.81025 1.94313 3.87888C1.94313 4.9475 2.8156 5.81831 3.88627 5.81831C4.95693 5.81831 5.8294 4.9475 5.8294 3.87888C5.8294 2.81025 4.95693 1.93944 3.88627 1.93944Z" fill="currentColor"/>
          </svg>
        </a>
      </li>
      <li>
        <a class="text-white lg:text-blue-950" href="https://github.com/tonyspunei" target="_blank" aria-label="GitHub">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0002 0C23.2847 0 30.0003 6.88496 30.0003 15.3795C30.0003 22.1731 25.7073 27.9362 19.7507 29.9717C18.9902 30.1232 18.7202 29.643 18.7202 29.2334C18.7202 28.7264 18.7382 27.0705 18.7382 25.0125C18.7382 23.5784 18.2582 22.6425 17.7197 22.1655C21.0602 21.7845 24.5702 20.4839 24.5702 14.5768C24.5702 12.8968 23.9882 11.5258 23.0252 10.4488C23.1812 10.0603 23.6957 8.49601 22.8782 6.37799C22.8782 6.37799 21.6212 5.96589 18.7577 7.95491C17.5592 7.61441 16.2752 7.44309 15.0002 7.43709C13.7251 7.44309 12.4426 7.61441 11.2456 7.95491C8.37909 5.96589 7.11907 6.37799 7.11907 6.37799C6.30457 8.49601 6.81907 10.0603 6.97357 10.4488C6.01506 11.5258 5.42856 12.8968 5.42856 14.5768C5.42856 20.4689 8.93109 21.7895 12.2626 22.178C11.8336 22.562 11.4451 23.2394 11.3101 24.2339C10.4551 24.6269 8.28308 25.3071 6.94507 22.9565C6.94507 22.9565 6.15156 21.4788 4.64555 21.3708C4.64555 21.3708 3.18303 21.3514 4.54354 22.3054C4.54354 22.3054 5.52606 22.7779 6.20856 24.5554C6.20856 24.5554 7.08908 27.3004 11.2621 26.3704C11.2696 27.6559 11.2831 28.8674 11.2831 29.2334C11.2831 29.64 11.0071 30.1157 10.2586 29.9732C4.29754 27.9407 0 22.1746 0 15.3795C0 6.88496 6.71707 0 15.0002 0Z" fill="currentColor"/>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</aside>