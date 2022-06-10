import Link from 'next/Link'
export default function NavBar() {
  return (

    <nav>
      <ul>
        <li>
          <Link href="/"><a>home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>about</a></Link>
        </li>
      </ul>
      <style jsx>
        {`nav ul{
   list-style-type: none;
   padding: 0;
 }
 nav li{ 
   display: inline;
   
 }
 nav li:not(:first-child){
  margin-left: 10px; 
}`}
      </style>
    </nav>

  )
}
