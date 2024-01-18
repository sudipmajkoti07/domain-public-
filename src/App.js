
import Header from './header';
import About from './About';
import Projects from './Projects';
import SkillsComponent from './SkillsComponent';
import ContactComponent from './ContactComponent';
import Footer from './Footer';


const skillsData = [
  { title: 'Programming', description: 'python,JS', progress: 85, barWidth: 1 },
  { title: 'Frontend', description: 'React', progress: 75, barWidth: 2 },
  { title: 'Database', description: 'MYsql', progress: 85, barWidth: 3 },
  { title: 'Data manipulation', description: 'pandas, pyspark ,seaborn', progress: 90, barWidth: 4 },
  { title: 'Data modeling', description: 'dimensional modeling', progress: 80, barWidth: 4 },
  { title: 'Data analytics', description: 'Powerbi', progress: 70, barWidth: 4 },
  { title: 'ETL framework', description: 'Airflow', progress: 50, barWidth: 4 },
  { title: 'cloud ', description: 'AWS', progress: 50, barWidth: 4 },
];

function App() {

  return (
    <div>
      <Header/>
      <About />
      <Projects />
      <SkillsComponent skills={skillsData} />
      <ContactComponent/>
      <Footer />
  
     
    </div>
  );
}

export default App;
