import React from "react";

function Post() {
  return (
    <div className="flex my-6">
      <img
        className="w-64 rounded-2xl mr-4 object-cover"
        src="https://blog.hubspot.com/hs-fs/hubfs/what-is-a-blog-3.webp?width=893&height=600&name=what-is-a-blog-3.webp"
      />
      <div>
        <h2 className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-xs flex gap-1 order-last py-1 font-medium">
          <span className="text-black">Kashif Mansuri</span>
          <span className="text-gray-500">2023-08-21 14:24 IST</span>
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis alias
          nulla nam quo corporis quaerat qui in assumenda hic possimus ullam
          quos, dolorum doloribus! Quas sapiente corrupti quisquam vitae
          praesentium!
        </p>
      </div>
    </div>
  );
}

export default Post;
