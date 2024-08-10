"use client"
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { Fuel,Gauge,Trash, Upload,Users,Wrench,Gem } from "lucide-react";
import { CardCarProps } from "./CardCar.type";
import Image from "next/image";
import { useRouter } from "next/navigation";


export  function CardCar(props:CardCarProps) {
    const {car} = props;
  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
        <Image 
          src={car.photo}
          alt={car.name}
          width={400}
          height={600}
          className="rounded-lg"
        >

        </Image>

    </div>
  )
}
