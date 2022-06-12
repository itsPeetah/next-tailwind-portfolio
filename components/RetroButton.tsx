export default function RetroButton(props: { children: any }) {
  return (
    <div className="relative px-2 py-1 m-2 flex-none | border-2 border-black | before:absolute before:bg-gray-300 before:top-1 before:left-1 before:w-full before:h-full before:-z-10 before:hover:bg-emerald-300">
      {props.children}
    </div>
  );
}
