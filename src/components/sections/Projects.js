import { motion } from "framer-motion";
import { Card } from "../elements/Card";
import { TitleLine } from "../elements/TitleLine";

const Projects = () => {
  return (
    <>
      <motion.section
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        id="projects"
        className="section projects"
      >
        <TitleLine number="03." text="Projects" />

        <div className="projects__container">
          <Card
            link="https://dominiquepanczuch.com/"
            github="null"
            title="Dominique"
            description="Dominique Portfolio Website in WordPress with a custom Template."
            codes={["WordPress", "JavaScript", "PHP"]}
          />

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
            description="Simple User Manager App in React.js with React Router and Tailwind CSS."
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
            description="Simple Compound Interest App in React.js with Formik Forms, React Router and Styled Components."
            codes={["React.js", "JavaScript", "CSS"]}
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
      </motion.section>
    </>
  );
};

export { Projects };
