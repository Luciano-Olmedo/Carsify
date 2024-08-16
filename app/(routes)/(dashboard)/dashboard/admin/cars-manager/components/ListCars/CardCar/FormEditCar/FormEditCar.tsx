import { FormEditCarProps } from "./FormEditCar.types";
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormEditCar.form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios"
import { useRouter } from "next/navigation";


export  function FormEditCar(props:FormEditCarProps) {
 
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter()
  const {carData,setOpenDialog}= props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cv: "",
      transmission: "",
      people: "",
      photo: "",
      engine: "",
      type: "",
      isPublish: false,
    },
    
  })
  const { isValid } = form.formState;
  return (
    <div>FormEditCar</div>
  )
  
}
