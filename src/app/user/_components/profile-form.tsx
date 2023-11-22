import { FormInput } from '@/components/form/input';
import { FormSubmit } from '@/components/form/submit';

interface UserUpdateFormProps {}

export const UserUpdateForm = ({}: UserUpdateFormProps) => {
    const handleSubmit = async (form: FormData) => {
        'use server';
        console.log(form.get('name') as string);
    };

    return (
        <form action={handleSubmit}>
            <FormInput
                id="name"
                label="Board title"
                type="text"
                // errors={fieldErrors}
            />
            <FormSubmit>Update</FormSubmit>
        </form>
    );
};
