<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Elliot Zheng',
    title: 'Administrative President',
    desc: 'Elliot Zheng, President, is a senior and it’s his fourth year on the team. He enjoys playing clarinet, playing video games, building computers, coding and has a passion for Electric Vehicles. He also has a cat named Lumi and a doggo named Zelda.'
  },
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Michael Oh',
    title: 'Building President',
    desc: 'Michael Oh, President, is a senior.'
  }
]
</script>

# Our Team

## First Tech Challenge

FIRST Tech Challenge is an exciting and competitive robotics program that challenges teams to design, build, program, and operate robots in a head-to-head alliance format. Through this program, students have the opportunity to develop crucial STEM skills and apply engineering principles, all while learning the importance of teamwork, innovation, and hard work. Participating in FTC can also open up opportunities for students to apply for scholarships and internships offered by universities and companies that support FIRST programs.

Our team, 4654, was founded in 2010 and we are proud to compete in the NY Excelsior Region. This region encompasses all of New York State except for New York City and Long Island, and we are excited to represent our region at regional and national competitions. By participating in this competition, we hope to inspire a love of STEM in our members and make a positive impact in our community.

<div class="tip custom-block" style="padding-top: 8px">

Find out more information about [FIRST](https://www.firstinspires.org/robotics/ftc).

</div>

## Our Team

<VPTeamMembers size="medium" :members="members" />