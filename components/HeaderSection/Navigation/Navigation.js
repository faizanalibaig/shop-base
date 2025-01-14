const options = ['Home', 'Apparel', 'Accessories', 'Digital'];
function Navigation() {
  return (
    <nav>
      <ol className="flex gap-8 text-base">
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className="h-full cursor-pointer border-b-2 border-transparent py-2 hover:border-black"
            >
              {item}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Navigation;
