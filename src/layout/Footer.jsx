export default function Footer() {
  return(
    <footer className="page-footer blue darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="">Movie Appliaction</a>
        </div>
      </div>
    </footer>
  )
}