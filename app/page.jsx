import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Explore the Imagination <br className="max-md:hidden"/>
      <span className="blue_gradient text-center">Create & Share</span>
    </h1>
    <p className="desc text-center">
      <span className="blue_gradient font-semibold italic">getPrompts&nbsp;</span> is an open-source AI prompting tool for chatGPT, Midjourney, DALL-E and more of modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
