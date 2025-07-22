import type{ DetailsLayoutProps } from "../../types/props";

function DetailsLayout({ imageSrc, children }: DetailsLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 text-yellow-50">
      
      <img
        src={imageSrc}
        alt="Poster"
        className="rounded-xl w-full md:w-1/3 h-180"
      />

      <div className="flex-1 space-y-4">{children}</div>
    </div>
  );
}

export default DetailsLayout