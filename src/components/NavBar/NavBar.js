function NavBar(){
    return(
        <div>
            <header class = "header">
        <nav class = "nav">
          <a href = "#" class = "nav_logo" > Zinema</a>
          <ul class = "nav_items">
            <li class = "nav_item">
              <a href = "/home page" class = "nav_link">Home</a>
              <a href = "/home/movies" class = "nav_link">Movies</a>
              <a href = "#" class = "nav_link">Bookings</a>
              
            </li>
          </ul>
          <a href="http://localhost:3000/register">
          <button class = "button">Contact us</button>
          </a>
          
        </nav>
        </header>
        <section class = "home">
          

        </section>
        </div>
    );
}
export default NavBar;