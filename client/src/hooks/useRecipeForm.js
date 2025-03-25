import useForm from "./useForm";

export default function useRecipeForm(callbackHandler , initialValues) {
    const {values , changeHandler , submitHandler , setValues} = useForm(callbackHandler , initialValues);

    const arrayChangeHandler = (field, index, e) => {
        const { name, value } = e.target;
        setValues((prev) => {
            const updatedArray = [...prev[field]];
            updatedArray[index] = { ...updatedArray[index], [name]: value };
            return { ...prev, [field]: updatedArray };
        });
    };

    const addArrayItem = (field, newItem) => {
        setValues((prev) => ({
            ...prev,
            [field]: [...prev[field], newItem],
        }));
    };

    const removeArrayItem = (field, index) => {
        setValues((prev) => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index),
        }));
    };

    return {
        values,
        changeHandler,
        submitHandler,
        arrayChangeHandler,
        addArrayItem,
        removeArrayItem,
    }
}