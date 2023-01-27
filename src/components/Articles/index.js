import Post from "../Post";

const Article = () => {


  return (
    <section className="container">
      <h1>Article</h1>
      <div className="flex mt-5">
        <Post subtitle="tecnologia" title="O guia definitivo sobre o blog.">
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores cameras em 2021.">
          2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria.">
          3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Post>
      </div>
    </section>
  );
};

export default Article;
