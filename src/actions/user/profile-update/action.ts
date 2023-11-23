'use server';

import { createMutation } from '@/lib/create-mutation';
import prisma from '@/db/client';

import { Schema } from './schema';
import { InputType, ReturnType } from './types';

const action = async (data: InputType): Promise<ReturnType> => {
    const updatedUserProfile = await prisma.user.update({
        where: {
            email: 'stefanjakob.bauer@gmail.com'
        },
        data
    });

    return updatedUserProfile;
};

export const mutation = createMutation(action, Schema);
