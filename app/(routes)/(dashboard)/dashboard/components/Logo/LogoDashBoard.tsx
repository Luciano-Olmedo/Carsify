import Link from "next/link";
import Image from "next/image";


export  function LogoDashBoard() {
  return (
    <Link href="/">
        <Image src="/logo.svg" alt="logo" height={30} width={30} priority/>
       
    </Link>
  )
}
