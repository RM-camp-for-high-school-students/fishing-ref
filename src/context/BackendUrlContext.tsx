import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

interface BackendUrlContextType {
  backendUrl: string;
  setBackendUrl: Dispatch<SetStateAction<string>>
}

export const BackendUrlContext = createContext<BackendUrlContextType>({
  backendUrl: '',
  setBackendUrl: () => {
  },
});

interface BackendUrlProviderProps {
  children: ReactNode;
}

export const BackendUrlProvider: React.FC<BackendUrlProviderProps> = ({children}) => {
  const [backendUrl, setBackendUrl] = useState<string>("");

  return (
    <BackendUrlContext.Provider value={{backendUrl, setBackendUrl}}>
      {children}
    </BackendUrlContext.Provider>
  );
};

