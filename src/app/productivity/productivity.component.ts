import { Component } from '@angular/core';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrl: './productivity.component.css'
})
export class ProductivityComponent {
  texts = [
    {id: 1, heading: "Prompt Data. Peak Efficiency.", desc: 'Transform your daily analysis with our feature-rich tool, offering intuitive charts and graphs to drastically cut down your data crunching time. Make smarter decisions, faster than ever!'},
    {id: 2, heading: 'Save time. Do more.', desc: 'Experience the power of instant, rapid reporting and automate reporting which reduces the reports creation process to minutes. Save time, focus more on strategy, and drive growth from our agency reporting tool.'},
    {id: 3, heading: 'All your data fetched into Google Sheets. In 3-clicks.', desc: 'Get daily, weekly, and monthly ads and social media data into Google Sheets. It takes less than 2-minutes to set it up with zero learning curve so you can actually focus on planning and optimizing your campaigns.'},
    {id: 4, heading: 'One tool. For all your marketing divisions', desc: 'Enhance and streamline your marketing collaboration between your social media, performance marketing, and marketing analytics teams as they access all the marketing data at one place.'},

  ];

  currentText: { heading: string, desc: string} = this.texts[0];

  activeTab: number = 1;

  changeText(index: number): void {
    this.currentText = this.texts[index - 1];
    this.activeTab = index;
  }
}
