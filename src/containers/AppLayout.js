import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>HOME</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>Calc</h2>
        </a>
      </Link>
      <Link href="/Bmi">
      <a>
        <h2>Bmi</h2>
      </a>
      </Link>
      <Link href="/grade">
      <a>
        <h2>Grade</h2>
      </a>
      </Link>
      <Link href="/login">
      <a>
        <h2>Login</h2>
      </a>
      </Link>
      <Link href="/counter">
      <a>
        <h2>Counter</h2>
      </a>
      </Link>
    </>
  );
};

export default AppLayout;