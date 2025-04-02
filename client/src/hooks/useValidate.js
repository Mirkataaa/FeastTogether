import { useState } from "react";

export default function useValidate(initialValues) {

  const [errors, setErrors] = useState({});

  
  const validateField = (name, value) => {
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = `${name} is required`;
    }
    return errorMessage;
  };

  const handleBlur = (e, index = null) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);

    setErrors((prevErrors) => {
      if (index !== null) {
        return {
          ...prevErrors,
          ingredients: prevErrors.ingredients
            ? prevErrors.ingredients.map((err, i) =>
                i === index ? { ...err, [name]: errorMessage } : err
              )
            : initialValues.ingredients.map((_, i) =>
                i === index ? { [name]: errorMessage } : {}
              ),
        };
      } else {
        return {
          ...prevErrors,
          [name]: errorMessage,
        };
      }
    });
  };

  return {
    errors,
    handleBlur
  }
}
