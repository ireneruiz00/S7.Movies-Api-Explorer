import type { MiniCardProps } from "../../types/props";

function MiniCard({ name, imageUrl, onClick }: MiniCardProps) {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer mt-3" onClick={onClick}>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-24 h-36 object-cover rounded-md mb-1" />
      ) : (
        <div className="w-24 h-36 bg-blue-900/15 rounded-md mb-1 flex items-center justify-center text-sm text-gray-400">
          No Image
        </div>
      )}
      <p className="text-sm text-center text-yellow-100">{name}</p>
    </div>
  )
}
export default MiniCard