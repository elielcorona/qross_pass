// shared/components/DropdownItem.jsx
import Button from "./Button";

export default function DropdownItem({ title, description, image, links = [] }) {
  return (
    <div className="hover-dropdown p-4 bg-black/90 text-white rounded shadow-lg flex flex-col gap-3 text-center w-full max-w-md">
      {image && (
        <img src={image} alt={title} className="w-32 h-32 object-cover rounded mx-auto" />
      )}
      <div>
        <h6 className="font-bold mb-2">{title}</h6>
        <p className="text-sm">{description}</p>
        <div className="flex justify-center gap-2 flex-wrap mt-3">
          {links.map((link, i) => (
            <a key={i} href={link.href}>
              <Button variant={link.variant} icon={link.icon}>
                {link.text}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
