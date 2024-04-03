/* eslint-disable @typescript-eslint/no-explicit-any */
export const selectStyles = {
    control: (provided: any) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
    border: "none",
    },
    }),
    placeholder: (provided: any) => ({
    ...provided,
    color: "var(--jf-placeholder-font-color)",
    }),
    option: (provided: any) => ({
    ...provided,
    color: "var(--jf-primary-font-color)",
    }),
    indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
    }),
    };