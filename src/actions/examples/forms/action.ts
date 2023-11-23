'use server';

import { createMutation } from '@/lib/create-mutation';

import { Schema } from './schema';
import { InputType, ReturnType } from './types';

const action = async (data: InputType): Promise<ReturnType> => {
    return {
        test: 123,
        data
    };
};

export const mutation = createMutation(action, Schema);
