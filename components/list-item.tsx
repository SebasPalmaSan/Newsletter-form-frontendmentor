import { Check } from 'lucide-react'

interface Props {
    children: React.ReactNode;
}
const ItemList = ({ children }: Props) => {
  return (
    <li className="flex items-center">
        <span className="mr-4 mb-3 bg-orange-600 rounded-full border border-gray-600 w-5 h-5 place-content-center">
                <Check className="stroke-white w-4 h-4" />
        </span>
        <span>{children}</span>
    </li>
  )
}

export default ItemList


