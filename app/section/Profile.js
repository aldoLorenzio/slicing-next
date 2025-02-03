import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-col text-center justify-center font-semibold ">
        <h1 className="text-2xl tracking-wider">Profile</h1>
        <h2 className="text-sm mt-2 text-gray-400">Mengenal saya secara singkat</h2>
        <div className="flex justify-center w-9/12 mx-auto mt-20">
          <div className="w-4/12">
            <img src="/PhotoProfile.png" className="w-full" />
          </div>
          <div className="w-6/12 ml-12 text-base">
            <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eleifend urna. Cras volutpat varius est. Nulla facilisi. Proin vel fringilla lacus, quis vehicula ante. Donec dictum justo ac finibus bibendum. Nunc eget diam egestas, hendrerit purus eu, fermentum turpis. Aenean eget enim odio. Pellentesque semper eros id efficitur vulputate. Ut at dapibus turpis. Curabitur ac est in justo sagittis rhoncus at sed diam. Aenean ante arcu, condimentum in ex in, cursus auctor libero. Integer sollicitudin pulvinar turpis. Vivamus feugiat ultricies dolor, ac sagittis augue interdum vel. Nam aliquam nibh orci, finibus feugiat felis molestie eget. Vivamus quis egestas lacus. Suspendisse id ultricies metus, at vestibulum tortor.
            Vestibulum accumsan magna sed lorem tincidunt, at fermentum justo vehicula. Integer sed elit id lectus euismod sagittis. Fusce dapibus, risus at hendrerit aliquet, dolor lacus porttitor libero, vitae euismod nibh lacus euismod arcu. Praesent gravida lacinia molestie. Proin scelerisque lacinia turpis nec placerat. Duis vestibulum sit amet augue at porta. Etiam 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
