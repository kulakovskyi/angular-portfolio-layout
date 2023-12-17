import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  code = `
    /**
    * About Me
    * Experienced Angular Developer with Three Years of Expertise
    *
    * Brief Overview:
    * I bring a wealth of experience in Angular development, spanning over three years. My expertise
    * extends to various aspects of web development, including Lorem Ipsum dolor sit amet, consectetur
    * adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    * minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    * Excepteur sint occaecat.
    *
    * Key Points:
    * - Angular Expertise: Proficient in developing dynamic Single Page Applications (SPAs) and intricate components.
    * - Diverse Experience: Worked with a range of technologies and frameworks, staying abreast of modern web development trends.
    * - Creativity and Innovation: Actively contributed to significant projects, introducing innovative solutions and streamlining development processes.
    * - Commitment to Excellence: Constantly seeking opportunities for learning and adapting swiftly to new technologies.
    * - Team Collaboration: Proven track record as a team player, effectively collaborating with colleagues of varying expertise.
    * - Strategic Thinking: Capable of making informed technical decisions aligned with business requirements.
    *
    * I am poised to contribute my outstanding development skills to your team, creating technologically innovative products.
    * I am enthusiastic about the prospect of discussing how I can play a role in the success of your projects.
    *
    * Thank you for your consideration.
    */`;

  codeLines: string[] = this.code.split('\n');
}
