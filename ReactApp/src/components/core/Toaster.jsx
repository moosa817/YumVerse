import toast from "react-hot-toast";

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#796B5F",
      color: "#fff",
      padding: "16px",
      borderRadius: "10px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    iconTheme: {
      primary: "#c3b089",
      secondary: "#796B5F",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#B91C1C",
      color: "#fff",
      padding: "16px",
      borderRadius: "10px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    iconTheme: {
      primary: "#FEE2E2",
      secondary: "#B91C1C",
    },
  });
};

export const showWarningToast = (message) => {
  toast(message, {
    duration: 3000,
    position: "top-center",
    icon: "⚠️",
    style: {
      background: "#c3b089",
      color: "#4B3F2F",
      padding: "16px",
      borderRadius: "10px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  });
};
