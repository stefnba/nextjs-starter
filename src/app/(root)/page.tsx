// import prisma from '@/actions/test';
// import { getSession } from '@/actions/user/getCurrentUser';
import Link from 'next/link';

interface HomeProps {
    searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
    const pageSize = parseInt(searchParams['pageSize'] ?? '25');

    // const entities = await prisma({ listingId: '2', pageSize });

    // if (!(await getSession())) {
    //     return (
    //         <div>
    //             Not loggined In <Link href="/login">Login</Link>
    //         </div>
    //     );
    // }

    return (
        <>
            <div className="text-xl">Page</div>
        </>
    );
}
