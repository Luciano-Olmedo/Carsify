import Link from "next/link";
import Image from "next/image";


export  function LogoDashBoard() {
  return (
    <Link href="/" className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20">
        <Image src="/logo.svg" alt="logo" height={30} width={30} priority/>
        <h1 className="text-xl font-bold">Carsify</h1>
                                        



       
    </Link>
  )
}
