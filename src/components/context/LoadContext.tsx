import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface LoadInterface {
    loaded:number;
    setLoaded: Dispatch<SetStateAction<number>>
}

export const LoadContext = createContext<LoadInterface | null >(null);

export const LoadProvider = ({ children }: { [key: string]: Array<React.ReactElement> })=>{
    const [loaded, setLoaded] = useState(0)

    return (
		<LoadContext.Provider value={{loaded, setLoaded}}>
			{children}
		</LoadContext.Provider>
	);
}