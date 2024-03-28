import React, { useContext } from "react";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          console.log(toastMessage);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//create a hook that lets our components easily access the provider
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
//firstly we will define a type where our context that holds all the properties that we are going to expose to our components
//basically all the things that our components can access
