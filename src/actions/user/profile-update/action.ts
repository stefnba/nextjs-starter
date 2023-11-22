'use server';

import { createMutation } from '@/lib/create-mutation';

import { Schema } from './schema';
import { InputType, ReturnType } from './types';

const action = async (data: InputType): Promise<ReturnType> => {
    // throw new Error('Parameter is not a number!');

    return {
        test: 123,
        data
    };
};

export const mutation = createMutation(action, Schema);
