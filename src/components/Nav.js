import Link from "next/link";

export default function Nav(){
  return (
    <nav>
      <ul>
        <li > <Link href='/'>Home</Link> </li>
        <li > <Link href='/basic/calc'>Calculator</Link> </li>
        <li > <Link href='/basic/counter'>Counter</Link> </li>
        <li > <Link href='/basic/bmi'>BMI</Link> </li>
      </ul>
    </nav>
  );
};