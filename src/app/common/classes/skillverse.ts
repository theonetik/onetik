import { Skillcategory } from "../interface/skillcategory"

export const TechSkill: Skillcategory[] = [
  {
    name: 'Frontend Development',
    subcategories: [
      {
        title: 'Core Skills',
        items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript']
      },
      {
        title: 'Frameworks & Libraries',
        items: ['Angular', 'React.js', 'Vue.js', 'Svelte', 'Next.js', 'Astro']
      },
      {
        title: 'UI & Styling',
        items: ['TailwindCSS', 'Bootstrap', 'Material UI', 'Chakra UI', 'Sass/SCSS']
      },
      {
        title: 'State Management',
        items: ['Redux', 'NgRx', 'MobX', 'Zustand', 'Vuex', 'Pinia']
      },
      {
        title: 'Build Tools',
        items: ['Vite', 'Webpack', 'Babel', 'ESBuild']
      },
      {
        title: 'Testing',
        items: ['Jest', 'Jasmine', 'Cypress', 'Playwright']
      }
    ]
  },

  {
    name: 'Backend Development',
    subcategories: [
      {
        title: 'Languages',
        items: ['Node.js', 'Python', 'Java', 'C# (.NET)', 'Go', 'PHP']
      },
      {
        title: 'Frameworks',
        items: [
          'Express.js', 'NestJS',
          'Django', 'Flask', 'FastAPI',
          'Spring Boot', 'ASP.NET Core', 'Laravel'
        ]
      },
      {
        title: 'API Development',
        items: ['REST API', 'GraphQL', 'gRPC', 'WebSockets']
      },
      {
        title: 'Authentication',
        items: ['JWT', 'OAuth2', 'Sessions', 'API Security']
      },
      {
        title: 'Architectures',
        items: ['Microservices', 'Serverless', 'Monolithic', 'Event-Driven Architecture']
      }
    ]
  },

  {
    name: 'Mobile Development',
    subcategories: [
      {
        title: 'Cross Platform',
        items: ['Flutter', 'React Native', 'Ionic + Angular', 'Kotlin Multiplatform']
      },
      {
        title: 'Native Apps',
        items: ['Android (Kotlin/Java)', 'iOS (Swift)']
      },
      {
        title: 'Tools',
        items: ['Firebase', 'OneSignal', 'App Center', 'Fastlane']
      }
    ]
  },

  {
    name: 'Databases',
    subcategories: [
      {
        title: 'Relational (SQL)',
        items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'MariaDB']
      },
      {
        title: 'NoSQL',
        items: ['MongoDB', 'Firestore', 'DynamoDB', 'CouchDB', 'Cassandra']
      },
      {
        title: 'In-Memory',
        items: ['Redis', 'Memcached']
      },
      {
        title: 'ORM / Query Builders',
        items: ['Prisma', 'TypeORM', 'Sequelize', 'Mongoose', 'Hibernate', 'Entity Framework']
      }
    ]
  },

  {
    name: 'DevOps',
    subcategories: [
      {
        title: 'Version Control',
        items: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
      },
      {
        title: 'CI/CD',
        items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI']
      },
      {
        title: 'Containers',
        items: ['Docker', 'Docker Compose']
      },
      {
        title: 'Orchestration',
        items: ['Kubernetes', 'Helm', 'OpenShift']
      },
      {
        title: 'Infrastructure as Code',
        items: ['Terraform', 'Ansible', 'CloudFormation']
      },
      {
        title: 'Monitoring',
        items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
      }
    ]
  },

  {
    name: 'Cloud',
    subcategories: [
      {
        title: 'Providers',
        items: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure']
      },
      {
        title: 'AWS Skills',
        items: ['EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'API Gateway', 'CloudWatch', 'IAM']
      },
      {
        title: 'GCP Skills',
        items: ['Firebase', 'Cloud Run', 'Cloud Functions', 'App Engine', 'BigQuery', 'Cloud Storage']
      },
      {
        title: 'Azure Skills',
        items: ['Azure Functions', 'Azure SQL', 'Blob Storage', 'AKS', 'App Service']
      },
      {
        title: 'Cloud Concepts',
        items: ['Serverless', 'Scalability', 'Load Balancing', 'CDN', 'Networking (VPC, Subnets)']
      }
    ]
  }
];

export const Digitalskill: Skillcategory[]=[
{
    name: 'Digital Marketing',
    subcategories: [
      {
        title: 'Core Skills',
        items: ['SEO', 'SEM', 'Content Marketing', 'Email Marketing']
      },
      {
        title: 'Social Media',
        items: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Marketing', 'TikTok Ads']
      },
      {
        title: 'Analytics & Tools',
        items: ['Google Analytics', 'Google Tag Manager', 'Ahrefs', 'SEMRush']
      }
    ]
  },

  {
    name: 'Graphic Design',
    subcategories: [
      {
        title: 'Design Tools',
        items: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'Sketch']
      },
      {
        title: 'Design Concepts',
        items: ['Typography', 'Color Theory', 'Branding', 'UI/UX Design']
      }
    ]
  },

  {
    name: 'Video & Multimedia',
    subcategories: [
      {
        title: 'Video Editing',
        items: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'Filmora']
      },
      {
        title: 'Animation & Motion Graphics',
        items: ['After Effects', 'Blender', 'Cinema 4D']
      }
    ]
  },

  {
    name: 'Office Productivity',
    subcategories: [
      {
        title: 'Microsoft Office',
        items: ['Word', 'Excel', 'PowerPoint', 'Outlook']
      },
      {
        title: 'Google Workspace',
        items: ['Docs', 'Sheets', 'Slides', 'Drive', 'Forms']
      }
    ]
  },

  {
    name: 'E-Commerce & Online Business',
    subcategories: [
      {
        title: 'Platforms',
        items: ['Shopify', 'WooCommerce', 'Daraz', 'Amazon', 'Alibaba']
      },
      {
        title: 'Operations',
        items: ['Product Listing', 'Order Management', 'Inventory Management', 'Payment Gateways']
      },
      {
        title: 'Marketing & Sales',
        items: ['Social Media Ads', 'Email Campaigns', 'Affiliate Marketing']
      }
    ]
  },

  {
    name: 'Programming & Web Tools',
    subcategories: [
      {
        title: 'Basic Programming',
        items: ['HTML', 'CSS', 'JavaScript', 'Python Basics']
      },
      {
        title: 'CMS & Website Builders',
        items: ['WordPress', 'Wix', 'Squarespace', 'Webflow']
      }
    ]
  },

  {
    name: 'Cloud & Remote Tools',
    subcategories: [
      {
        title: 'Cloud Storage & Collaboration',
        items: ['Google Drive', 'Dropbox', 'OneDrive', 'Slack', 'Trello']
      },
      {
        title: 'Remote Work Tools',
        items: ['Zoom', 'Microsoft Teams', 'Notion', 'Asana']
      }
    ]
  }
];

export const EcommerceSkills: Skillcategory[] = [
  {
    name: 'E-Commerce Platforms',
    subcategories: [
      {
        title: 'Popular Platforms',
        items: ['Shopify', 'WooCommerce', 'Magento', 'Daraz', 'Amazon', 'Alibaba', 'Etsy', 'BigCommerce']
      },
      {
        title: 'Website Builders',
        items: ['Wix', 'Squarespace', 'Webflow', 'WordPress + WooCommerce']
      }
    ]
  },

  {
    name: 'Product Management',
    subcategories: [
      {
        title: 'Core Skills',
        items: ['Product Listing', 'Inventory Management', 'Pricing Strategy', 'Product Descriptions']
      },
      {
        title: 'Visual Content',
        items: ['Product Photography', 'Image Editing', 'Video Demonstrations', '360° Product Views']
      }
    ]
  },

  {
    name: 'Marketing & Sales',
    subcategories: [
      {
        title: 'Digital Marketing',
        items: ['SEO for E-Commerce', 'Google Ads', 'Facebook/Instagram Ads', 'Email Marketing']
      },
      {
        title: 'Social Media',
        items: ['Influencer Marketing', 'Affiliate Marketing', 'Content Marketing', 'Community Building']
      },
      {
        title: 'Customer Engagement',
        items: ['Chatbots', 'Live Chat', 'Customer Feedback', 'Loyalty Programs']
      }
    ]
  },

  {
    name: 'Operations & Payments',
    subcategories: [
      {
        title: 'Order Management',
        items: ['Order Processing', 'Shipping & Fulfillment', 'Return Management', 'Inventory Syncing']
      },
      {
        title: 'Payment Gateways',
        items: ['PayPal', 'Stripe', 'Payoneer', 'Credit/Debit Cards', 'Bank Transfers']
      },
      {
        title: 'Analytics & Optimization',
        items: ['Sales Analytics', 'Conversion Rate Optimization', 'A/B Testing', 'Customer Insights']
      }
    ]
  },

  {
    name: 'Customer Support',
    subcategories: [
      {
        title: 'Support Channels',
        items: ['Email Support', 'Phone Support', 'Live Chat', 'Social Media Support']
      },
      {
        title: 'CRM Tools',
        items: ['HubSpot', 'Zoho CRM', 'Salesforce', 'Freshdesk']
      }
    ]
  }
];

