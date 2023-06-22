import { useContext } from "react";




export const TypeTestContext: React.FC<{ children : React.ReactNode}> = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div >
            {children}
        </div>
    )
}