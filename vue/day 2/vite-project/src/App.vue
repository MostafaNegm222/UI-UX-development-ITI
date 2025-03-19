<script>
import Card from "./components/Card.vue";
import Courses from "./components/Courses.vue";

export default {
    data () {
      return {
        articles: [
        {
          id: 1,
          title: "Getting Started with Vue.js",
          subtitle: "A Beginner's Guide to Vue.js Framework",
          level: 1,
          description:
            "Learn the basics of Vue.js and start building interactive web applications.",
          author: "Mohamed",
          publishDate: "2025-02-21",
        },
        {
          id: 2,
          title: "JavaScript Best Practices",
          subtitle:
            "Essential Tips for Writing Clean and Efficient JavaScript Code",
          level: 1,
          description:
            "Improve your JavaScript coding skills with these best practices and coding standards.",
          author: "Sarah Ahmed",
          publishDate: "2025-02-20",
        },
        {
          id: 3,
          title: "Responsive Web Design Techniques",
          level: 1,
          subtitle:
            "How to Create Websites That Work Seamlessly Across Devices",
          description:
            "Explore modern techniques and tools for creating responsive web designs.",
          author: "John Doe",
          publishDate: "2025-02-19",
        },
        {
          id: 4,
          title: "Mastering Async/Await in JavaScript",
          level: 2,
          subtitle: "Simplifying Asynchronous JavaScript with Promises",
          description:
            "Learn how to handle asynchronous operations using async/await for cleaner code.",
          author: "Emily Carter",
          publishDate: "2025-02-18",
        },
        {
          id: 5,
          title: "Introduction to Web Performance Optimization",
          level: 2,
          subtitle: "Boost Your Website's Speed and Efficiency",
          description:
            "Discover key strategies to optimize web performance for better user experience.",
          author: "James Lee",
          publishDate: "2025-02-17",
        },
        {
          id: 6,
          title: "Node.js for Beginners",
          level: 1,
          subtitle: "Understanding the Basics of Server-Side JavaScript",
          description:
            "Get started with Node.js and learn how to build backend applications using JavaScript.",
          author: "Aisha Khan",
          publishDate: "2025-02-16",
        },
        {
          id: 7,
          title: "Understanding CSS Grid and Flexbox",
          level: 2,
          subtitle: "Mastering Modern CSS Layout Techniques",
          description:
            "Learn how to use CSS Grid and Flexbox to create flexible and responsive web layouts.",
          author: "Robert Smith",
          publishDate: "2025-02-15",
        },
        {
          id: 8,
          title: "Introduction to RESTful APIs",
          level: 1,
          subtitle: "Building and Consuming APIs for Web Applications",
          description:
            "Understand REST principles and how to work with APIs in modern web development.",
          author: "Sophia Brown",
          publishDate: "2025-02-14",
        },
      ],

      }
    }
  ,components: {
    Card, Courses
  },
};
</script>

<template>
  <Courses v-for="article in articles" class="card">
    <template #header> 
      <div :level ="article.level" ></div>
      <h2>{{ article.title }}</h2>
      <p>{{ article.subtitle }}</p>
    </template>
    <template #body>
      <p>{{ article.description }}</p>
    </template>
    <template #footer>
      <h4>{{ article.author }}</h4>
      <p>{{ article.publishDate }}</p>
    </template>
  </Courses>
</template>


<style>
  .card {
    border: 1px solid #777;
    padding: 12px;
  }
</style>