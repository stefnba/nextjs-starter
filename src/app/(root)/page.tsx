// import prisma from '@/actions/test';
// import { getSession } from '@/actions/user/getCurrentUser';
import { logger } from '@/logger';
import Link from 'next/link';

interface HomeProps {
    searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
    logger.info('Test');
    return (
        <>
            <div className="text-xl">Page12</div>

            <p>
                <Link href="/example/">s</Link>
            </p>
        </>
    );
}
