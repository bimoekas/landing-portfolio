import { PropsWithChildren } from 'react'

const FormGroup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col space-y-1.5">{children}</div>
}

export default FormGroup
