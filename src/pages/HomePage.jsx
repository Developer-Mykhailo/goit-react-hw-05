import { Link } from "react-router-dom";
import Container from "../components/Container/Container";

const HomePage = () => {
  return (
    <Container>
      <h1>Trending today</h1>

      <ul>
        <li>
          <Link>movie</Link>
        </li>
      </ul>
    </Container>
  );
};

export default HomePage;
