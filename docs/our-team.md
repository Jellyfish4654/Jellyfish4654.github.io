<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/elliot.png',
    name: 'Elliot Zheng',
    title: 'Administrative President',
    desc: 'Elliot Zheng, President, is a senior and it’s his fourth year on the team. He enjoys playing clarinet, playing video games, building computers, coding and has a passion for Electric Vehicles. He also has a cat named Lumi and a doggo named Zelda.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/michael.png',
    name: 'Michael Oh',
    title: 'Building President',
    desc: 'Michael Oh, President, is a senior.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/fiona.png',
    name: 'Fiona Chen,',
    title: 'Secretary',
    desc: 'Fiona Chen, Secretary, is a junior. This is her third year on the team. She is interested in the biomedical sciences, primarily neurology. In her free time, Fiona can be found practicing flute, playing Stardew Valley, or listening to Laufey.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/joaquin.png',
    name: 'Joaquin Otero',
    title: 'Treasurer',
    desc: 'Joaquin Otero, Treasurer, is a junior on his third year with the Jellyfish. He enjoys playing soccer, spending time with friends and family, and playing video games with friends. He is very interested in science, primarily biology and psychology. He is involved with the building and outreach parts of robotics.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/jeffrey.png',
    name: 'Jeffrey Kuo',
    title: 'Programming Officer',
    desc: 'Jeffrey Kuo, Programming Officer, is a junior and it’s his third year in the robotics team. His interests include playing video games, engineering, computer science, and anime. He wants to learn more about programming and mechanical design to utilize these skills in the future in engineering.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/taka.png',
    name: 'Taka Kimura',
    title: 'Relations Officer',
    desc: 'Taka Kimura, Relations Officer | junior'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/alex.png',
    name: 'Alex Thompson',
    desc: 'Alex Thompson is a junior on his third year in the robotics team. He is most involved in the outreach program of the robotics team and often makes and presents slideshows for Junior Jellies lessons. His favorite subject is science, particularly ecology. His favorite musical artists include Gorillaz, Daft Punk, and Radiohead.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/taira.png',
    name: 'Taira Nonami',
    desc: 'Taira Nonami is a junior and this is his third year on the robotics team. He enjoys playing a variety of instruments and creating music and has been learning since he was 3. He also loves drawing, and spending an unreasonable amount of time on video games and YouTube. Taira joined the robotics team out of peer influence at first, but has grown a keen interest for technology over the years and is currently learning to code.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/ian.png',
    name: 'Ian Goldfeld',
    desc: 'Ian Goldfeld, junior'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/austin.png',
    name: 'Austin Lu',
    desc: 'Austin Lu, junior, has been on the team for three years. He enjoys playing piano and violin, and has recently taken up viola as well. He also likes playing Valorant and petting his dog Ruby.'
  },
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Matthew Laterza',
    desc: 'Matthew Laterza is a junior and this is his third year on the team.'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Billy Oh',
    desc: 'Billy Oh, sophomore, enjoys playing sports and hanging out with his friends. His favorite food is pizza.'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Tag Bullard',
    desc: 'Tag Bullard is a sophomore and this is his first year in robotics. He enjoys playing videogames, watching tv, hanging out with friends, and not getting nearly enough sleep. He hopes to learn more about programming and coding through robotics.'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Lianne Ferentz',
    desc: 'Lianne Ferentz, freshman, enjoys playing flute and piano. She also likes to draw, crochet, and play with her cat Max!'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Jocelyn Zheng',
    desc: 'Jocelyn Zheng, freshman, is a Times New Roman fan and a minesweeper enthusiast. She likes coding, learning about natural language processing, and reading Ann Patchett novels.'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Amrit Mohapatra',
    desc: 'Amrit Mohapatra, freshman, likes to code and do math in their free time. They insist their secret ability is speaking Chinese….'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Martin Ayala',
    desc: 'Martin Ayala is a freshman. He likes to run, build things, draw, and learn about cities and transportation. He is also on Senate in addition to being on the robotics team.'
  }
  ,
  {
    avatar: 'https://raw.githubusercontent.com/Jellyfish4654/Jellyfish4654.github.io/master/docs/assets/people/face.png',
    name: 'Abigail Weintraub',
    desc: 'Abigail Weintraub is a freshman and an aspiring artist. Her hobbies include music, tennis, gaming, and all things art. Abigail enjoys math and science, and is passionate about digital design. She is always open to learning new things, including building robots!!'
  }
]
</script>

# Our Team

## First Tech Challenge

FIRST Tech Challenge is an exciting and competitive robotics program that challenges teams to design, build, program, and operate robots in a head-to-head alliance format. Through this program, students have the opportunity to develop crucial STEM skills and apply engineering principles, all while learning the importance of teamwork, innovation, and hard work. Participating in FTC can also open up opportunities for students to apply for scholarships and internships offered by universities and companies that support FIRST programs.

Our team, 4654, was founded in 2010 and we are proud to compete in the NY Excelsior Region. This region encompasses all of New York State except for New York City and Long Island, and we are excited to represent our region at regional and national competitions. By participating in this competition, we hope to inspire a love of STEM in our members and make a positive impact in our community.

<div class="tip custom-block" style="padding-top: 8px">

Find out more information about [FIRST Tech Challenge](https://www.firstinspires.org/robotics/ftc).

</div>

## Meet the Team <Badge type="warning" text="beta" />

<VPTeamMembers size="medium" :members="members" />