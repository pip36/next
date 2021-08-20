import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Nav;
