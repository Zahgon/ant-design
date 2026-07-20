import * as React from 'react';

const DisabledContext = React.createContext<boolean>(false);

export interface DisabledContextProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export const DisabledContextProvider: React.FC<DisabledContextProps> = ({ children, disabled }) => {
    throw new Error("STUB");
};

export default DisabledContext;
