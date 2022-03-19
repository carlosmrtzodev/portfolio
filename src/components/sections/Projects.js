import Card from "../elements/Card";
import Title from "../elements/Title";

const Projects = () => {
  return (
    <>
      <section id="projects" className="section__projects">
        <Title number="03." text="Projects" />

        <div className="projects__container">
          <Card
            link="https://pomodoro-app-sage.vercel.app/"
            github="https://github.com/carlosmrtzodev/Pomodoro-app"
            title="Pomodoro App"
            description="Pomodoro App in React.js with React Router and Styled Components."
            codes={["React.js", "JavaScript", "CSS"]}
          />

          <Card
            link="https://simple-user-manager.vercel.app/"
            github="https://github.com/carlosmrtzodev/simple-user-manager"
            title="User Manager App"
            description="Simple User Manager App in React.js and Tailwind CSS."
            codes={["React.js", "JavaScript", "Tailwind CSS"]}
          />

          <Card
            link="https://oshica.com.ve/"
            github="null"
            title="Oshica"
            description="Oshica Website in WordPress with Elementor."
            codes={["WordPress", "Elementor", "CSS"]}
          />

          <Card
            link="https://compound-interest-one.vercel.app/"
            github="https://github.com/carlosmrtzodev/compound-interest"
            title="Compound Interest App"
            description="Simple Compound Interest App in React.js with Formik Forms and Tailwind CSS."
            codes={["React.js", "JavaScript", "Tailwind CSS"]}
          />

          <Card
            link="https://cart-app-ten.vercel.app/"
            github="https://github.com/carlosmrtzodev/cart-app"
            title="Cart App"
            description="Simple Cart App in React.js with React Router and Styled Components. "
            codes={["React.js", "JavaScript", "CSS"]}
          />

          <Card
            link="http://www.s2ctech.com/"
            github="null"
            title="S2CTech"
            description="S2CTech Website in WordPress with Elementor."
            codes={["WordPress", "Elementor", "CSS"]}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
