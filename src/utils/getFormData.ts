export default function getFormData(formData: FormData) {

    const data: Data = {};

    formData.forEach((val, key) => {
        data[key] = val;
    });

    return data;
}