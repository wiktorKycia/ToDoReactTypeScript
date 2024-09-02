import * as React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}
export default Container;