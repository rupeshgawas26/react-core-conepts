export default function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    console.log("Hello world!");
  }

  console.log("TAB component executing");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
