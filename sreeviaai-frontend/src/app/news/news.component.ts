import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
   // Posts data (For demonstration, you can replace this with your actual data)
   posts = [
    { title: 'SreeVia Ai recognized by Global C-Suite Community platform', description: 'SreeVia AI Technologies has been recognized with a prestigious award for AI Innovation.', date: 'March 20, 2025', image: 'image1.png' },
    { title: 'Strengthening AI through Strategic Partnerships', description: 'Sreevia AI CEO attended the APTA Katalyst Global Business Conference 2025 held in Hyderabad.', date: 'March 18, 2025', image: 'image2.png' },
    { title: 'First International Project of Sreevia AI', description: 'Sreevia AI\'s AI-powered solutions are being deployed to help cities become smarter.', date: 'March 15, 2025', image: 'image3.png' },
    { title: 'AI-driven Healthcare Solutions', description: 'Sreevia AI is pioneering solutions in healthcare, transforming patient diagnosis and treatment using AI.', date: 'March 12, 2025', image: 'image1.png' },
    { title: 'AI in Autonomous Vehicles', description: 'The future of transportation is here, and Sreevia AI is at the forefront of autonomous vehicle technology.', date: 'March 10, 2025', image: 'image2.png' },
    { title: 'Breaking Boundaries in Natural Language Processing', description: 'Sreevia AI\'s breakthrough in NLP is making waves in industries ranging from healthcare to finance.', date: 'March 8, 2025', image: 'image3.png' },
  ];

  // Initial visible posts (First 3)
  visiblePosts = this.posts.slice(0, 3);

  // Additional posts that will be shown when the "More" button is clicked
  extraPosts = this.posts.slice(3);

  // Track whether extra posts are shown or hidden
  showExtraPosts = false;

  // Function to toggle the visibility of extra posts
  toggleExtraPosts(): void {
    this.showExtraPosts = !this.showExtraPosts;

    if (this.showExtraPosts) {
      this.visiblePosts = this.posts; // Show all posts
    } else {
      this.visiblePosts = this.posts.slice(0, 3); // Show only first 3 posts
    }
  }
}
