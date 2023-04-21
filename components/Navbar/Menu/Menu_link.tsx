import Link from "next/link";
import { ScriptProps } from "next/script";

export default function Menu_link(props: ScriptProps) {
  return (
    <li className="hover:shadow-highlighter-line transition-all">
      <Link href={props.href}>
        {props.title}
      </Link>
    </li>
  );
}
