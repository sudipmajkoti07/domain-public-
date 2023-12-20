
import Header from './header';
import About from './About';
import Projects from './Projects';
import SkillsComponent from './SkillsComponent';
import ContactComponent from './ContactComponent';

const skillsData = [
  { title: 'Bootstrap', description: 'Bootstrap is a front-end framework...', progress: 85, barWidth: 1 },
  { title: 'React', description: 'React is a JavaScript library for building...', progress: 75, barWidth: 2 },
  { title: 'Vue', description: 'Vue is a progressive JavaScript framework...', progress: 65, barWidth: 3 },
  { title: 'WordPress', description: 'WordPress is a content management system...', progress: 95, barWidth: 4 },
  { title: 'WordPress', description: 'WordPress is a content management system...', progress: 95, barWidth: 4 },
];

function App() {

  return (
    <div>
      <Header/>
      <About />
      <Projects />
      <SkillsComponent skills={skillsData} />
      <ContactComponent/>
  
     
    </div>
  );
}

export default App;
