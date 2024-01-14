import { Component } from '@angular/core';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrl: './decisions.component.css'
})
export class DecisionsComponent {
  texts = [
    {
      id: 1, heading: "Get bird's eye view on your marketing initiatives", desc: 'With a live marketing dashboard, you dont have to switch between platforms to keep track of your marketing campaigns, regardless of whether they are social media strategy or paid ads strategy.', list: [
        { li: 'Performance Marketing' },
        { li: 'Social media analytics' },
        { li: 'Competative analytics' },
      ]
    },
    {
      id: 2, heading: 'See cross-channel insights in action', desc: 'Get a holistic view of your ads campaigns with our cross-channel tool that integrates Meta, Google ads, and LinkedIn Ads for all-inclusive cross-channel insights.', list: [
        { li: 'Meta Ads' },
        { li: 'Google Ads' },
        { li: 'LinkedIn Ads' },
        { li: 'Amazon Ads' },
      ]
    },
    {
      id: 3, heading: 'Know who\'s the actual customer', desc: 'Empower your marketing decisions with our robust demographic analysis feature, providing detailed insights on age, gender, location, device usage, and ad placement.', list: [
        { li: 'Demographics breakdown' },
        { li: 'Placement breakdown' },
        { li: 'Device breakdown' },
      ]
    },
  ];

  currentText: { heading: string, desc: string, list: { li: string }[] } = this.texts[0];

  activeTab: number = 1;

  changeText(index: number): void {
    this.currentText = this.texts[index - 1];
    this.activeTab = index;
  }
}
