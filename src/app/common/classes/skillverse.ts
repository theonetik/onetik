import { Skillcategory } from "../interface/skillcategory"

export const TechSkill: Skillcategory[] = [
  {
    name: 'Frontend Development',
    subcategories: [
      {
        title: 'Core Skills',
        items: [
          'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design',
          'Accessibility (A11y)', 'Web Performance Optimization'
        ]
      },
      {
        title: 'Frameworks & Libraries',
        items: [
          'Angular', 'React.js', 'Vue.js', 'Svelte', 'Next.js', 'Nuxt.js',
          'Astro', 'SolidJS', 'Qwik', 'Remix'
        ]
      },
      {
        title: 'UI & Styling',
        items: [
          'TailwindCSS', 'Bootstrap', 'Material UI', 'Chakra UI',
          'Sass/SCSS', 'Styled Components', 'Radix UI', 'Ant Design'
        ]
      },
      {
        title: 'State Management',
        items: [
          'Redux', 'NgRx', 'MobX', 'Zustand', 'Recoil', 'Vuex', 'Pinia', 'Jotai', 'Signals'
        ]
      },
      {
        title: 'Build Tools',
        items: [
          'Vite', 'Webpack', 'ESBuild', 'Rollup', 'Parcel', 'SWC'
        ]
      },
      {
        title: 'Testing',
        items: [
          'Jest', 'Jasmine', 'Cypress', 'Playwright', 'Vitest', 'Testing Library'
        ]
      },
      {
        title: 'Other Web Skills',
        items: [
          'WebSockets', 'Service Workers', 'PWAs', 'WebAssembly (WASM)', 'SEO Basics'
        ]
      }
    ]
  },

  {
    name: 'Backend Development',
    subcategories: [
      {
        title: 'Languages',
        items: ['Node.js', 'Python', 'Java', 'C# (.NET)', 'Go', 'PHP', 'Rust', 'C++', 'Ruby']
      },
      {
        title: 'Frameworks',
        items: [
          'Express.js', 'NestJS', 'AdonisJS', 'Hapi.js',
          'Django', 'Flask', 'FastAPI',
          'Spring Boot', 'ASP.NET Core',
          'Laravel', 'Symfony', 'Ruby on Rails'
        ]
      },
      {
        title: 'API Development',
        items: ['REST API', 'GraphQL', 'tRPC', 'gRPC', 'WebSockets', 'OpenAPI/Swagger']
      },
      {
        title: 'Authentication',
        items: [
          'JWT', 'OAuth2', 'SAML', 'Sessions', 'Auth0', 'Firebase Auth', 'Clerk', 'API Security'
        ]
      },
      {
        title: 'Architectures',
        items: [
          'Microservices', 'Serverless', 'Event-Driven Architecture',
          'Monolithic', 'CQRS', 'DDD', 'Clean Architecture'
        ]
      }
    ]
  },

  {
    name: 'Mobile Development',
    subcategories: [
      {
        title: 'Cross Platform',
        items: ['Flutter', 'React Native', 'Ionic + Angular', 'Kotlin Multiplatform', 'MAUI (.NET)']
      },
      {
        title: 'Native Apps',
        items: ['Android (Kotlin/Java)', 'iOS (Swift & SwiftUI)']
      },
      {
        title: 'Tools',
        items: ['Firebase', 'OneSignal', 'App Center', 'Fastlane', 'Expo']
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
        items: ['MongoDB', 'Firestore', 'DynamoDB', 'CouchDB', 'Cassandra', 'ScyllaDB']
      },
      {
        title: 'Search & Analytics',
        items: ['ElasticSearch', 'OpenSearch', 'Meilisearch', 'Algolia']
      },
      {
        title: 'Graph Databases',
        items: ['Neo4j', 'ArangoDB', 'JanusGraph']
      },
      {
        title: 'In-Memory',
        items: ['Redis', 'Memcached']
      },
      {
        title: 'Time Series DB',
        items: ['InfluxDB', 'TimescaleDB', 'Prometheus TSDB']
      },
      {
        title: 'ORM / Query Builders',
        items: ['Prisma', 'TypeORM', 'Sequelize', 'Mongoose', 'Hibernate', 'Entity Framework', 'Drizzle ORM']
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
        items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'TravisCI']
      },
      {
        title: 'Containers',
        items: ['Docker', 'Docker Compose', 'Podman']
      },
      {
        title: 'Orchestration',
        items: ['Kubernetes', 'Helm', 'OpenShift', 'K3s', 'Rancher']
      },
      {
        title: 'Infrastructure as Code',
        items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
      },
      {
        title: 'Monitoring',
        items: [
          'Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'Sentry', 'Jaeger (Tracing)'
        ]
      },
      {
        title: 'Networking',
        items: ['NGINX', 'Apache', 'Load Balancers', 'Reverse Proxy', 'DNS', 'VPN']
      },
      {
        title: 'Service Mesh',
        items: ['Istio', 'Linkerd', 'Consul']
      }
    ]
  },

  {
    name: 'Cloud',
    subcategories: [
      {
        title: 'Providers',
        items: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'DigitalOcean', 'Linode']
      },
      {
        title: 'AWS Skills',
        items: [
          'EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'API Gateway', 'CloudWatch',
          'IAM', 'ECS', 'EKS', 'SQS', 'SNS'
        ]
      },
      {
        title: 'GCP Skills',
        items: [
          'Firebase', 'Cloud Run', 'Cloud Functions', 'App Engine', 'BigQuery',
          'Cloud Storage', 'Firestore', 'Pub/Sub'
        ]
      },
      {
        title: 'Azure Skills',
        items: [
          'Azure Functions', 'Azure SQL', 'Blob Storage', 'AKS', 'App Service',
          'Event Grid', 'Cosmos DB'
        ]
      },
      {
        title: 'Cloud Concepts',
        items: [
          'Serverless', 'Scalability', 'Load Balancing', 'CDN', 'Networking (VPC, Subnets)',
          'High Availability', 'Disaster Recovery', 'Zero Trust Security'
        ]
      }
    ]
  },

  {
    name: 'AI / ML',
    subcategories: [
      {
        title: 'AI Skills',
        items: [
          'Machine Learning Basics', 'Data Analysis', 'LLMs', 'Prompt Engineering',
          'Vector Databases (Pinecone, Weaviate, Chroma)', 'Embeddings', 'RAG Systems'
        ]
      },
      {
        title: 'Frameworks',
        items: [
          'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LlamaIndex'
        ]
      }
    ]
  },

  {
    name: 'Cybersecurity',
    subcategories: [
      {
        title: 'Security Skills',
        items: [
          'Penetration Testing', 'OWASP Top 10', 'Secure Coding', 'Encryption',
          'Network Security', 'Identity & Access Management'
        ]
      },
      {
        title: 'Tools',
        items: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit']
      }
    ]
  },

  {
    name: 'Tools & Productivity',
    subcategories: [
      {
        title: 'Tools',
        items: ['VS Code', 'Postman', 'Figma', 'Swagger', 'Jira', 'Notion', 'Trello']
      }
    ]
  }
];


export const Digitalskill: Skillcategory[] = [
  {
    name: 'Digital Marketing',
    subcategories: [
      {
        title: 'Core Skills',
        items: [
          'SEO', 'SEM', 'Content Marketing', 'Email Marketing',
          'Copywriting', 'Inbound Marketing', 'Lead Generation',
          'Marketing Automation', 'Conversion Rate Optimization (CRO)'
        ]
      },
      {
        title: 'Social Media',
        items: [
          'Facebook Ads', 'Instagram Marketing', 'LinkedIn Marketing',
          'TikTok Ads', 'YouTube Marketing', 'Pinterest Marketing',
          'Twitter/X Marketing', 'Social Media Management'
        ]
      },
      {
        title: 'Analytics & Tools',
        items: [
          'Google Analytics', 'Google Tag Manager', 'Ahrefs',
          'SEMRush', 'Google Search Console', 'Hotjar', 'Moz',
          'Meta Business Suite', 'HubSpot CRM'
        ]
      }
    ]
  },

  {
    name: 'Graphic Design',
    subcategories: [
      {
        title: 'Design Tools',
        items: [
          'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma',
          'Sketch', 'CorelDRAW', 'Affinity Designer'
        ]
      },
      {
        title: 'Design Concepts',
        items: [
          'Typography', 'Color Theory', 'Branding', 'UI/UX Design',
          'Wireframing', 'Prototyping', 'Layout Design'
        ]
      },
      {
        title: 'Branding & Identity',
        items: [
          'Logo Design', 'Brand Guidelines', 'Social Media Assets',
          'Packaging Design'
        ]
      }
    ]
  },

  {
    name: 'Video & Multimedia',
    subcategories: [
      {
        title: 'Video Editing',
        items: [
          'Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve',
          'Filmora', 'CapCut', 'Adobe Rush'
        ]
      },
      {
        title: 'Animation & Motion Graphics',
        items: [
          'After Effects', 'Blender', 'Cinema 4D', 'Toonly',
          'Vyond', 'Moho Anime Studio'
        ]
      },
      {
        title: 'Content Creation',
        items: [
          'YouTube Content', 'TikTok Content', 'Short-Form Content',
          'Green Screen Editing', 'Sound Design', 'Voiceover Editing'
        ]
      }
    ]
  },

  {
    name: 'Office Productivity',
    subcategories: [
      {
        title: 'Microsoft Office',
        items: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Access']
      },
      {
        title: 'Google Workspace',
        items: ['Docs', 'Sheets', 'Slides', 'Drive', 'Forms']
      },
      {
        title: 'General Skills',
        items: ['PDF Editing', 'Data Entry', 'Typing Skills', 'File Management']
      }
    ]
  },

  {
    name: 'E-Commerce & Online Business',
    subcategories: [
      {
        title: 'Platforms',
        items: [
          'Shopify', 'WooCommerce', 'Daraz', 'Amazon', 'Etsy', 'eBay',
          'Alibaba', 'Fiverr', 'Upwork'
        ]
      },
      {
        title: 'Operations',
        items: [
          'Product Listing', 'Order Management', 'Inventory Management',
          'Payment Gateways', 'Customer Support', 'Account Handling'
        ]
      },
      {
        title: 'Marketing & Sales',
        items: [
          'Social Media Ads', 'Email Campaigns', 'Affiliate Marketing',
          'Sales Funnel Design', 'Landing Page Optimization'
        ]
      }
    ]
  },

  {
    name: 'Programming & Web Tools',
    subcategories: [
      {
        title: 'Basic Programming',
        items: ['HTML', 'CSS', 'JavaScript', 'Python Basics', 'SQL Basics']
      },
      {
        title: 'CMS & Website Builders',
        items: [
          'WordPress', 'Wix', 'Squarespace', 'Webflow', 'Shopify Theme Editing'
        ]
      },
      {
        title: 'No-Code Tools',
        items: [
          'Bubble.io', 'Zapier', 'Make.com', 'Carrd', 'Tally Forms'
        ]
      }
    ]
  },

  {
    name: 'Cloud & Remote Tools',
    subcategories: [
      {
        title: 'Cloud Storage & Collaboration',
        items: [
          'Google Drive', 'Dropbox', 'OneDrive', 'Slack', 'Trello',
          'Notion', 'Asana'
        ]
      },
      {
        title: 'Remote Work Tools',
        items: [
          'Zoom', 'Microsoft Teams', 'Discord', 'Miro', 'Airtable',
          'Calendly'
        ]
      }
    ]
  },

  {
    name: 'AI & Automation',
    subcategories: [
      {
        title: 'AI Tools',
        items: [
          'ChatGPT', 'Midjourney', 'DALL·E', 'Adobe Firefly', 'Runway ML',
          'Google Gemini', 'Claude', 'Leonardo AI'
        ]
      },
      {
        title: 'AI Skills',
        items: [
          'Prompt Engineering', 'Image Generation', 'AI Video Creation',
          'AI Chatbot Setup', 'Automation Workflows'
        ]
      },
      {
        title: 'Automation Tools',
        items: ['Zapier', 'Make.com', 'IFTTT', 'Notion Automation']
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
        items: [
          'Shopify', 'WooCommerce', 'Magento', 'Daraz', 'Amazon', 'Alibaba',
          'Etsy', 'BigCommerce', 'Squarespace Commerce', 'Wix eCommerce', 'PrestaShop'
        ]
      },
      {
        title: 'Website Builders & CMS',
        items: [
          'Wix', 'Squarespace', 'Webflow', 'WordPress + WooCommerce', 'Shopify Plus', 'Drupal Commerce'
        ]
      },
      {
        title: 'Headless Commerce & APIs',
        items: ['Shopify Hydrogen', 'Commerce.js', 'Snipcart', 'BigCommerce Headless']
      }
    ]
  },

  {
    name: 'Product Management',
    subcategories: [
      {
        title: 'Core Skills',
        items: [
          'Product Listing', 'Inventory Management', 'Pricing Strategy', 'Product Descriptions',
          'SKU Management', 'Variant Management', 'Catalog Optimization'
        ]
      },
      {
        title: 'Visual Content',
        items: [
          'Product Photography', 'Image Editing', 'Video Demonstrations',
          '360° Product Views', 'AR/3D Product Models', 'Graphic Design for Products'
        ]
      },
      {
        title: 'Advanced Tools',
        items: ['Canva for Product Assets', 'Adobe Photoshop', 'Lightroom', 'Figma']
      }
    ]
  },

  {
    name: 'Marketing & Sales',
    subcategories: [
      {
        title: 'Digital Marketing',
        items: [
          'SEO for E-Commerce', 'Google Ads', 'Facebook/Instagram Ads',
          'Email Marketing', 'PPC Campaigns', 'Retargeting Ads', 'Google Shopping Ads'
        ]
      },
      {
        title: 'Social Media & Influencer Marketing',
        items: [
          'Influencer Marketing', 'Affiliate Marketing', 'Content Marketing',
          'Community Building', 'TikTok Marketing', 'Pinterest Marketing'
        ]
      },
      {
        title: 'Customer Engagement & Retention',
        items: [
          'Chatbots', 'Live Chat', 'Customer Feedback', 'Loyalty Programs',
          'Push Notifications', 'SMS Marketing', 'CRM Campaigns'
        ]
      },
      {
        title: 'Sales Funnels & Conversion',
        items: [
          'Landing Page Optimization', 'A/B Testing', 'Upselling & Cross-selling',
          'Email Automation', 'Conversion Rate Optimization (CRO)'
        ]
      }
    ]
  },

  {
    name: 'Operations & Payments',
    subcategories: [
      {
        title: 'Order Management',
        items: [
          'Order Processing', 'Shipping & Fulfillment', 'Return Management',
          'Inventory Syncing', 'Dropshipping Operations', 'Warehouse Management'
        ]
      },
      {
        title: 'Payment Gateways',
        items: [
          'PayPal', 'Stripe', 'Payoneer', 'Credit/Debit Cards',
          'Bank Transfers', 'Apple Pay', 'Google Pay', 'Klarna', 'Afterpay'
        ]
      },
      {
        title: 'Analytics & Optimization',
        items: [
          'Sales Analytics', 'Conversion Rate Optimization', 'A/B Testing',
          'Customer Insights', 'Google Analytics 4', 'Hotjar', 'Klaviyo Analytics'
        ]
      }
    ]
  },

  {
    name: 'Customer Support',
    subcategories: [
      {
        title: 'Support Channels',
        items: [
          'Email Support', 'Phone Support', 'Live Chat', 'Social Media Support',
          'Helpdesk Automation', 'Self-Service Knowledge Base'
        ]
      },
      {
        title: 'CRM & Support Tools',
        items: [
          'HubSpot', 'Zoho CRM', 'Salesforce', 'Freshdesk', 'Zendesk', 'Gorgias'
        ]
      },
      {
        title: 'Customer Experience & Retention',
        items: [
          'Customer Loyalty Programs', 'Subscription Management',
          'Feedback Analysis', 'Customer Journey Mapping'
        ]
      }
    ]
  },

  {
    name: 'E-Commerce Analytics & AI',
    subcategories: [
      {
        title: 'Analytics & Reporting',
        items: [
          'Google Analytics 4', 'Enhanced E-Commerce Tracking', 'KPI Dashboards',
          'Sales Forecasting', 'Customer Segmentation', 'Funnel Analysis'
        ]
      },
      {
        title: 'AI & Automation Tools',
        items: [
          'ChatGPT for Customer Support', 'AI Product Description Generation',
          'AI Image Editing (MidJourney, DALL·E)', 'AI-powered Marketing Tools',
          'Recommendation Engines'
        ]
      }
    ]
  },

  {
    name: 'Logistics & Supply Chain',
    subcategories: [
      {
        title: 'Shipping & Delivery',
        items: [
          'Courier Management', 'International Shipping', 'Fulfillment Services',
          'Last-Mile Delivery Optimization'
        ]
      },
      {
        title: 'Supply Chain Tools',
        items: [
          'ERP Integration', 'Inventory Forecasting', 'Warehouse Automation',
          'Dropshipping Platforms'
        ]
      }
    ]
  }
];


