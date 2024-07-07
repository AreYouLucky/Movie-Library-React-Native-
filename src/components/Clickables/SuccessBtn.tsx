import { ReactNode } from "react"

interface Props{
    children : ReactNode;
    onClick: () => void;
    color?: string;
}

function SuccessBtn({children, onClick, color = 'primary'}: Props) {
  return (
    <button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>
  )
}

export default SuccessBtn