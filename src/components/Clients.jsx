import { testimonials } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Clients = () => {
  const date = new Date();
  const today = date.getHours();

  const [myClients, setCLients] = useState([]);

  const applyfilter = () => {
    today < 12
      ? setCLients(testimonials.slice(0, 3))
      : setCLients(testimonials.slice(3, 6));
  };

  useEffect(() => {
    applyfilter();
  }, [today, testimonials]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[7%]">
      {myClients.map((item, index) => {
        return (
          <div key={index}>
            <div className="bg-textcolor text-background p-8 rounded-lg flex flex-col gap-4 transition-all duration-700 hover:scale-105 cursor-pointer">
              <p>⭐⭐⭐⭐⭐</p>
              <p>{item.experience}</p>
              <div className="flex items-center gap-3">
                <Image
                  className="w-12 rounded-full"
                  src={item.img}
                  alt="client img"
                />
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Clients;
