export default function TabButton({ children, isSelected, ...props }) {
  function handleClick() {
    console.log("Hello world!");
  }

  console.log("TAB component executing");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
