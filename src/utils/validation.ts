export const validateForm = (formData: { name: string; email: string; phone: string }) => {
    if (!formData.name || formData.name.length < 3) {
        return "Name must be at least 3 characters.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        return "Enter a valid email address.";
    }
    if (!formData.phone || formData.phone.length !== 10) {
        return "Phone number must be 10 digits.";
    }
    return null;
};
