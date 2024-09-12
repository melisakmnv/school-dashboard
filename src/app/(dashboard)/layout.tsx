import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[clamp(60px,15%,16%)]">
                <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2 p-4">
                    <Image src={"/logo.png"} alt="logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold">E-Learning</span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[clamp(92%,85%,84%)] bg-[#F7F8FA] overflow-scroll ">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}
