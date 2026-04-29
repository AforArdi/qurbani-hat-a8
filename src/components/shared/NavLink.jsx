'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const activePath = href === pathname;

    return ( 
        <div>
            <Link href={href} className={`${activePath ? 'border-b-2 border-[#E7D6CE]' : ''}`}>{children}</Link>
        </div>
     );
}
 
export default NavLink;