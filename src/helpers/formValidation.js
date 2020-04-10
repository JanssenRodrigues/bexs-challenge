export const formValidation = formReference => {
  const formFields = Object.values(formReference.current).filter(
    item => item.tagName === "INPUT" && item
  );

  return formFields.some(item => item.value === "" && false);
};
