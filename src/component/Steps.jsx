import React from 'react';

const Steps = () => {
    return (
        <div class="bg-white py-16 px-4">
  
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold">Get Started In 3 Steps</h2>
    <p class="text-gray-500 mt-2">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* <!-- Card 1 --> */}
    <div class="relative  rounded-xl p-8 text-center shadow-sm">
      <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">01</div>
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl"><img src="src/assets/user.png" alt="" class="size-10" /></div>
      <h3 class="font-semibold text-lg">Create Account</h3>
      <p class="text-gray-500 text-sm mt-2">Sign up for free in seconds. No credit card required to get started.</p>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="relative  rounded-xl p-8 text-center shadow-sm">
      <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">02</div>
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl"><img src="src/assets/package.png" alt="" class="size-10" /></div>
      <h3 class="font-semibold text-lg">Choose Products</h3>
      <p class="text-gray-500 text-sm mt-2">Browse our catalog and select the tools that fit your needs.</p>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="relative  rounded-xl p-8 text-center shadow-sm">
      <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">03</div>
      <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl"><img src="src/assets/rocket.png" alt="" class="size-10" /></div>
      <h3 class="font-semibold text-lg">Start Creating</h3>
      <p class="text-gray-500 text-sm mt-2">Download and start using your premium tools immediately.</p>
    </div>

  </div>
</div>
    );
};

export default Steps;